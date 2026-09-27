/* deck-crypto.js — 课件加密图解密（AES-256-GCM，PBKDF2-SHA256 150k）
   布局：magic"JDK1"(4B) + salt(16B) + nonce(12B) + tag(16B) + ciphertext
   密钥从用户输入的密码现场派生，不存储、不传输；服务器与 git 仓库只有密文。 */
window.DeckCrypto = (function(){
  var enc = new TextEncoder();
  var cache = {};   /* 页码 -> blobURL（会话内存缓存，关页即失效） */

  function deriveKey(pass, saltBytes){
    return crypto.subtle.importKey('raw', enc.encode(pass), 'PBKDF2', false, ['deriveKey'])
      .then(function(base){
        return crypto.subtle.deriveKey(
          {name:'PBKDF2', salt:saltBytes, iterations:150000, hash:'SHA-256'},
          base, {name:'AES-GCM', length:256}, false, ['decrypt']);
      });
  }

  function decryptPage(n, pass){
    if(cache[n]) return Promise.resolve(cache[n]);
    var name = 'img/enc/deck-' + String(n).padStart(2,'0') + '.png.enc';
    return fetch(name)
      .then(function(r){ if(!r.ok) throw new Error('fetch '+r.status); return r.arrayBuffer(); })
      .then(function(buf){
        var b = new Uint8Array(buf);
        if(b.length < 48 || b[0]!==0x4A || b[1]!==0x44 || b[2]!==0x4B || b[3]!==0x31) throw new Error('format');
        var salt = b.slice(4,20), nonce = b.slice(20,32), tag = b.slice(32,48), ct = b.slice(48);
        /* WebCrypto AES-GCM 期望密文尾部带 tag */
        var ctWithTag = new Uint8Array(ct.length + 16);
        ctWithTag.set(ct, 0); ctWithTag.set(tag, ct.length);
        return deriveKey(pass, salt).then(function(key){
          return crypto.subtle.decrypt({name:'AES-GCM', iv:nonce}, key, ctWithTag);
        });
      })
      .then(function(plain){
        var url = URL.createObjectURL(new Blob([plain], {type:'image/png'}));
        cache[n] = url;
        return url;
      })
      .catch(function(e){ console.warn('deck decrypt fail:', e && e.message); return null; });
  }

  return { decryptPage: decryptPage };
})();
