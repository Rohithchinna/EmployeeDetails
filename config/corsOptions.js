const whitelist=[
    "https://www.google.com",
    "https://127.0.0.1:3000",
    "https://localhost:3000"
    ]
const corsOptions={
    origin:(origin,callback)=>{
        if(whitelist.includes(origin)|!origin){
            callback(null,true);
        }
        else{
            callback(new Error("Not allowed by CORS"));
        }

    },
    optionSuccessStatus : 200,
}

module.exports=corsOptions;