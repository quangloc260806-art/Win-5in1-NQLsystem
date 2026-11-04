// My-5in1 - SoundCloud Module
// Safe API inspection

if (!$response) {
    $done({});
} else {
    console.log("[My-5in1] SoundCloud response received");

    $done({
        body: $response.body
    });
}
