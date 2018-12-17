function post(URL) {
            var temp = document.createElement("form");
            temp.action = URL;
            temp.method = "post";
            temp.style.display = "none";

            var opt = document.createElement("textarea");
            opt.name = 'location';
            opt.value = 'page_100808_super_index';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'text';
            opt.value = '0000000000000000';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'style_type';
            opt.value = '1';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'pdetail';
            opt.value = '1008088ed414e614c7d4d35db32c9039916adf';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'isReEdit';
            opt.value = 'false';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'sync_wb';
            opt.value = '1';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'pub_source';
            opt.value = 'page_1';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'api';
            opt.value = 'http://i.huati.weibo.com/pcpage/operation/publisher/sendcontent?sign=super&page_id=1008088ed414e614c7d4d35db32c9039916adf';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'object_id';
            opt.value = '1022:1008088ed414e614c7d4d35db32c9039916adf';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'module';
            opt.value = 'publish_913';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'page_module_id';
            opt.value = '913';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'longtext';
            opt.value = '1';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'topic_id';
            opt.value = '1022:1008088ed414e614c7d4d35db32c9039916adf';
            temp.appendChild(opt);

            var opt = document.createElement("textarea");
            opt.name = 'pub_type';
            opt.value = 'dialog';
            temp.appendChild(opt);

            document.body.appendChild(temp);
            temp.submit();
            return temp;
        }
        post('https://weibo.com/p/aj/proxy');
