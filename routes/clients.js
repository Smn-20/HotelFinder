const express=require('express');
const router=express.Router();
const cors=require('cors');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const config=require('config');
const {check, validationResult}=require('express-validator');
const Client=require('../models/Client');
const auth=require('../middleware/authentication');

router.use(cors());
//Register a client
router.post('/register',[
    check('names','Your names are required').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('phone','Please enter a valid phone number').isLength({min:6}),
    check('password','Please your password must contain at least 6 characters').isLength({min:6})
], async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const { names, email, phone, password } = req.body;
        try {
            let client = await Client.findOne({ where: { email: email } });
            //check if the client already exists
            if(client){
               return res.status(400).json({errors:[{msg:'User already exists!'}]})
            }
    
            client=new Client({
                names,
                email,
                phone,
                password
            })
            //encrypt password
            const salt = await bcrypt.genSalt(10);
            client.password = await bcrypt.hash(password,salt);
    
            //save the user in the database
            await client.save();
           //implementation of the jsonwebtoken
           const payload={
               client:{
                   id:client.id
               }
           }
           jwt.sign(payload,config.get('jwtSecret'),{expiresIn:360000},(err,token)=>{
              if(err) throw err;
              res.json({token});
           });
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    
    
    
})

//Authentication test
router.get('/login',auth, async (req,res)=>{
   try {
       const client = await Client.findByPk(req.client.id);
       res.json(client);
   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server error');
   }
})

//login user and authenticate with token

router.post('/login',[
    check('email','Please include a valid email').isEmail(),
    check('password','Password is required').exists()
], async (req,res)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const { email, password } = req.body;
    try {
        let client = await Client.findOne({ where: { email: email } });
        //check if the user already exists
        if(!client){
            return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
        }

        const isMatch = await bcrypt.compare(password,client.password);

        if(!isMatch){
            return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
        }
        const payload={
           client:{
               id:client.id
           }
        }
        jwt.sign(payload,config.get('jwtSecret'),{expiresIn:360000},(err,token)=>{
          if(err) throw err;
          res.json({token});
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    
})

module.exports=router;
