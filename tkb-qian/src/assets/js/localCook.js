var localEvent = {
    /**
     * 缓存设置获取
     * @param {String} key          设置或者获取的key
     * @param {String} val          设置的值

     * @param return
     */
    StorageGetter: function (key) {
        // console.log(JSON.parse(localStorage.getItem(key)));
        return JSON.parse(localStorage.getItem(key));
    },
    StorageSetter: function (key, val) {
        return localStorage.setItem(key, JSON.stringify(val))
    },
    StorageSetList: function (opt) {
        var opts = opt || {};
        for (let [key, value] of opts) {
            localStorage.setItem(key, JSON.stringify(val))
        }
    }
};
export default localEvent;