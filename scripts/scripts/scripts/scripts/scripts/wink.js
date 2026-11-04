// My-5in1 - Wink Module
// Safe API inspection

if (!$response) {
    $done({});
} else {
    console.log("[My-5in1] Wink response received");

    $done({
        body: $response.body
    });
}
