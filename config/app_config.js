/**
 * Created by s.charitakis
 */
var config = require("./config.js");
var fs = require('fs');

var MinimobMongoCluster = require('../dal/MinimobMongoCluster');
var MinimobRedisSiteRepository = require('../dal/MinimobRedisSiteRepository');
var MinimobRedisCacheRepository = require('../dal/MinimobRedisCacheRepository');
var NodeCache = require("node-cache");



var app_config = (function() {
    var instance;

    function init() {

        return {
        mongoCluster : new MinimobMongoCluster({
            master: config.mongo.mongoMaster,
            slaves: config.mongo.mongoSlaves
        }),
        redisSiteRepository : new MinimobRedisSiteRepository(config.redis.site),
        redisCacheRepository : new MinimobRedisCacheRepository(config.redis.cache),
        localcache : new NodeCache()
        }
    }

    return {
        getInstance :function(){
            if(!instance){
                instance = init()
            }

            return instance;
        }
    }

})()


module.exports = app_config.getInstance();