const express = require('express')
const router = express.Router()

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]
router.get('/', (req,res)=>{
    res.send(users)
})

router.get('/:num', (req,res)=>{
    
    res.send(users[req.params.num -1])
})
module.exports = router
