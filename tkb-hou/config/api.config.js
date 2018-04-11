const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isProdMode ? 'http://wesmart.com.cn/v1/v' : 'api/'
}	