// My-5in1 - Spotify Module
// Safe API inspection

if (!$response) {
    $done({});
} else {
    console.log("[My-5in1] Spotify response received");

    $done({
        body: $response.body
    });
}
