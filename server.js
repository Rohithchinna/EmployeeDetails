const express=require('express');
const app=express();
const path=require('path');
const cors=require('cors');
const corsOptions=require('./config/corsOptions');
const {logger}=require('./middleware/logEvents');
const errHandler=require('./middleware/errorHandler');
const verifyJwt=require("./middleware/verifyJwt");
const cookieParser=require('cookie-parser');
const { kMaxLength } = require('buffer');
const router = require('./routes/api/employees');
const { pathToFileURL } = require('url');
const { hash } = require('crypto');
const { addMinutes } = require('date-fns');
const { appendFile } = require('fs');
const PORT=process.env.PORT || 3500;

app.use(logger);

app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'/public')));
console.log(__dirname);
app.use('/',require('./routes/root'));
app.use('/register',require('./routes/register'));
app.use('/login',require('./routes/auth'));
app.use('/refresh',require('./routes/refresh'));
app.use('/logout',require('./routes/logout'));
app.use(verifyJwt);  
app.use('/api',require('./routes/api/employees'));

app.use(errHandler);

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))