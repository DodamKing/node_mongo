function logger(req, res, next) {
    console.log('로거 미들웨어 실행');
    next()
}

module.exports = logger