<?php
$host = 'localhost';
$user = 'root'; // Nama pengguna default untuk server lokal seperti XAMPP/WAMP
$password = ''; // Password default (biasanya kosong untuk server lokal)
$database = 'feedback_db';

// Buat koneksi
$conn = new mysqli($host, $user, $password, $database);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
?>
