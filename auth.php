<?php
$auth_data = $_GET;

define('TELEGRAM_BOT_TOKEN', '8083830932:AAGghWJmJYIlnV0A_huu0x8HckQMT9B_Wcs');

// Function to check the auth data
function checkTelegramAuthorization($auth_data) {
    $check_hash = $auth_data['hash'];
    unset($auth_data['hash']);
    $data_check_arr = [];

    foreach ($auth_data as $key => $value) {
        $data_check_arr[] = $key . '=' . $value;
    }

    sort($data_check_arr);
    $data_check_string = implode("\n", $data_check_arr);
    $secret_key = hash('sha256', TELEGRAM_BOT_TOKEN, true);
    $hash = hash_hmac('sha256', $data_check_string, $secret_key);

    return hash_equals($hash, $check_hash);
}

if (checkTelegramAuthorization($auth_data)) {
    // Success! User is authenticated.
    echo json_encode($auth_data);
} else {
    // Authorization failed
    echo json_encode(['error' => 'Unauthorized']);
}
?>
