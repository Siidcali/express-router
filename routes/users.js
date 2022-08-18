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

router.post('/', (req,res)=>{
    users.push(req.body)
    res.send('added user')
})
router.put('/:id', (req,res)=>{
    users[req.params.id]=req.body
    res.send('updated user')
})
router.delete('/:id', (req,res)=>{
    users.splice(req.params.id-1,1)
    res.send('deleted user')
})

router.get('/:num', (req,res)=>{
    
    res.send(users[req.params.num -1])
})
module.exports = router
