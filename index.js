//  const express = require('express');
// const path = require('path')
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 4000
// app.use(bodyParser.urlencoded({ extended: true }));
// app.listen(PORT, (req,res)=>{
// console.log('server is running at', PORT)
// })
// let users = [
//     {name:'Tooba',id:1,email:'toobaanwer32@gmail.com',password:'1222'},
//     {name:'Komal',id:1,email:'komal@gmail.com',password:'1234'}    
// ]
// app.get('/signup',(req,res)=>{
// res.sendFile(path.join(__dirname,'registration','signup.html'))
// })
// app.post('/signup',(req,res)=>{
//   let {email, name, password} = req.body
//   let found = users.some((item)=>item.email == email)
//   if(found){
//       res.send('<h1>User already existed</h1>')
//   } else{
//       users.push({name,email,password,id:users.length+1})
//      res.sendFile(path.join(__dirname, 'registration','login.html'))
//   }
//   app.use(express.static(path.join(__dirname,'public')));
// //   app.use(express.static(path.join(__dirname,'registration'))) 
//   }) 
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const PORT = 4000

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


let users = [
    {id:1,email:'tooba.@gmail.com',password:'2211'},
    {id:2,email:'komal@gmail.com',password:'2222'}    
]
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"register")))


app.post('/Signup.html', (req, res) => {
    let found = users.some((item)=>item.email == req.body.email)
    if (found) {
        res.send("Email already exist")
    } else {
        users.push({
            email:req.body.email,
            password: req.body.psw,
            id:users.length+1
        })
        res.redirect('/Signin.html');
    }  
})

app.post('/Signin.html', (req, res) => {
    let found = users.some((item)=>item.email == req.body.email && item.password == req.body.psw)

    if (found) {
        res.send("Welcome")
    } else {
        res.send("Incorrect email or password")
    }  
})
















