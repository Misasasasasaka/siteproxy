const someHTML = `
<!DOCTYPE html>
<html lang="zh-cn">
<head>
<!--头部信息-->
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<!--title keywords description 请改为自己的-->
<title>siteproxy代理 - 通向墙外的世界</title>
<meta name="keywords" content="bituplink,导航,网址"/>
<meta name="description" content="本代理一定会被墙,时间不定,请记住开源地址(不会被墙),以便找回新的网址:"/>
<a href="https://github.com/netptop/siteproxy"> https://github.com/netptop/siteproxy </a>

<!--网站favicon可以没有或者改为自己的-->
<link rel="shortcut icon" type="image/x-icon" href="/favicon.png"/>

<!--CSS 若不需要变动样式不用改-->
<link href="https://cdnjs.cloudflare.com/ajax/libs/zui/1.8.1/css/zui.min.css" rel="stylesheet" type="text/css"/>
<style>
  body {
    font-family: Arial, sans-serif;
  }
  .url-input-container {
    margin: 20px 0;
    font-size: 18px;
    text-align: center;
  }
  .url-input {
    width: 80%;
    padding: 10px;
    margin-right: 5px;
  }
  .go-button {
    padding: 10px 20px;
  }
  .search-container,
  .social-container,
  .tools-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .button {
    padding: 10px 20px;
    margin: 0 10px;
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    text-decoration: none;
    color: #333;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  .button:hover {
    background-color: #e9e9e9;
  }
  .footer {
    text-align: center;
    margin-top: 50px;
    font-size: 14px;
  }
</style>
<style type="text/css">
ul {
    padding: 0;
}
li {
    list-style: none;
}
a:hover,a:active,a:focus {
    text-decoration: none;
}
body {
    background-repeat:repeat;
    background-attachment:fixed;
    overflow-x: hidden;
    overflow-y: auto;
}
i.icon,i.fa {
    margin-right: 6px
}
.col, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    padding: 0px 5px;
}
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    height: 50px;
    background: #FFF;
}
header .logo {
    font-size: 20px;
    height: 80px;
    margin: 0;
    font-weight: 100;
    position: relative;
    z-index: 99;
    border-bottom: 1px solid #e8e8e8;
    background: #FFF;
    text-align:center;
}
header .logo img {
    width: 80px;
    vertical-align: -30px;
}
header .main {
    position: relative;
}
header .nav {
    width: 100%;
    margin-left: 25px;
    background: #FFF;
    margin: 0;
    overflow: hidden;
    transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
 /* Firefox 4 */
    -webkit-transition: all 0.4s ease;
 /* Safari  Chrome */
    -o-transition: all 0.4s ease;
 /* Opera */
    position: absolute;
    top: -300px;
    left: 0;
}
header .showNav {
    top: 80px;
    box-shadow: 0 5px 5px rgba(204,204,204,.15);
    -moz-box-shadow: 0 5px 5px rgba(204,204,204,.15);
}
header .nav li {
    font-size: 16px;
}
header .nav a {
    display: block;
    line-height: 40px;
    font-size: 16px;
    color: #959595;
    padding: 0 25px;
    border-bottom: 1px solid #f5f5f5;
}
header .nav a:hover {
    border-color: #459df5;
    color: #459df5;
}
header .head-btn {
    float: right;
    line-height: 60px;
}
header .head-btn a {
    margin-left: 5px;
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #f5f5f5;
    color: #03b8cf;
    border: 1px solid #e5e5e5;
    transition: all .2s;
    -moz-transition: all .2s;
 /* Firefox 4 */
    -webkit-transition: all .2s;
 /* Safari Chrome */
    -o-transition: all .2s;
 /* Opera */
}
header .head-btn a:hover {
    background: #03b8cf;
    color: #FFF;
    border: 1px solid #03b8cf;
}
header .head-btn a>i {
    margin-right: 0px;
    font-size: 15px;
}
header .nav-btn {
    position: fixed;
    border: none;
    background: transparent;
    top: 0;
    left: 10px;
    outline: 0;
    margin-top: 10px;
    z-index: 100
}
header .nav-btn {
    left: inherit;
    right: 10px;
}
header .nav-btn .icon-line {
    display: block;
    margin: 6px 0;
    width: 25px;
    height: 2px;
    background: #999;
    cursor: pointer;
    transition: all .4s ease;
    -moz-transition: all .4s ease;
 /* Firefox 4 */
    -webkit-transition: all .4s ease;
 /* Safari  Chrome */
    -o-transition: all .4s ease;
 /* Opera */
}
header .nav-btn .middle {
    margin: 0 auto;
}
header .animated2 .top {
    transform: translateY(8px) rotateZ(45deg);
    -ms-transform: translateY(8px) rotateZ(45deg);
   /* IE 9 */
    -moz-transform: translateY(8px) rotateZ(45deg);
   /* Firefox */
    -webkit-transform: translateY(8px) rotateZ(45deg);
 /* Safari 鍜� Chrome */
    -o-transform: translateY(8px) rotateZ(45deg);
   /* Opera */
}
header .animated2 .middle {
    width: 0;
}
header .animated2 .bottom {
    transform: translateY(-8px) rotateZ(-45deg);
    -ms-transform: translateY(-8px) rotateZ(-45deg);
   /* IE 9 */
    -moz-transform: translateY(-8px) rotateZ(-45deg);
   /* Firefox */
    -webkit-transform: translateY(-8px) rotateZ(-45deg);
 /* Safari Chrome */
    -o-transform: translateY(-8px) rotateZ(-45deg);
   /* Opera */
}
.left-bar {
    position: fixed;
    top: 50px;
    left: -240px;
    width: 200px;
    max-width: 100%;
    height: 100%;
    background: #353535;
    z-index: 12;
    transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
 /* Firefox 4 */
    -webkit-transition: all 0.4s ease;
 /* Safari 鍜� Chrome */
    -o-transition: all 0.4s ease;
 /* Opera */
    transform: translateZ(0);
    -ms-transform: translateZ(0);
   /* IE 9 */
    -moz-transform: translateZ(0);
   /* Firefox */
    -webkit-transform: translateZ(0);
 /* Safari 鍜� Chrome */
    -o-transform: translateZ(0);
   /* Opera */
}
.left-bar .header {
    padding: 0px 15px;
    border-bottom: 1px solid #464646;
}
.left-bar .header h2 {
    font-size: 17px;
    line-height: 40px;
    max-width: 100%;
    overflow: hidden;
    margin: 0;
    font-weight: 400;
    display: block;
    color: #ccc;
}
.left-bar .menu {
    height: 450px;
    margin-bottom: 15px;
    border-bottom: 1px solid #424242
}
.left-bar .menu ul li a {
    display: block;
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    color: #777;
    padding-left: 38px;
}
.scrollcontent {
    width: 100%;
    top: 0;
    left: 0;
    padding-right: 4px;
    padding-top: 5px
}
.left-bar .menu ul li a:hover {
    background: #f5f5f5
}
.left-bar .menu ul li i.fa {
    width: 15px;
    text-align: center;
    margin-right: 20px
}
.left-bar .tree li.open > ul::-webkit-scrollbar {
    width: 3px;
    margin-right: 2px
}
.menu-about p {
    font-size: 12px;
    color: #ccc;
    text-align: center;
}
#content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
#content > .Off-left-menu {
    display: none;
}
#content > div.center-main {
    margin: 0 auto;
}
.textBar {
    padding: 15px 20px 10px 20px;
    border-top: 1px solid #d0d0d0;
    background-color: #e8e8e8;
    text-align: center;
    font-size: 18px;
    color: #5d5d5d;
    font-weight: bold;
}
.sousuo {
    padding: 35px 0;
}
.search {
    position: relative;
    margin: 0 auto;
}
.search-box {
    height: 50px;
    box-shadow: 0px 0px 2px 0px #ccc;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-flex;
 /* Safari */
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #e6e6e6
}
.search-engine-name {
    width: 69px;
    height: 50px;
    background: #16C0F8;
    border: none;
    color: #fff;
    font-weight: bold;
    outline: none;
}
.search-input {
    box-sizing: border-box;
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #999;
    border: none;
    outline: none;
    padding-left: 6px;
}
input::-webkit-input-placeholder {
    font-size: 12px;
    letter-spacing: 1px;
    color: #ccc;
}
.search-btn {
    width: 80px;
    height: 50px;
    background: #16C0F8;
    border: none;
    color: #fff;
    font-weight: bold;
    outline: none;
}
.search-engine {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #FFF;
    padding: 15px 0 0 15px;
    border-radius: 5px;
    box-shadow: 0px 5px 20px 0px #d8d7d7;
    transition: all 0.3s;
    display: none;
    z-index: 999
}
.search-engine-head {
    overflow: hidden;
    margin-bottom: 10px;
    padding-right: 15px;
}
.search-engine-tit {
    float: left;
    margin: 0;
    font-size: 14px;
    color: #999;
}
.search-engine ul::before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    top: -15px;
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    border-left: 8px solid transparent;
}
.search-engine-list::after {
    content: '';
    width: 70px;
    height: 18px;
    position: absolute;
    top: -17px;
    left: 1px;
}
.search-engine-list li {
    float: left;
    width: 30%;
    line-height: 30px;
    font-size: 14px;
    padding: 5px 10px 5px 10px;
    margin: 0 10px 10px 0;
    background: #f9f9f9;
    color: #999;
    cursor: pointer
}
.search-engine-list li img {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    float: left;
    margin-right: 5px;
    margin-top: 2.5px;
}
#content .content-box {
    padding-top: 61px
}
.content-box {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 10px;
}
.item {
    width: 100%;
}
.item > .container-fluid {
    padding-top: 0;
    margin-top: 0;
}
.item > .container-fluid .row {
    padding: 10px 5px;
}
.item-tit > strong {
    color: #999;
    font-size: 18px;
    font-weight: 400;
    display: block;
    margin-bottom: 10px;
    padding-left: 5px;
    border-bottom: 1px solid burlywood;
}
.item-tit > strong > i {
    margin-right: 5px;
    font-size: 18px;
}
.card-link {
    display: block;
    padding: 10px 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
    background: #fff;
    transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
 /* Firefox 4 */
    -webkit-transition: all 0.2s ease-out;
 /* Safari Chrome */
    -o-transition: all 0.2s ease-out;
 /* Opera */
}
.card-link:hover {
    transform: translateY(-5px);
    -ms-transform: translateY(-5px);
   /* IE 9 */
    -moz-transform: translateY(-5px);
   /* Firefox */
    -webkit-transform: translateY(-5px);
 /* Safari  Chrome */
    -o-transform: translateY(-5px);
   /* Opera */
    box-shadow: 4px 4px 10px rgba(204, 204, 204, 0.5);
    -moz-box-shadow: 4px 4px 10px rgba(204, 204, 204, 0.5);
 /* Firefox */
}
.card-tit {
    height: 30px;
    font-size: 20px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
.card-tit img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
}
.card-desc {
    color: gray;
    font-size: 12px;
    padding-top: 10px;
    height: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.content-box .list-box {
    background: #FFF;
    padding: 20px 10px 0px 10px;
    margin: 0;
}
#get-top {
    width: 40px;
    height: 40px;
    background: #03b8cf;
    color: #FFF;
    position: fixed;
    right: 15px;
    bottom: 55px;
    line-height: 30px;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    display: none;
    z-index: 100;
}
#get-top i {
    margin: 0;
    font-size: 20px;
}
.footer {
    padding: 15px 20px 10px 20px;
    border-top: 1px solid #d0d0d0;
    background-color: #e8e8e8;
    text-align: center;
    font-size: 14px;
    color: #5d5d5d;
}
@media (min-width: 768px) {
    .col, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
        padding: 0 10px
    }
    #content .main {
        padding-top: 51px;
    }
    .sousuo {
        padding: 10px 0 50px 0;
        margin-top: 0;
    }
    .sousuo-form {
        width: 100%;
        margin: 0 auto;
    }
    #input {
        outline: none;
        padding: 0 10px;
        height: 46px;
        line-height: 46px;
        border: 1px solid #ccc;
        border-left: none;
        display: block;
        padding-left: 90px;
    }
    .link-box {
        width: 12.5%;
        float: left
    }
    .item-tit > strong {
        padding: 5px 0 0 10px;
        margin-bottom: 10px;
    }
    .get-home {
        margin: 0;
        margin-top: 20px;
    }
    .footer {
        margin-top: 20px;
    }
}
@media (min-width: 992px) {
    header {
        height: 90px;
        border-bottom: 1px solid #e8e8e8;
    }
    header .main {
        padding: 0 2px;
        padding-top: 0px;
    }
    header .logo {
        float: left;
        font-size: 22px;
        margin: 0;
        font-weight: 400;
        border: none;
    }
    header .logo a {
        display: block;
        line-height: 50px;
        color: #484848;
        font-weight: 400;
    }
    header .nav {
        float: left;
        margin-left: 25px;
        padding-top: 0px;
        height: 100%;
        display: block;
        overflow: hidden;
        position: static;
        width: auto;
        box-shadow: none;
    }
    header .nav li {
        float: left;
        font-size: 16px;
    }
    header .nav a {
        display: block;
        line-height: 90px;
        color: #959595;
        padding: 0 18px;
        border-bottom: 1px solid #e8e8e8;
    }
    header .nav a:hover {
        border-color: #459df5;
        color: #459df5;
    }
    .left-bar {
        height: 100%;
        background: #FFF;
        top: 60px;
        left: 0;
        z-index: 1;
    }
    .left-bar .header {
        padding: 11px 0px;
        border-bottom: none;
        margin: 0 25px;
        padding-top: 15px;
    }
    .left-bar .header h2 {
        color: #28b779;
        font-size: 16px;
        font-weight: bold;
        line-height: inherit;
        border-left: 3px solid #28b779;
        padding-left: 10px;
    }
    .left-bar .menu {
        height: 600px;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2
    }
    .left-bar .tree-menu {
        border-bottom: 1px solid #e8e8e8;
    }
    .left-bar .tree li.open > ul {
        height: 281px;
        background: #f5f5f5;
    }
    .tree-menu li li a {
        color: #797979;
        font-size: 14px;
    }
    .search {
        width: 100%;
    }
    .search-engine {
        width: 100%;
    }
    .search-engine-list li {
        width: 112px;
        margin: 0 15px 15px 0;
    }
    #content .main {
        margin-left: 20px;
    }
    .content-box {
        padding: 0 10px;
        padding-top: 61px
    }
    .nav-item .container-fluid {
        padding: 20px 20px 10px 20px;
    }
    .item > .container-fluid .row {
        padding: 0;
    }
    .card-box .col-md-3 {
        padding: 0 7.5px;
    }
    .card-link {
        margin-bottom: 15px;
    }
    .main .list-box .menu-list {
        margin: 0px 10px 20px 10px;
    }
    .nav-tabs > li > a {
        padding: 4px 15px;
    }
    .footer {
        margin-top: 30px;
    }
}
@media (min-width: 1200px) {
    header .nav a {
        padding: 0 25px;
    }
    .content-box {
        padding: 0 20px;
    }
    .sousuo-form {
        width: 60%
    }
    .item > .container-fluid {
        padding: 0;
        padding-top: 91px;
        margin-top: -65px;
    }
}
@media (min-width: 1700px) {
    .content-box {
        max-width: 1400px;
    }
    .col-md-3 {
        width: 20%;
    }
}
</style>
</head>
<body id="nav_body">
<!--[if lt IE 10]>
<div class="alert alert-danger">
    您正在使用
    <strong>过时的</strong> 浏览器. 请更换一个更好的浏览器来提升用户体验.
</div>
<![endif]--><!--头部导航条-->
<header>
<div class="main">
    <div style="text-align: center;">
        <h1>
            <span>Siteproxy代理</span>
        </h1>
    </div>
    <!--顶部导航条-->
</div>
</header>

<div id="content">
    <!--内容-->
    <div class="main">
        <div class="container content-box">
            <div class="textBar">siteproxy2.0已经发布，速度提高4倍，支持手机看youtube. 请下载使用：
                <a href="https://github.com/netptop/siteproxy">https://github.com/netptop/siteproxy</a>
                <br>或者加入telegram电报群: @siteproxy获取更新.
            </div>

            <!--导航分类范例1，请根据自己的需求进行修改-->
            <section class="item card-box" id="row-00">
            <div class="container-fluid">
                <div class="row">
                    <div class="url-input-container">
                        <input id="goto_url_input" type="text" class="url-input" placeholder="请在这里输入website网址">
                        <button id="goto_button" class="go-button">浏览/Go To Website</button>
                    </div>

                    <div class="item-tit">
                        <strong>搜索引擎</strong>
                    </div>
                    <!--获取内容列表-->
                    <div class="clearfix two-list-box">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://ipv6.google.com" class="card-link">
                            <div class="card-tit">Google</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://duckduckgo.ca" class="card-link">
                            <div class="card-tit">DuckduckGo</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://duckduckgo.com/aichat" class="card-link">
                            <div class="card-tit">DuckduckGo AI Chat</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://bing.com" class="card-link">
                            <div class="card-tit">Bing</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="item card-box" id="row-0">
            <div class="container-fluid">
                <div class="row">
                    <div class="item-tit">
                        <strong>常用网站</strong>
                    </div>
                    <!--获取内容列表-->
                    <div class="clearfix two-list-box">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://zh.wikipedia.org" class="card-link">
                            <div class="card-tit">维基百科</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.youtube.com" class="card-link">
                            <div class="card-tit">YouTube</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://twitter.com/" class="card-link">
                            <div class="card-tit">Twitter</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://web.telegram.org/" class="card-link">
                            <div class="card-tit">Telegram登录</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://telegram.org/dl/android/apk" class="card-link">
                            <div class="card-tit">Telegram下载</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://t.me/s/socks5list" class="card-link">
                            <div class="card-tit">Telegram代理</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="item card-box" id="row-2">
            <div class="container-fluid">
                <div class="row">
                    <div class="item-tit">
                        <strong>新闻网站</strong>
                    </div>
                    <!--获取内容列表-->
                    <div class="clearfix two-list-box">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.voachinese.com/" class="card-link" >
                            <div class="card-tit">美国之音</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://cn.nytimes.com" class="card-link" >
                            <div class="card-tit">纽约时报中文网</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://cn.reuters.com/" class="card-link" >
                            <div class="card-tit">路透社中文</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://cn.wsj.com/" class="card-link" >
                            <div class="card-tit">华尔街日报</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.dw.com/zh/%E5%9C%A8%E7%BA%BF%E6%8A%A5%E5%AF%BC/s-9058" class="card-link" >
                            <div class="card-tit">德国之声</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://news.creaders.net/breaking/" class="card-link" >
                            <div class="card-tit">万维读者</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://udn.com/news/index" class="card-link" >
                            <div class="card-tit">联合新闻网</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.rfi.fr/cn/" class="card-link" >
                            <div class="card-tit">法国广播电台</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://cnnews.chosun.com/" class="card-link" >
                            <div class="card-tit">朝鲜日报</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://std.stheadline.com/" class="card-link" >
                            <div class="card-tit">星岛日报</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="item card-box" id="row-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="item-tit">
                        <strong>海外论坛</strong>
                    </div>
                    <!--获取内容列表-->
                    <div class="clearfix two-list-box">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.wenxuecity.com/news/" class="card-link" >
                            <div class="card-tit">文学城</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.6parknews.com" class="card-link" >
                            <div class="card-tit">留园网</div>
                            </a>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                            <a href="https://www.iask.ca/index.html" class="card-link" >
                            <div class="card-tit">加拿大家园网</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <!--页脚-->
            <footer class="footer">
            <div class="container">
                <div class="rwo">
                    <div class="col-md-12">
                        <p>
                            本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：netptop@gmail.com
                        </p>
                        <!--代码源自小呆导航的开源代码，遵循MIT协议，此处保留源代码的声明-->
                        <p>
                            Copyright © 2020-2024 siteproxy代理 All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
            </footer>
        </div>
        <!--内容区域-->
    </div>
    <div id="get-top" title="回到顶部">
        <i class="icon icon-arrow-up"></i>
    </div>

    <!-- jQuery (ZUI中的Javascript组件依赖于jQuery) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>

<script>
window.onscroll = function(){
//回到顶部
var sllTop = document.documentElement.scrollTop||document.body.scrollTop;
if(sllTop>240){
  $('#get-top').css('display','block')
}else{
  $('#get-top').css('display','none')
}
}
$('#get-top').click(function(){
  $('body,html').animate({
    scrollTop: 0
  }, 800);//点击回到顶部按钮，数字越小越快
})
//判断用户使用的设备
var deviceVal  = browserRedirect();
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}
  $('.nav-btn').on('click', function () {
    $('.nav').toggleClass('showNav');
    $(this).toggleClass('animated2');
  });

// 默认搜索引擎的内容，如果界面修改了需要同步修改
var thisSearch = '/https/www.google.com/search?q=';

$('#txt').keydown(function(ev){
    // 回车键的处理
    if(ev.keyCode==13){
        window.open(thisSearch + $('#txt').val(), "_blank")
        // $('#txt').val('');
        $('#box ul').html('')
    }
})
$(function(){
  // 搜索引擎列表，样式一行五个内容，自动换行
  var search = {
    data: [
    {
      name: 'Google搜索',
      url: '/https/www.google.com/search?q='
    }, {
      name: 'Bing搜索',
      url: '/https/bing.com/search?q='
    }, {
      name: 'Yahoo搜索',
      url: '/https/www.yahoo.com/search?q='
    }, {
      name: 'GitHub搜索',
      url: 'https://github.com/search?q='
    }]
  }
  for(var i = 0; i < search.data.length; i++){
    var addList = '<li>' + search.data[i].name + '</li>'
    $('.search-engine-list').append(addList);
  }
  $('.search-engine-name, .search-engine').hover(function() {
    $('.search-engine').css('display', 'block')
  }, function() {
    $('.search-engine').css('display', 'none')
  });
  $('.search-engine-list li').click(function() {
    var _index = $(this).index();
    var searchNameBtn = document.getElementById("search-engine-name");
    searchNameBtn.innerHTML = search.data[_index].name;
    thisSearch = search.data[_index].url;
    $('.search-engine').css('display', 'none')
  })
})
$("#goto_button").click(function(){
  var url_input = $('#goto_url_input').val();
  if(url_input != ''){
    let pos = window.location.href.indexOf('https/www.netptop.com');
    if (pos !== -1) {
        let url_prefix = window.location.href.substring(0, pos);
        if (!url_input.startsWith('http')) {
        url_input = 'https/' + url_input;
        } else {
        url_input = url_input.replace('https://', 'https/').replace('http://', 'http/');
        }
        url_input = url_prefix + url_input;
    }
    window.location.href = url_input;
  }
});
$('#goto_url_input').keypress(function(event) {
  if(event.which == 13) { // Enter key
    $('#goto_button').click();
  }
});
</script>
</div>
</body>
</html>

`
    /**
     * rawHtmlResponse delievers a response with HTML inputted directly
     * into the worker script
     * @param {string} html
     */
async function rawHtmlResponse(html) {
    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }

    return new Response(html, init)
}

/**
 * rawJsonResponse delievers a response with a Json Object inputted directly
 * into the worker script
 * @param {Object} json
 */
async function rawJsonResponse(json) {
    const init = {
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
    }

    return new Response(JSON.stringify(json), init)
}

addEventListener('fetch', event => {
    const { url } = event.request

    /*if (url.endsWith('/index_netptop.html')) {
    */
    return event.respondWith(rawHtmlResponse(someHTML))
})