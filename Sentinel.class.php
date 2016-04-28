<?php
namespace Sentinel;
use Predis\Client as Client;

class Sentinel {

    private $logFile = 'redis.json';
    private $config = [];

    public function __construct() {
        require 'vendor/autoload.php';
    }

    public function getRedisConnection() {
        if (file_exists('./redis.json')) {
            return $this->predisMasterSlave();
        }

        $sentinel = [
            [
                'host' => '1.253.62.136',
                'port' => '26379',
                'timeout' => 2,
            ],
            [
                'host' => '10.253.62.136',
                'port' => '26379',
                'timeout' => 2,
            ],
        ];

        foreach ($sentinel  as $v) {
            try {
                $client = new Client(array(
                    'host' => $v['host'],
                    'port' => $v['port'],
                    'timeout' => $v['timeout'],
                ));
                $master = $client->SENTINEL('master', 'master1');
                $res['master']['port'] = $master['5'];
                $res['master']['ip'] = $master['3'];

                $slaves = $client->SENTINEL('slaves', 'master1');
                foreach ($slaves as $key=>$val) {
                    $res['slaves'][$key]['port'] = $val['port'];
                    $res['slaves'][$key]['ip'] = $val['ip'];
                }

                $fp = fopen('./redis.json', 'w');
                fwrite($fp, json_encode($res));
                fclose($fp);
                break;
            } catch (\Exception $e) {

            }

            return $this->predisMasterSlave();
        }
    }

    /**
     * 创建redis对象
     * @return Client
     * @author Fuxuemin
     */
    public function predisMasterSlave() {
        $data = json_decode(file_get_contents('./redis.json'));
        $parameters = array(
            'tcp://'.$data['master']['ip'].':'.$data['master']['port'].'?alias=master',
        );
        foreach ($data['slaves'] as $v) {
            array_push($parameters,  'tcp://'.$v['ip'].':'.$v['port'].'?alias=slave');
        }

        $options = array('replication' => true);
        $client = new Client($parameters, $options);

        $client->exists('test');
        return $client;
    }

    /**
     *  检测
     * @author Fuxuemin
     */
    public function check() {

    }

}


