 const express = require('express');
 const router = express.Router();
 const signUpTemplateCopy = require('../models/SignUpModels')
 const AddSomethingTemplateCopy = require('../models/AddSomethingModels')
 const bcrypt = require('bcrypt')
 
 
 router.get('/', async(req, res) => {

    try{

        const maytables = await signUpTemplateCopy.find();
        return res.json({users});

    } catch (error) {
       return res.status(500).json({error : error.message});
    }
    
});

 router.get('/view', async(req, res) => {

    try{

        const maytables = await signUpTemplateCopy.find();
        return res.json({somethings});

    } catch (error) {
       return res.status(500).json({error : error.message});
    }
    
});


 router.post('/signup', async(req, res) => {
     const saltPass = await bcrypt.genSalt(10)
     const hashPass = await bcrypt.hash(req.body.password, saltPass)

     const signedUpuser = new signUpTemplateCopy({
         fullname: req.body.fullname,
         email: req.body.email,
         password: hashPass,
     })
     signedUpuser.save()
     .then(data => {
         res.json(data)
     })
     .catch(err => {
         res.json(err)
     })
 })

 router.post('/something', async(req, res) => {
    

    const addSomething = new AddSomethingTemplateCopy({
        name: req.body.name,
        type: req.body.type,
        quantity: req.body.quantity,
        price: req.body.price,
    })
    addSomething.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

 module.exports = router;
