<!DOCTYPE html>
<html lang="en">
    <!-- <meta http-equiv="refresh" content = "1"> -->
<?php
  session_start();
  $lg = true;
//   include_once "php/config.php";
  if(!isset($_SESSION['unique_id'])){
  $lg = false;
  }
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
</head>

<body>
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v14.0"
        nonce="Z8ak8wbb"></script>

    <dcn-header id="hdr">
        <dcn-title>
            <dcn-title-word0>Dev</dcn-title-word0>
            <dcn-title-word1> Community</dcn-title-word1>
            <dcn-title-word2> Nepal</dcn-title-word2>
        </dcn-title>
        <dcn-sup>&reg;</dcn-sup>
        <dcn-navbar>
            <dcn-text><input type="search" placeholder="Search.."></dcn-text>
            <dcn-text class="nd">
                <input title="dark-mode" type="image" class="icon2 btn-f-bn login-button" id="0"
                    onclick="toggle_theme(this.id)" src="../assets/icons/night.png">
            </dcn-text>
            <dcn-text>
                <dcn-button class="cow round-m" onclick="subscribe()">Subscribe</dcn-button>
            </dcn-text>
        </dcn-navbar>
    </dcn-header>

    <section class="menu"><br /><br />
        <dcn-navbar>
            <dcn-nav-button onclick="navigate(this.id)" id="community"><img
                    src="../assets/icons/dashboard.webp" class="round icon">&nbsp;&nbsp;Dashboard</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)"  id="course"><img src="../assets/icons/book.png"
                    class="icon">&nbsp;&nbsp;Courses</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)" id="blog" id="course" style="color:#fff;background-color:var(--blue)"><img src="../assets/icons/blog.png"
                    class=" round icon">&nbsp;&nbsp;Blog</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)" id="events"><img src="../assets/icons/calendar.png"
                    class="icon">&nbsp;&nbsp;Events</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)" id="faq"><img src="../assets/icons/faq.svg"
                    class="icon">&nbsp;&nbsp;FAQs</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)" id="tech-support"><img src="../assets/icons/tech-support.png"
                    class="icon">&nbsp;&nbsp;Tech Support</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)" id="guide"><img src="../assets/icons/bulb.png"
                    class=" round icon">&nbsp;&nbsp;Guides</dcn-nav-button>
            <hr />
            <dcn-nav-button onclick="navigate(this.id)" id=""><img src="../assets/icons/badge.png"
                    class="icon round ">&nbsp;&nbsp;Our members</dcn-nav-button>
            <hr />
            <hr />
            <dcn-nav-button>&nbsp;&nbsp;Who are we?</dcn-nav-button>
            <dcn-nav-button>&nbsp;&nbsp;Get in touch</dcn-nav-button>
            <dcn-nav-button>&nbsp;&nbsp;Our Platforms</dcn-nav-button>
        </dcn-navbar>
        <dcn-navbar class="bottom">

            <h3>
                <dcn-title-word0>Dev</dcn-title-word0>
                <dcn-title-word1>Community</dcn-title-word1>
                <dcn-title-word2>Nepal</dcn-title-word2>&copy;
            </h3>
            <a href="#policy">Terms of service and policy</a>
            <!-- <div class="fb-like" data-href="https://facebook.com/DevCommunityNepal" data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div> -->
        </dcn-navbar>
    </section>
    <section class="main">
        <div class="login-panel-i"><button class="login-button i-b" style=""><?php if($lg){echo "lg";}else{
            echo"Login";}?></button></div>
            <div class="card container card_head welcome-board" style=""><div class="w-h">Welcome to the hub of Nepali developers</div>
            </div>        <main>
            </main></section><script src="blog.js"></script></body></html>