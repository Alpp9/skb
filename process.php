<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $score = $_POST['score'];
    // Proses simpan ke database (contoh)
    // $db = new mysqli('host', 'user', 'password', 'database');
    // $db->query("INSERT INTO results (score) VALUES ('$score')");

    echo "Skor Anda telah disimpan: $score";
} else {
    echo "Metode tidak valid!";
}
?>
