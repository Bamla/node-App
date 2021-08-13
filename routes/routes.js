 const express = require('express');
 const router = express.Router();
 const signUpTemplateCopy = require('../models/SignUpModels')
 const bcrypt = require('bcrypt')


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

 module.exports = router;
