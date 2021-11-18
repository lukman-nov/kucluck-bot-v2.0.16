<!DOCTYPE HTML>
<html>

<head>
  <meta charset="UTF-8">
  <title>Payment Checkout Kucluck Pro</title>
  <link rel="shortcut icon" href="/img/Gaming-podcast-Logo-only.png">
  <script src="https://kit.fontawesome.com/9746709e58.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="../../css/payment.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
</head>

<body>
  <?php
  // define variables and set to empty values
  $nameErr = $discordErr = $tagErr = $emailErr = $syaratErr = $submitErr ="";
  $name = $discord = $tag = $email = $syarat =  $submit ="";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
      $nameErr = "Harap masukan nama kamu";
    } else {
      $name = test_input($_POST["name"]);
    }

    if (empty($_POST["discord"])) {
      $discordErr = "Harap masukan username dan tag";
    } else {
      $discord = test_input($_POST["discord"]);
    }

    if (empty($_POST["tag"])) {
      $tagErr = "Harap masukan tag";
    } else {
      $tag = test_input($_POST["tag"]);
    }

    if (empty($_POST["email"])) {
      $emailErr = "Harap masukan Email";
    } else {
      $email = test_input($_POST["email"]);
    }

    if (empty($_POST["syarat"])) {
      $syaratErr = "Anda harus menyetujui syarat dan ketentuan kucluck.com";
    } else {
      $syarat = test_input($_POST["syarat"]);
    }
    if (empty($_GET["submit"])) {
      $submitErr = "Anda harus mengisi form diatas!";
    } else {
      $submit = test_input($_GET["./qris.php"]);
    }
  }

  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>
  <div class="wrapper">
    <div class="payment">
      <div class="payment-logo">
        <img src="../../img/Logo pro small.png" width="100px">
      </div>
      <h2>Pembelian Kucluck Pro</h2>
      <form class="row g-3 needs-validation" method="post" action="qris.php" method="POST" novalidate>
        <script src="../../script/validation.js"></script>

        <div class="card space icon-relative">
          <label class="label" required>Nama:<span class="error" >*</span></label>
          <input type="text" class="input" name="name" placeholder="Nama Kamu">
          <div class="invalid-feedback">
            <span class="error"><?php echo $nameErr; ?></span>
          </div>
          <i class="fas fa-user"></i>
        </div>

        <div class="card space icon-relative">
          <label class="label" required>Username Discord:<span class="error">*</span></label>
          <div class="card-username">
            <input type="text" class="input-username" name="discord" placeholder="Username">
            <input type="number" class="input-tag" name="tag" placeholder="0000" data-mask="0000">
            <div class="invalid-feedback">
            <span class="error"><?php echo $discordErr; ?></span>
            </div>
          </div>
          <i class="fab fa-discord"></i>
          <i class="fas fa-hashtag"></i>
        </div>

        <div class="card space icon-relative">
        <label class="label" required>Email:<span class="error">*</span></label>
        <input type="text" class="input" name="email" placeholder="kucluck@example.com">
        <i class="fas fa-envelope"></i>
        <div class="invalid-feedback">
        <span class="error"><?php echo $emailErr; ?></span>
        </div>
        </div>

        <input type="checkbox" name="syarat" required>Saya setuju bahwa pembayaran yang sudah masuk tidak bisa dikembalikan, kecuali dengan <a href="./tos.html" target="popup" onclick="window.open('./tos.html','popup','width=600,height=650'); return false;">syarat sebagai berikut</a>
        <br>
        <div class="invalid-feedback">
          <span class="error"><?php echo $syaratErr; ?></span>
        </div>
        <br>
        <br>
        <input type="submit" name="submit" value="Langsung Bayar" class="btn" title="Bayar">
      </form>
    </div>
  </div>
</body>

</html>