const https = require('https')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    let url = ''

    readRequestBodyAsBuffer(req).then(bufs => {

        url = bufs.toString()

        const schemaReg = /(?:http|https)\:\/\/([0-9a-zA-Z._\-]*)\/(.*)/

        const matches = schemaReg.exec(url)
        const domain = matches[1]
        const path = matches[2]

        const options = {
            method: 'GET',
            host: domain,
            path: `/${path}`,
            headers: {
                'referer': 'douban.com',
                'accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,ja;q=0.6',
                'cache-control': 'no-cache',
                'pragma': 'no-cache',
                'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
                'Access-Control-Allow-Origin': '*',                
            }
        }

        console.log(`domain: ${options.host}\npath: ${options.path}`)

        https.get(options, outRes => {

            let chuncks = []

            outRes.on('data', chunck => {
                chuncks.push(chunck)
            }).on('end', () => {

                res.writeHead(200, { ...outRes.headers, ...{ 'Access-Control-Allow-Origin': '*', } })
                res.write(Buffer.concat(chuncks))
                res.end()
            })

        })
    })

})

const port = 3003

server.listen(port)
console.log(`server running on port ${port}`)


function readRequestBodyAsBuffer(req) {
    return new Promise((resolve, reject) => {
        const bufs = []

        req.on('data', chunck => {
            bufs.push(chunck)
        })
        
        req.on('end', () => {
            if(typeof resolve === 'function') {
                resolve(Buffer.concat(bufs))
            } else {
                console.log(`readRequestBodyAsBuffer bufs: ${bufs}`)
            }
        })

        req.on('error', err => {
            console.log(`readRequestBodyAsBuffer failed, errors: ${err}`)
        })
    })
}