<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $comment = $_POST['comment'];
    $rating = $_POST['rating'];

    $stmt = $conn->prepare("INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $name, $comment, $rating);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Komentar berhasil ditambahkan!"]);
    } else {
        echo json_encode(["error" => "Gagal menambahkan komentar"]);
    }

    $stmt->close();
    $conn->close();
}
?>
