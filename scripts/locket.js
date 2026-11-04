// My-5in1 - Locket Module
// Safe API inspection

if (!$response) {
    $done({});
} else {
    console.log("[My-5in1] Locket response received");

    $done({
        body: $response.body
    });
}
