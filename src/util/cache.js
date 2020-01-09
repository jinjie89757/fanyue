var MyPlugin = {
    install(vue) {
        vue.prototype.$cache = {
            addSearch(val) {
                if (!val) return;
                let key = 'search'
                let ls = localStorage.getItem(key);
                if (ls) {
                    let arr = JSON.parse(ls);
                    arr.push(val);
                    localStorage.setItem(key, JSON.stringify(arr))
                } else {
                    localStorage.setItem(key, JSON.stringify([val]))
                }
            },
            getSearch() {
                if (localStorage.getItem('search')) {
                    return JSON.parse(localStorage.getItem("search"))
                } else {
                    return [];
                }
            },
            delSearch() {
                localStorage.removeItem('search')
            }
        }
    }
}

export default MyPlugin