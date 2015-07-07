

var config = (function(){

    var currentEnv = process.env.NODE_ENV || "production";

    var servers = {
        production: "http://dashboard.minimob.com",
        preview: "http://preview.minimob.com",
        development: "http://lxvd-xweb-99",
        local: "http://localhost:55354"
    };

    var secrets ={
        development:"MsS5n1VUpBZHkL1H8ZV3-ACu",
        production:"B-nza3aDWMQpY6r28ikamQ-q",
        preview: "MsS5n1VUpBZHkL1H8ZV3-ACu",
        local: "B-nza3aDWMQpY6r28ikamQ-q"
    }

    var redis = {
        development:{
            site:{host:"lxvd-xweb.internetq.corp",port:6379},
            cache:{host:"lxvd-xweb.internetq.corp",port:6379},
            shards:[
                {host:"lxvd-xweb.internetq.corp",port:6379},
                {host:"lxvd-xweb.internetq.corp",port:6379}
            ],
            correlator:{host:"lxvd-xweb.internetq.corp",port:6379},
            eventStore: {
                redis: {host: "lxvd-xweb.internetq.corp", port: 6379},
                sdkEvent: {
                    max_queue: 200000,
                    redis_list: "list_queue_sdkevents"
                },
                fillrate: {
                    max_queue: 200000,
                    redis_list: "list_queue_fillrate"
                },
                notification: {
                    max_queue: 200000,
                    redis_list: "list_queue_notifications"
                }
            },
            localRedis:{host:"lxvd-xweb.internetq.corp",port:6379}
        },
        production:{
            site:{host:"lxvp-xrd-01.internetq.corp",port:6379},
            cache:{host:"lxvp-xrd-02.internetq.corp",port:6379},
            shards:[
                {host:"lxvd-xweb.internetq.corp",port:6379},
                {host:"lxvd-xweb.internetq.corp",port:6379}

            ],
            correlator:{host:"lxvp-xrd-02.internetq.corp",port:6379},
            eventStore: {
                redis: {host: "lxvd-xweb.internetq.corp", port: 6379},
                sdkEvent: {
                    max_queue: 200000,
                    redis_list: "list_queue_sdkevents"
                },
                fillrate: {
                    max_queue: 200000,
                    redis_list: "list_queue_fillrate"
                },
                notification: {
                    max_queue: 200000,
                    redis_list: "list_queue_notifications"
                }
            },
            localRedis:{host:"lxvp-xrd-20.internetq.corp",port:6379}
        },
        local:{
            site:{host:"lxvd-xweb.internetq.corp",port:6379},
            cache:{host:"lxvd-xweb.internetq.corp",port:6379},
            shards:[
                {host:"lxvd-xweb.internetq.corp",port:6379},
                {host:"lxvd-xweb.internetq.corp",port:6379}
            ],
            correlator:{host:"lxvd-xweb.internetq.corp",port:6379},
            eventStore: {
                redis: {host: "lxvd-xweb.internetq.corp", port: 6379},
                sdkEvent: {
                    max_queue: 200000,
                    redis_list: "list_queue_sdkevents"
                },
                fillrate: {
                    max_queue: 200000,
                    redis_list: "list_queue_fillrate"
                },
                notification: {
                    max_queue: 200000,
                    redis_list: "list_queue_notifications"
                }
            },
            localRedis:{host:"lxvd-xweb.internetq.corp",port:6379}
        }
    }

    var mongo = {
        development:{
            /* mongoSlaves : [
             'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017,lxvp-xmdb-02.internetq.corp:27017/minimob?replicaSet=mrs1&readPreference=secondary',
             'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017,lxvp-xmdb-03.internetq.corp:27017/minimob?replicaSet=mrs1&readPreference=secondary',
             'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017,lxvp-xmdb-04.internetq.corp:27017/minimob?replicaSet=mrs1&readPreference=secondary',
             'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017,lxvp-xmdb-05.internetq.corp:27017/minimob?replicaSet=mrs1&readPreference=secondary'
             ],
             mongoMaster : 'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017/minimob',
             */
            mongoSlaves : ['mongodb://172.28.32.11:27017/minimob'],
            mongoMaster : 'mongodb://172.28.32.11:27017/minimob'

        },
        production:{
            mongoSlaves : [
                'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017,lxvp-xmdb-02.internetq.corp,lxvp-xmdb-03.internetq.corp,lxvp-xmdb-04.internetq.corp,lxvp-xmdb-05.internetq.corp:27017/minimob?replicaSet=mrs1&readPreference=secondary'
            ],

            mongoMaster : 'mongodb://madmin:HkdhUToxhhZoMm@lxvp-xmdb-01.internetq.corp:27017/minimob'
        },
        local:{
            mongoSlaves : ['mongodb://172.28.32.11:27017/minimob'],
            mongoMaster : 'mongodb://172.28.32.11:27017/minimob'
        }
    }


    return {
        currentEnv:currentEnv,
        secret:secrets[currentEnv],
        server:servers[currentEnv],
        redis:redis[currentEnv],
        mongo:mongo[currentEnv]
    }

})()



module.exports =config


