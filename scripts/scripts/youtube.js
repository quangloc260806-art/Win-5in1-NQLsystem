// My-5in1 - YouTube Module
// Safe API inspection

if (!$response) {
    $done({});
} else {
    console.log("[My-5in1] YouTube response received");

    $done({
        body: $response.body
    });
}
