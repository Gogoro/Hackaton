var httpServer = require("./http"),
    router = require('./route');

httpServer.start(router.route);