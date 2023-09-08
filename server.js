const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

let staticPath = path.join(__dirname, "public");

const app = express();


app.use(express.static(staticPath));

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})

app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})


app.use(express.json());
app.post('/signup', (req, res) => {
    let { name, email, password, number, tac, notification } = req.body;

    
    if(name.length < 3){
        return res.json({'alert': 'name must be 3 letters long'});
    } else if(!email.length){
        return res.json({'alert': 'enter your email'});
    } else if(password.length < 8){
        return res.json({'alert': 'password should be 8 letters long'});
    } else if(!number.length){
        return res.json({'alert': 'enter your phone number'});
    } else if(!Number(number) || number.length < 10){
        return res.json({'alert': 'invalid number, please enter valid one'});
    } else if(!tac){
        return res.json({'alert': 'you must agree to our terms and conditions'});
    }       
})

let { name, email, password, number, tac, notification } = req.body;

if(name.length < 3){
    return res.json({'alert': 'name must be 3 letters long'});
} else if 

JSON = {
    'key': 'value'
 }

 const processData  = (data) => {
        loader.style.display = null;
        if (data.alert) {
            showAlert(data.alert);
        }
    }

let serviceAccount = require("path of key file");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

db.collection('users').doc(email).get()
.then(user => {
    if(user.exists){
        return res.json({'alert': 'email already exists'});
    } else{
        
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                req.body.password = hash;
                db.collection('users').doc(email).set(req.body)
                .then(data => {
                    res.json({
                        name: req.body.name,
                        email: req.body.email,
                        seller: req.body.seller,
                    })
                })
            })
        })
    }
})

db.collection('users').doc(email).get()
.then




if(user.exists){
    return res.json({'alert': 'email already exists'});
} else{
    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            req.body.password = hash;
            db.collection('users').doc(email).set(req.body)
            .then(data => {
                res.json({
                    name: req.body.name,
                    email: req.body.email,
                    seller: req.body.seller,
                })
            })
        })
    })
}

const "processData" = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    } else if(data.name){
    
        data.authToken = generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}