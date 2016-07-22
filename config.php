<?php
 
[


    //从sentinel获取的主从信息保存目录 可读写
    'configPath' => './',

    //超时时间
    'timeout' => 2,

    //sentinel配置，可以多个。从sentinel获取主从信息。
    'sentinel' => [
        [
            'host' => '10.253.62.136',
            'port' => '26379',
        ],
    ]

];