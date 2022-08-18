const express = require('express')
const router = express.Router()

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get('/:num', (req,res)=>{
    res.send(fruits[req.params.num -1])
})


router.get('/', (req,res)=>{
    res.send(fruits)
})

module.exports = router
