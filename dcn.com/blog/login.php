<link rel="shortcut icon" href="profile.png">
<?php
// Initialize the session
session_start();

// Check if the user is already logged in, if yes then redirect him to welcome page
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    echo '<script type="text/javascript"> alert(' . $username . ')</script>';
    header("location: index.php");
    exit;
}

// Include config file
require_once "config.php";

// Define variables and initialize with empty values
$username = $password = "";
$username_err = $password_err = $login_err = "";

// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Check if username is empty
    if (empty(trim($_POST["username"]))) {
        $username_err = "Please enter username.";
    } else {
        $username = trim($_POST["username"]);
    }

    // Check if password is empty
    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter your password.";
    } else {
        $password = trim($_POST["password"]);
    }

    // Validate credentials
    if (empty($username_err) && empty($password_err)) {
        // Prepare a select statement
        $sql = "SELECT id, username, password FROM users WHERE username = ?";

        if ($stmt = mysqli_prepare($link, $sql)) {
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            // Set parameters
            $param_username = $username;

            // Attempt to execute the prepared statement
            if (mysqli_stmt_execute($stmt)) {
                // Store result
                mysqli_stmt_store_result($stmt);

                // Check if username exists, if yes then verify password
                if (mysqli_stmt_num_rows($stmt) == 1) {
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
                    if (mysqli_stmt_fetch($stmt)) {
                        if (password_verify($password, $hashed_password)) {
                            // Password is correct, so start a new session
                            session_start();

                            // Store data in session variables
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["username"] = $username;
                            $_SESSION["about"] = $about;

                            // Redirect user to welcome page
                            echo '<script type="text/javascript"> alert(' . $username . ')</script>';
                            header("location: index.php");
                        } else {
                            // Password is not valid, display a generic error message
                            $login_err = "Invalid username or password.";
                        }
                    }
                } else {
                    // Username doesn't exist, display a generic error message
                    $login_err = "Invalid username or password.";
                }
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }

            // Close statement
            mysqli_stmt_close($stmt);
        }
    }

    // Close connection
    mysqli_close($link);
}
?>

<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* @import url("login.css"); */

 
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&amp;display=swap');

    body {
      font-family: 'Open Sans', sans-serif;
      background: #f9faff;
      color: #3a3c47;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      margin: 0;
      padding: 10;
    }

    h1 {
      margin-top: 48px;
    }

    form {
      position: fixed;
      background: #fff;
      top: 70px;
      left: 450px;
      cursor: pointer;
      max-width: 398px;
      height: 285px;
      width: 100%;
      padding: 83px 44px;
      border: 1px solid ##e1e2f0;
      border-radius: 4px;
      box-shadow: 0 0 5px 0 rgb(42 45 48 / 12%);
      transition: all 0.3s ease;
    }

    .row {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .row label {
      font-size: 13px;
      color: #8086a9;
    }

    .row input {
      flex: 1;
      padding: 13px;
      border: 1px solid #d6d8e6;
      border-radius: 4px;
      font-size: 16px;
      transition: all 0.2s ease-out;
    }

    .row input:focus {
      outline: none;
      box-shadow: inset 2px 2px 5px 0 rgba(42, 45, 48, 0.12);
    }

    .row input::placeholder {
      color: #C8CDDF;
    }

    button {
      width: 100%;
      padding: 12px;
      font-size: 18px;
      background: #15C39A;
      color: #fff;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      font-family: 'Open Sans', sans-serif;
      margin-top: 15px;
      transition: background 0.2s ease-out;
    }

    button:hover {
      background: #55D3AC;
    }

    @media(max-width: 458px) {

      body {
        margin: 0 18px;
      }

      form {
        background: #f9faff;
        border: none;
        box-shadow: none;
        padding: 20px 0;
      }

    }
  </style>
</head>

<body>
  <div class="apt-header-base">
  </div>
  <div class="apt-header">
    <div id="img1" class="apt-header"><img src="../assets/images/logo.jpeg" />&nbsp;&nbsp;<span style="font-size:24px;"><span style="font-weight:500;color:rgb(255,136,0) !important;">DEV </span><span style="color:#000 !important;">Community</span><span style="color:rgb(253,8,57);"> Nepal</span></span></div>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <h3 style="color:rgb(126 34 206/1);">Welcome back dev !!</h3>
    <h2 style="font-weight:700;">Login to resume your journey...</h2>
      <div class="row">
        <label for="username">Email</label>
        <input type="text" name="username" class="form-control <?php echo (!empty($username_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $username; ?>" autocomplete="on" placeholder="john123" required>
      </div>
      <div class="row">
        <label for="password">Password</label>
        <input type="password" name="password" class="form-control <?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>" required>
      </div>
      <span class="invalid-feedback"><?php echo $password_err; ?></span>
      <input type="text" id="pltinp"style="display:none"  name="platform">
      <input type="submit" value="Sign in" name="submit"></br>
    </form>
<script>
  document.getElementById("pltinp").value = window.clientInformation.platform;
  </script>
</body>
</html>