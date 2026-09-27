<?php
/**
 * submit.php - optional server-side inquiry handler
 * =================================================
 * 用法：
 * 1. 把本文件放在网站根目录（与 index.html 同级）。
 * 2. 修改下方 $to 邮箱与 $whatsapp 号码。
 * 3. 前台 JS 默认走 localStorage（演示模式）。要启用本接口，
 *    把 js/main.js 中 bindInquiryForm 提交部分取消注释的 fetch 调用打开
 *    （搜索 "api/submit.php" 即可找到）。
 *
 * 功能：接收询盘表单 JSON，发送邮件通知，并追加保存到 data/inquiries.json
 * （首次提交会自动创建 data 目录）。
 */

header('Content-Type: application/json; charset=utf-8');

$to      = 'sales@yourdomain.com';        // ← 改成你的邮箱
$from    = 'no-reply@yourdomain.com';     // ← 发件邮箱（需与服务器域名匹配）
$waNum   = '8615788886666';               // ← 你的 WhatsApp 号码（纯数字）
$dataDir = __DIR__ . '/data';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'msg' => 'Method not allowed']);
    exit;
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data || empty($data['name']) || empty($data['email'])) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'msg' => 'Missing required fields']);
    exit;
}

$line = array_map(function ($v) {
    return trim(strip_tags((string)$v));
}, $data);

$subject = '【新询盘】' . ($line['product'] ?: 'Home appliances') . ' - ' . $line['name'];
$body    = "收到新的询盘：\n\n"
    . "姓名:   {$line['name']}\n"
    . "公司:   {$line['company']}\n"
    . "邮箱:   {$line['email']}\n"
    . "电话:   {$line['phone']}\n"
    . "国家:   {$line['country']}\n"
    . "产品:   {$line['product']}\n"
    . "数量:   {$line['qty']}\n"
    . "页面:   {$line['page']}\n"
    . "消息:   {$line['msg']}\n";

$mailOk = @mail($to, $subject, $body, "From: $from\r\nReply-To: {$line['email']}\r\nContent-Type: text/plain; charset=utf-8");

if (!is_dir($dataDir)) @mkdir($dataDir, 0755, true);
$file = $dataDir . '/inquiries.json';
$list = [];
if (is_file($file)) {
    $list = json_decode(file_get_contents($file), true) ?: [];
}
$line['ts'] = date('c');
array_unshift($list, $line);
@file_put_contents($file, json_encode($list, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

echo json_encode(['ok' => true, 'mail' => $mailOk, 'wa' => 'https://wa.me/' . $waNum]);
