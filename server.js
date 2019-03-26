const express = require('express')
const { db, Users } = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname + '/public'))

app.post(
    '/signup',
    (req,res) => {
        let reqEmail = req.body.email
        Users.count({ where: { email: reqEmail } })
        .then((count) => {
            if(count > 0) {
                return res.send({success: false})
            } else {
                Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
                res.send({success: true})
            }        
        })
    })
    app.post(
        '/login',
        (req, res) => {
            var username = req.body.email,
                password = req.body.password;
            return Users.findOne({ where: {email: username, password: password}})
            .then((row) => {
                if(row !== null) {
                    return res.send({name: row.name, success: true})
                } else {
                    res.send({success: false})
                }
            })
        }
    )
        db.sync({ alter: true })
        .then(() => {
            app.listen(9876, () => {
                console.log('Server started on http://localhost:9876')
            })
        })
        .catch(console.error)