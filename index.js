import express from "express";
import ip from "ip";


const MaxRequestPerMinute = 5;
const Maxtime= 10*1000;

let  ip_mapping = {};



const app = express();


setInterval(()=>{
    ip_mapping = {};
    console.log("IP mapping reset");

},Maxtime);

app.use((req,res,next)=>{

    const ipaddress = ip.address();
    ip_mapping[ipaddress] = ip_mapping[ipaddress]+1 || 1;

   // console.log(ip_mapping[ipaddress]);

    if(ip_mapping[ipaddress]>MaxRequestPerMinute){
        return res.status(429).send("Too many requests, please try again later.");
    }
    
    console.log(ip_mapping[ipaddress]);
    next();

});

app.get("/", (req,res)=>{
    res.send("Hello, World!");

    const myIp = ip.address();
    console.log(`Server is running on IP address: ${myIp}`);
})

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000,()=>{
    console.log("server is live");
})