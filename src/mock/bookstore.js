import Mock from 'mockjs';

Mock.setup({
    timeout: '2000-3000'
})

let storeimg1 = [];
for (var i = 0; i < 2; i++) {
    storeimg1.push(
        Mock.mock({
            // 375x134
            id: '@guid()',
            name: '@cword(4,6)',
            img: "@dataImage('375x134', '#00405d', '#FFF', 'Mock.js')"
        })
    )
}

Mock.mock('/api/getstoreimg1', 'get', () => {
    return storeimg1;
})



let storeimg2 = [];
for (var i = 0; i < 6; i++) {
    storeimg2.push(
        Mock.mock({
            // 90x120
            id: '@guid()',
            name: '@cword(4,6)',
            img: "@dataImage('90x120', '#00405d', '#FFF', 'Mock.js')"
        })
    )
}

Mock.mock('/api/getbookshow', 'get', () => {
    return storeimg2;
})


let storeimg3 = [];
for (var i = 0; i < 32; i++) {
    storeimg3.push(
        Mock.mock({
            // 90x120
            id: '@guid()',
            name: '@cword(4,6)',
            img: "@dataImage('90x120', '#00405d', '#FFF', 'Mock.js')",
            text: '@cparagraph(10)',
            author: '@cname(2,4)'
        })
    )
}

Mock.mock('/api/getbookdetail', 'post', (options) => {
    // console.log(options);
    // console.log(JSON.parse(options.body));
    let { pageno, pagesize } = JSON.parse(options.body).params;

    let startIndex = (pageno - 1) * pagesize;
    let endIndex = pageno * pagesize;
    let mockStoreImg3 = storeimg3.slice(startIndex, endIndex);

    let rs = {
        mockStoreImg3,
        total: storeimg3.length
    }
    return rs;
})


// everyone-searching
let everyoneSearching = [];

for (var i = 0; i < 12; i++) {
    everyoneSearching.push(
        Mock.mock({
            // 90x120
            id: '@guid()',
            bookname: '@cword(3,5)'
        })
    )
}

Mock.mock('/api/geteverysearching', 'get', () => {
    return everyoneSearching;
})