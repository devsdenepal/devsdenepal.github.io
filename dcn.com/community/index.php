<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta property="og:title" content="DCN : Dev Community Nepal">
    <meta name="description" content="The Constructive and Inclusive social networking platform">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DCN || Developer Community Nepal</title>
    <style>
        @import url(../worker.css);
        @import url(community.css);

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
                <dcn-button class="btn-f-bn login-button" id="0" onclick="toggle_theme(this.id)">Change Theme</dcn-button>
            </dcn-text>
            <dcn-text>
                <dcn-button class="cow round-m" onclick="subscribe()">Subscribe</dcn-button>
            </dcn-text>
        </dcn-navbar>
    </dcn-header>

    <section class="menu"><br /><br />
        <dcn-navbar>
<dcn-nav-button style="color:#fff;background-color:var(--blue)">Dashboard</dcn-nav-button>
<dcn-nav-button>Courses</dcn-nav-button>
<dcn-nav-button>Blog</dcn-nav-button>
<dcn-nav-button>Events</dcn-nav-button>
<dcn-nav-button>FAQs</dcn-nav-button>
<dcn-nav-button>Tech Support</dcn-nav-button>
<dcn-nav-button>Guides</dcn-nav-button>
<dcn-nav-button>Our members</dcn-nav-button>
<dcn-nav-button>Who are we?</dcn-nav-button>
<dcn-nav-button>Get in touch</dcn-nav-button>
<dcn-nav-button>Our Platforms</dcn-nav-button>
        </dcn-navbar>
        <dcn-navbar class="bottom">
<dcn-nav-button>Terms of service and policy</dcn-nav-button>
<h3>&copy;<dcn-title-word0>Dev</dcn-title-word0><dcn-title-word1>Community</dcn-title-word1><dcn-title-word2>Nepal</dcn-title-word2>
    </h3>
</dcn-navbar>
    </section>
    </section>
    <script src="community.js"></script>
</body>