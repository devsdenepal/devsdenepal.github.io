<!DOCTYPE html>
<html lang="en">
<!-- <meta http-equiv="refresh" content = "1"> -->
<?php
// Initialize the session
session_start();
error_reporting(E_ERROR | E_PARSE);
$usr = $_SESSION['username'];

// Check if the user is already logged in, if yes then redirect him to welcome page
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    echo  '<iframe name="worker" class="muted"></iframe>  <div><div> <div id="fb-root"></div>
    <dcn-header-section>
        <dcn-header id="hdr">
            <dcn-title>
                <dcn-title-word0>Dev</dcn-title-word0>
                <dcn-title-word1> Community</dcn-title-word1>
                <dcn-title-word2> Nepal</dcn-title-word2>
            </dcn-title>
            <dcn-sup>&reg;</dcn-sup>
            <dcn-navbar style="display: inline-flex; flex-direction: row;float: right;}">
            <dcn-text><image src="https://picsum.photos/200" style="width;40px;height:40px;border-radius:50%;border:1px solid black;padding:0px;vertical-align:baseline;" title= "' . $usr . '" onclick="open_option()">' . '</dcn-text>
                <dcn-text><input type="search" placeholder="Search.." style="margin-top:10px !important;"></dcn-text>
                <dcn-text class="nd">
                    <input title="dark-mode" type="image" class="icon2 btn-f-bn login-button" id="0" onclick="toggle_theme(this.id)" src="../assets/icons/night.png">
                </dcn-text>
                <dcn-text>
                    <dcn-button class="cow round-m" onclick="subscribe()">Subscribe</dcn-button>
                </dcn-text>
            </dcn-navbar>';
} else {
    echo '<script>window.location.href="login.php"</script>';
}

// Include config file
require_once "config.php";
?>

<head>
    <meta charset="UTF-8">
    <meta property="og:title" content="DCN : Dev Community Nepal">
    <meta name="description" content="The Constructive and Inclusive social networking platform">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog : DCN</title>
    <style>
        @import url(../worker.css);
        @import url(blog.css);

        .dark-theme {
            color: var(--theme_color);
            background-color: var(--primary_color);
        }

        .bnr {
            padding: 40px 0;
            width: 100%;
            max-height: 1440px;
            position: relative;
            border: 2px solid #dfe3e6;
            box-shadow: 2px 2px 2px #dfe3e6;
            overflow: hidden;
            color: #001e2b;
            background: no-repeat url(https://jess.forem.lol/remoteimages/uploads/articles/76ooqjofkcqviqoupdpi.png) white;
            background-size: cover;
            background-position: center;
        }

        dcn-header.dark-theme {
            color: #000;
            background-color: aliceblue;
        }
    </style>
    <script src="https://kit.fontawesome.com/1364c3c233.js" crossorigin="anonymous" defer></script>
    <script src="blog.js" defer></script>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0" nonce="Z8ak8wbb"></script>

</head>

<body>

    </dcn-header>
    <!-- 
    <section class="menu"><br /><br />        -->

    <dcn-header style="top:10% !important" id="hdr2">
        <hr />
        <dcn-navbar>
            <dcn-text onclick="navigate(this.id)" id="community">&nbsp;&nbsp;Dashboard</dcn-text>

            <dcn-text onclick="navigate(this.id)" id="course">&nbsp;&nbsp;Courses</dcn-text>



            <dcn-text onclick="navigate(this.id)" id="events">&nbsp;&nbsp;Events</dcn-text>

            <dcn-text onclick="navigate(this.id)" id="faq">&nbsp;&nbsp;FAQs</dcn-text>

            <dcn-text onclick="navigate(this.id)" id="tech-support">&nbsp;&nbsp;Tech Support</dcn-text>

            <dcn-text onclick="navigate(this.id)" id="guide">&nbsp;&nbsp;Guides</dcn-text>

            <dcn-text onclick="navigate(this.id)" id="">&nbsp;&nbsp;Our members</dcn-text>


            <dcn-text>&nbsp;&nbsp;Who are we?</dcn-text>
            <dcn-text>&nbsp;&nbsp;Get in touch</dcn-text>
            <dcn-text>&nbsp;&nbsp;Our Platforms</dcn-text>
        </dcn-navbar>
        </dcn-header-section>
        <!-- <dcn-navbar class="bottom"> -->

        <!-- <h3>
                <dcn-title-word0>Dev</dcn-title-word0>
                <dcn-title-word1>Community</dcn-title-word1>
                <dcn-title-word2>Nepal</dcn-title-word2>&copy;
            </h3>
            <a href="#policy">Terms of service and policy</a>
             <div class="fb-like" data-href="https://facebook.com/DevCommunityNepal" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div> 
        </dcn-navbar> -->
    </dcn-header>
    </section>
    <section class="main">


    </section>
    </section>

</body>

</html>