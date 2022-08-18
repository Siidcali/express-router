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

router.post('/', (req,res)=>{
    fruits.push(req.body)
    res.send('added fruit')
})
router.put('/:id', (req,res)=>{
    fruits[req.params.id]=req.body
    res.send('updated fruit')
})
router.delete('/:id', (req,res)=>{
    fruits.splice(req.params.id-1,1)
    res.send('deleted fruit')
})

module.exports = router
