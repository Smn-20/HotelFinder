const express=require('express');
const app=express();
const cors=require('cors');
const PORT=process.env.PORT || 8080;
const db=require('./config/database');

//Test the database
db.authenticate()
.then(()=> console.log('Database connected successfully!!'))
.catch(err=> console.log('Error:'+err));

app.use(express.json({extended:false}));
app.use(cors());
app.use('/clients',require('./routes/clients'));
app.use('/hotels',require('./routes/hotels'));




app.get('/',(req,res)=>res.send('Everything is working fine!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

