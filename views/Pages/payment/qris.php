<!DOCTYPE HTML>
<html>

<head>
  <meta charset="UTF-8">
  <title>Payment Checkout Kucluck Pro</title>
  <link rel="shortcut icon" href="/img/Gaming-podcast-Logo-only.png">
  <script src="https://kit.fontawesome.com/9746709e58.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../../css/qris.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
</head>

<body>
    <!--payment.php-->
    <?php
    $name=$_POST['name'];
    if(empty($_POST['name'])){
    return false;
  }
$discord=$_POST['discord'];
if(empty($_POST['discord'])){
  return false;
}
$tag=$_POST['tag'];
if(empty($_POST['tag'])){
  return false;
}
$email=$_POST['email'];
if(empty($_POST['email'])){
  return false;
}
$syarat=$_POST['syarat'];
if(empty($_POST['syarat'])){
  return false;
}
  ?>

<div class="container">
    <div class="col qris-payment">
        <h1>Halo, <?php echo $name; ?></h1>
        <p>Silahkan melakukan pembayaran dengan cara scan QRIS dibawah ini.</p>
        <img src="https://media.discordapp.net/attachments/900258060948365393/907816456257953802/IMG_0546.jpg?width=331&height=468">
        <br>
        <form action="../premium.html">
            <input type="submit" value="Konfirmasi Pembayaran" class="konfirmasi">
        </form>
    </div>
</div>
</body>

</html>