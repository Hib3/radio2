スクリプト
これから変更させる

var ch=[
    "<source src='http://37.220.36.53:7904/;?type=http&amp;nocache=18236' type='audio/mpeg'>"
    ,"<source src='http://ststmks.s3.amazonaws.com/izakayasound/media/kitanohomare.mp3'>"
    ,"<source src='http://uk2.internet-radio.com:8024//stream?type=http&nocache=541'>"
    ,"<source src='http://uk1.internet-radio.com:8267/stream?type=http&nocache=541'>"
    ,"<source src='http://media-ice.musicradio.com/HeartSussexMP3'>"
    ,"<source src='http://64.71.79.181:8024/;'>"
    ,"<source src='http://bluford.torontocast.com:8504/;'>"
    ,"<source src='http://musicbird.leanstream.co/JCB076-MP3?args=tunein_02'>"
    ,"<source src='http://bigrradio.cdnstream1.com/5174_128'>"
    ,"<source src='http://hyades.shoutca.st:8043/stream'>"
    ,"<source src='http://itori.animenfo.com:443/;'>"
    ,"<source src='http://144.217.64.13:7100/;?type=http&amp;nocache=18238' type='audio/mpeg'>"
    ,"<source src='http://184.75.223.178:8102/;?type=http&amp;nocache=18236' type='audio/mpeg'>"
    ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18237' type='audio/mpeg'>"
    ,"<source src='http://50.7.130.2:13014/;?type=http&amp;nocache=18239' type='audio/mpeg'>"
    ,"<source src='http://94.23.67.172:8010/;?type=http&amp;nocache=18240' type='audio/mpeg'>"
    ,"<source src='http://212.3.234.219:8080/wr-test-128.mp3' type='audio/mpeg'>"
    ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18237' type='audio/mpeg'>"
    ,"<source src='http://ice3.somafm.com/deepspaceone-128-mp3' type='audio/mpeg'>"
    ,"<source src='https://streamer.radio.co/s2c3cc784b/listen' type='audio/mpeg'>"
    ,"<source src='http://50.7.130.2:13014/;?type=http&amp;nocache=18239' type='audio/mpeg'>"
    ,"<source src='http://94.23.67.172:8010/;?type=http&amp;nocache=18240' type='audio/mpeg'>"
    ,"<source src='http://212.18.63.135:9034/;?type=http&amp;nocache=18242' type='audio/mpeg'>"
    ,"<source src='http://158.69.38.195:20278/;?type=http&amp;nocache=18243' type='audio/mpeg'>"
    ,"<source src='http://149.56.74.125:9628/;?type=http&amp;nocache=18244' type='audio/mpeg'>"
    ,"<source src='http://192.240.102.198:14150/;?type=http&amp;nocache=18245' type='audio/mpeg'>"
    ,"<source src='http://5.178.87.156:2068/;?type=http&amp;nocache=18247' type='audio/mpeg'>"
    ,"<source src='http://192.99.38.174:9342/;?type=http&amp;nocache=18249' type='audio/mpeg'>"
    ,"<source src='http://87.229.24.114:35110/;?type=http&amp;nocache=18250' type='audio/mpeg'>"
    ,"<source src='http://46.105.171.217:8024/;?type=http&amp;nocache=18251' type='audio/mpeg'>"
    ,"<source src='http://78.31.65.20:8080/;?type=http&amp;nocache=18252' type='audio/mpeg'>"
    ,"<source src='http://50.117.1.60:80/;?type=http&amp;nocache=18255' type='audio/mpeg'>"
    ,"<source src='http://151.80.97.38:8224/;?type=http&amp;nocache=18256' type='audio/mpeg'>"
    ,"<source src='http://167.114.251.212:80/;?type=http&amp;nocache=18258' type='audio/mpeg'>"
    ,"<source src='http://94.23.66.155:8080/;?type=http&amp;nocache=18259' type='audio/mpeg'>"
    ,"<source src='http://178.162.208.117:8418/;?type=http&amp;nocache=18260' type='audio/mpeg'>"
    ,"<source src='http://149.56.74.125:9508/;?type=http&amp;nocache=18262' type='audio/mpeg'>"
    ,"<source src='http://82.199.155.117:8000/;?type=http&amp;nocache=18263' type='audio/mpeg'>"
    ,"<source src='http://109.123.70.138:8136/;?type=http&amp;nocache=18264' type='audio/mpeg'>"
    ,"<source src='http://94.75.227.133:7005/;?type=http&amp;nocache=18265' type='audio/mpeg'>"
    ,"<source src='http://192.151.153.234:9968/;?type=http&amp;nocache=18268' type='audio/mpeg'>"
    ,"<source src='http://185.66.249.48:9600/;?type=http&amp;nocache=18269' type='audio/mpeg'>"
    ,"<source src='http://50.97.94.44:8086/;?type=http&amp;nocache=18271' type='audio/mpeg'>"
    ,"<source src='http://149.56.147.197:8231/;?type=http&amp;nocache=18273' type='audio/mpeg'>"
    ,"<source src='http://78.46.73.91:9043/;?type=http&amp;nocache=18274' type='audio/mpeg'>"
    ,"<source src='https://cdn-beta.tunein.com/assets/media/blank.mp3' type='audio/mpeg'>"
    ,"<source src='http://85.10.198.55:8000/;?type=http&amp;nocache=18276' type='audio/mpeg'>"
    ,"<source src='http://37.220.36.53:7904/;?type=http&amp;nocache=18277' type='audio/mpeg'>"
    ,"<source src='http://51.15.76.3:80/;?type=http&amp;nocache=18278' type='audio/mpeg'>"
    ,"<source src='https://vapor.fm:8000/stream' type='audio/mpeg'>"
    ]

var a1 = function ()
{
var ch1 = document.getElementById('music');

    ch1.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
               ch[0]
              +
              "</audio>"
//複数行で書く場合は各行を""で囲んで+で結合する
}
var a2 = function ()
{
var ch2 = document.getElementById('music');

    ch2.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
               ch[1]
              +
              "</audio>"
}

var a3 = function ()
{
var ch3 = document.getElementById('music');

    ch3.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
               ch[2]
              +
              "</audio>"
}


var a4 = function ()
{
var ch4 = document.getElementById('music');

    ch4.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
              ch[3]
              +
              "</audio>"
}

var a5 = function ()
{
var ch5 = document.getElementById('music');

    ch5.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
               ch[4]
              +
              "</audio>"
}


var a6 = function ()
{
var ch6 = document.getElementById('music');

    ch6.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
                     ch[5]
              +
              "</audio>"
}


var a7 = function ()
{
var ch7 = document.getElementById('music');

    ch7.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
              +
                ch[6]
              +
              "</audio>"
}

var a8 = function ()
{
var ch8 = document.getElementById('music');

ch8.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
            +
              ch[7]
            +
            "</audio>"
}

var a9 = function ()
{
var ch9 = document.getElementById('music');

ch9.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[8]
          +
          "</audio>"
}

var a10 = function ()
{
var ch10 = document.getElementById('music');

ch10.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[9]
          +
          "</audio>"
}

var a11 = function ()
{
var ch11 = document.getElementById('music');

ch11.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[10]
          +
          "</audio>"
}

var a12 = function ()
{
var ch12 = document.getElementById('music');

ch12.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[11]
          +
          "</audio>"
}

var a13 = function ()
{
var ch13 = document.getElementById('music');

ch13.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[12]
          +
          "</audio>"
}

var a14 = function ()
{
var ch14 = document.getElementById('music');

ch14.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[13]
          +
          "</audio>"
}

var a15 = function ()
{
var ch15 = document.getElementById('music');

ch15.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[14]
          +
          "</audio>"
}

var a16 = function ()
{
var ch16 = document.getElementById('music');

ch16.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[15]
          +
          "</audio>"
}

var a17 = function ()
{
var ch17 = document.getElementById('music');

ch17.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[16]
          +
          "</audio>"
}

var a18 = function ()
{
var ch18 = document.getElementById('music');

ch18.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[17]
          +
          "</audio>"
}

var a19 = function ()
{
var ch19 = document.getElementById('music');

ch19.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[18]
          +
          "</audio>"
}

var a20 = function ()
{
var ch20 = document.getElementById('music');

ch20.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[19]
          +
          "</audio>"
}

var a21 = function ()
{
var ch21 = document.getElementById('music');

ch21.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[20]
          +
          "</audio>"
}

var a22 = function ()
{
var ch22 = document.getElementById('music');

ch22.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[21]
          +
          "</audio>"
}

var a23 = function ()
{
var ch23 = document.getElementById('music');

ch23.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[22]
          +
          "</audio>"
}

var a24 = function ()
{
var ch24 = document.getElementById('music');

ch24.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[23]
          +
          "</audio>"
}

var a25 = function ()
{
var ch25 = document.getElementById('music');

ch25.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[24]
          +
          "</audio>"
}

var a26 = function ()
{
var ch26 = document.getElementById('music');

ch26.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[25]
          +
          "</audio>"
}

var a27 = function ()
{
var ch27 = document.getElementById('music');

ch27.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[26]
          +
          "</audio>"
}

var a28 = function ()
{
var ch28 = document.getElementById('music');

ch28.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[27]
          +
          "</audio>"
}

var a29 = function ()
{
var ch29 = document.getElementById('music');

ch29.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[28]
          +
          "</audio>"
}

var a30 = function ()
{
var ch30 = document.getElementById('music');

ch30.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[29]
          +
          "</audio>"
}

var a31 = function ()
{
var ch31 = document.getElementById('music');

ch31.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[30]
          +
          "</audio>"
}

var a32 = function ()
{
var ch32 = document.getElementById('music');

ch32.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[31]
          +
          "</audio>"
}

var a33 = function ()
{
var ch33 = document.getElementById('music');

ch33.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[32]
          +
          "</audio>"
}

var a34 = function ()
{
var ch34 = document.getElementById('music');

ch34.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[33]
          +
          "</audio>"
}

var a35 = function ()
{
var ch35 = document.getElementById('music');

ch35.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[34]
          +
          "</audio>"
}

var a36 = function ()
{
var ch36 = document.getElementById('music');

ch36.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[35]
          +
          "</audio>"
}

var a37 = function ()
{
var ch37 = document.getElementById('music');

ch37.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[36]
          +
          "</audio>"
}

var a38 = function ()
{
var ch38 = document.getElementById('music');

ch38.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[37]
          +
          "</audio>"
}

var a39 = function ()
{
var ch39 = document.getElementById('music');

ch39.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[38]
          +
          "</audio>"
}

var a40 = function ()
{
var ch40 = document.getElementById('music');

ch40.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[39]
          +
          "</audio>"
}

var a41 = function ()
{
var ch41 = document.getElementById('music');

ch41.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[40]
          +
          "</audio>"
}

var a42 = function ()
{
var ch42 = document.getElementById('music');

ch42.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[41]
          +
          "</audio>"
}

var a43 = function ()
{
var ch43 = document.getElementById('music');

ch43.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[42]
          +
          "</audio>"
}

var a44 = function ()
{
var ch44 = document.getElementById('music');

ch44.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[43]
          +
          "</audio>"
}

var a45 = function ()
{
var ch45 = document.getElementById('music');

ch45.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[44]
          +
          "</audio>"
}

var a46 = function ()
{
var ch46 = document.getElementById('music');

ch46.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[45]
          +
          "</audio>"
}

var a47 = function ()
{
var ch47 = document.getElementById('music');

ch47.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[46]
          +
          "</audio>"
}

var a48 = function ()
{
var ch48 = document.getElementById('music');

ch48.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[47]
          +
          "</audio>"
}

var a49 = function ()
{
var ch49 = document.getElementById('music');

ch49.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[48]
          +
          "</audio>"
}

var a50 = function ()
{
var ch50 = document.getElementById('music');

ch50.innerHTML = "<audio id='music' preload='none' autoplay='true'>"
          +
            ch[49]
          +
          "</audio>"
}