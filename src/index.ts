import * as express from 'express'
const exp = require('express')
const app =  exp()

app.get("/",(req:any,res:any)=>{
    try {
        return res.status(200).send({
            users:[
                {
                    name:"Bharat Gupta",
                    phone:9654989991
                },
                {
                    name:"Yogesh",
                    phone: 9999999999
                },
                {
                    name:"Aayush",
                    phone:8888888888
                },
                {
                    name:"Dinesh",
                    phone:7777777777
                }
            ]
        })
    } catch (error) {
        console.log("Global Error : ",error)
    }
})

app.listen(3000)


