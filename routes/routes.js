 const express = require('express');
 const router = express.Router();
 const signUpTemplateCopy = require('../models/SignUpModels')
 const AddSomethingTemplateCopy = require('../models/AddSomethingModels')
 const InvoiceTemplateCopy  = require('../models/InvoiceModels')
 const bcrypt = require('bcrypt')
 
 
 router.get('/', async(req, res) => {

    try{

        const users = await signUpTemplateCopy.find();
        return res.json({users});

    } catch (error) {
       return res.status(500).json({error : error.message});
    }
    
});

 router.get('/view', async(req, res) => {

    try{

        const somethings = await AddSomethingTemplateCopy.find();
        return res.json({somethings});

    } catch (error) {
       return res.status(500).json({error : error.message});
    }
    
});

 router.get('/viewinvoice', async(req, res) => {

    try{

        const invoice = await InvoiceTemplateCopy.find();
        return res.json({invoice});

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

 router.post('/newinvoice', async(req, res) => {
    

    const addInvoice = new InvoiceTemplateCopy({
        name: req.body.name,
        contact: req.body.name,
        type: req.body.type,
        items: req.body.name,
        price: req.body.name,
        quantity: req.body.quantity,
        total: req.body.price,
        file: req.body.name,
    })
    addInvoice.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

 module.exports = router;
