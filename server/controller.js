const path = require('path')

let parkList = []

module.exports = {
    getHTML:  (req,res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },
    getBucket: (req,res) => {
        res.sendFile(path.join(__dirname, '../client/bucket.html'))
    },
    getPark: (req,res) => {
        res.sendFile(path.join(__dirname, '../client/parkList.html'))
    },
    postBucket: (req,res) => {
        // console.log(req.body)
        let { park } = req.body
        parkList.push(park)
        res.status(200).send(parkList)
    },
    removePark: (req,res) => {
        console.log(req.params)
        let {byePark} = req.params
        byePark.replace("delete"," ")
        console.log(byePark)
       parkList = parkList.filter(park => park !== byePark)
       res.status(200).send(parkList)
    }
    
}