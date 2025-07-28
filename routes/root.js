const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res)=>{
    //res.sendFile('./views/index.html',{root: __dirname});
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'..','views','index.html'));
});
router.get('/new-page.html',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'..','views','new-page.html'));
});
router.get('/old-page.html',(req,res)=>{
    
    res.redirect(301,'/new-page.html');
});
router.get(['/hello','/hi'],(req,res)=>{
    
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
router.get('/hey',(req,res,next)=>{
    console.log("Its hey!!");
    next();
},(req,res)=>{
    res.send("Its next hey!!");
});


module.exports=router;