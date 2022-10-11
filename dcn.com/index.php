
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
    @import url(worker.css);
    @import url(default.css);

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
  <!-- <script src="effects.js"></script>
  <dcn-progress id="pr01"></dcn-progress> -->
  <dcn-notification-bar>
    <dcn-shine-effect></dcn-shine-effect>
    <dcn-center>🎉 Ask your queries, and get published on our platforms !<dcn-link onclick='navigate("blog_posts_0")'>Ask now -></dcn-link>
    </dcn-center>
  </dcn-notification-bar>

  <dcn-header id="hdr">
    <dcn-title>
      <dcn-title-word0>Dev</dcn-title-word0>
      <dcn-title-word1> Community</dcn-title-word1>
      <dcn-title-word2> Nepal</dcn-title-word2>
    </dcn-title>
    <dcn-sup>&reg;</dcn-sup>
    <dcn-navbar>
      <dcn-text>Events</dcn-text>
      <a href="community/" target="_blank" class="visible-link">
        <dcn-text>Community</dcn-text>
      </a>
      <dcn-text>Bootcamps</dcn-text>
      <dcn-text>Ask a question</dcn-text>
      <dcn-text class="nd">
        <dcn-button class="btn-f-bn login-button" id="0" onclick="toggle_theme(this.id)">Change Theme</dcn-button>
      </dcn-text>
      <dcn-text>
        <dcn-button class="cow round-m" onclick="subscribe()">Subscribe</dcn-button>
      </dcn-text>
    </dcn-navbar>
  </dcn-header><br /><br /><br /><br />
  <dcn-banner class="main-banner">
    <dcn-flex class="bnr">
      <dcn-caption id="cptn">
        <dcn-heading-1 style="color: var(--blue);">30 Days of Self Guided Learning </dcn-heading-1> <br /><br />
        <dcn-med-text style="font-size: 15px;">An initiative by ITSNP ORG to help women tech enthusiast connect and learn new skills daily for 30 days for at least an hour a day while connecting and creating projects together.</dcn-med-text>
        <br /> <br />
        <dcn-button class="btn_f_bn" id="wtb">Join now </dcn-button>
        <dcn-button class="btn_f_bn" style="background-color:green !important;">Sign in</dcn-button>
      </dcn-caption>
      <img src="assets/images/30dc_6s.webp" alt="banner" class="event_banner" id="preview">
      <br />

    </dcn-flex>
  </dcn-banner>
  <br />
  <section class="posts-0"><br />
    <dcn-rcnt-post>Our motto</dcn-rcnt-post>
    <br /><br />
    <dcn-heading-1>With every step of your journey</dcn-heading-1><br />
    <section class="main-section">

      <dcn-card>
        <dcn-med-text>Initiative for students</dcn-med-text><br /><br /><br />
        <dcn-desc>This is a place where you can learn various concepts related to programming for free. </dcn-desc>
      </dcn-card>

      <dcn-card>
        <dcn-med-text>Growing with You</dcn-med-text><br /><br /><br />
        <dcn-desc>Our Community is a beginner-friendly place to start your coding journey.<br /> We will hold your hands and walk you through various concepts of programming in an amicable manner.</dcn-desc>
      </dcn-card>
      <dcn-card>
        <dcn-med-text>Free Bootcamps</dcn-med-text><br /><br /><br />
        <dcn-desc>Trending, and Best Programming Languages Concepts with video lectures for free of cost. </dcn-desc>
      </dcn-card>
      <dcn-card>
        <dcn-med-text>Coming soon...</dcn-med-text><br /><br /><br />
        <dcn-desc>We will soon be uploading all the videos on HTML, CSS, JavaScript, React, Angular, and many more Frontend and Backend Web Technologies. Support us to make the Nepal Developers Community larger and better. </dcn-desc>
      </dcn-card>

    </section>

  </section>
  <br />
  <section class="dcn-platform">
    Open Guidance platforms
    <dcn-hr class="title-1-hr"></dcn-hr><br /><br />
    <dcn-heading-2>
      <dcn-center>Learn everything from <dcn-bold>scratch</dcn-bold> to <dcn-bold>advance</dcn-bold>
      </dcn-center>
    </dcn-heading-2>
    <br /><br />
    <dcn-grids>
      <dcn-grid-item onclick="navigate(this.id)" id="cpp"><img src="assets/images/cpp.png" alt="cpp">
        <dcn-img-caption>C Programming: Beginners to advanced topics polished</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="js"><img src="assets/images/js.png" alt="js">
        <dcn-img-caption>JavaScript : JS Projects</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="css"><img src="assets/images/css.png">
        <dcn-img-caption>CSS: CSS Projects</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="kali"><img src="assets/images/kali.png">
        <dcn-img-caption>Kali Linux for hacking</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="boot"><img src="assets/images/boot.png">
        <dcn-img-caption>Bootstrap : Front-end library</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="word"><img src="assets/images/word.png">
        <dcn-img-caption>Wordpress : Step into web development with Wordpress</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="pmsql"><img src="assets/images/pmsql.png">
        <dcn-img-caption>PHP MySql : Learn Simple and standard back-end languages</dcn-img-caption>
      </dcn-grid-item>
      <dcn-grid-item onclick="navigate(this.id)" id="learn" style="height:min-content;">
        <dcn-heading-3>More..</dcn-heading-3>
      </dcn-grid-item>
    </dcn-grids>

    <!-- <dcn-heading-2>Join our other social media platforms</dcn-heading-2><br/><br/>  -->
    <!-- <dcn-grids>
  <dcn-panel class="left"><dcn-heading-3>Facebook</dcn-heading-3><br/><br/><dcn-desc class="black-text">We regularly share posts and guidance to fulfill the aspirations of all level developers.<br/>Ask us on messenger anytime you want.</dcn-desc></dcn-panel><br/> -->
    <!-- <img src="assets/images/banner2.png"> -->
    <!-- <dcn-panel class="right"><dcn-heading-3>Instagram</dcn-heading-3><br/><br/><dcn-desc class="black-text">Explore us more on Instagram.</dcn-desc></dcn-panel><br/>
</dcn-grids> -->
    <!-- 
</section> -->
    <dcn-footer>
      <dcn-navbar>
        <dcn-text>
          <dcn-footer-heading>Initiate</dcn-footer-heading>
          <dcn-hr class="center orange"></dcn-hr>
        </dcn-text>
        <dcn-text>
          <dcn-footer-heading>Aprreciate</dcn-footer-heading>
          <dcn-hr class="center orange"></dcn-hr>
        </dcn-text>
        <dcn-text>
          <dcn-footer-heading>Educate</dcn-footer-heading>
          <dcn-hr class="center orange"></dcn-hr>
        </dcn-text>
      </dcn-navbar>
    </dcn-footer>
    <script src="main.js"></script>
</body>

</html>