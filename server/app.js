
const express=require("express");
const app=express();
const cors=require("cors");
const stripe=require("stripe")("sk_test_51PKx5KSBKvZOz9YclZFAZeKHXgrPm608GIKgi7AL5cDQX7ZhM2AiPPXpmNytauQUNbJc3u9F3CCq1ZEWb3wd9Ax900qnzCOW47")
const { firebaseApp, db} = require('./firebase')
const {set,ref} = require('firebase/database')
app.use(express.json());
app.use(cors());




//checkoutapi
app.post("/api/create-checkout-session",async(req,res)=>{
    const {Data}=req.body;

    const customer=await stripe.customers.create({
        name:Data.Name,
        address:{
            line1:"123 Default Street",
            city:"Hyderabad",
            postal_code:"500081",
            country:"IN"
        }
    });
    
    
    const session=await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:[{
            price_data:{
                currency:"inr",
                product_data:{
                    name:Data.Name,
                },
                unit_amount:Data.Amount * 100,
            },
            quantity:1, 
        }],
        mode:"payment",
        customer:customer.id,
        success_url:"https://swio-backend-sepia.vercel.app/success",
        cancel_url:"https://swio-backend-sepia.vercel.app/cancel",
    });
    //console.log(session.id)
    const sou={
        name:Data.Name,
        amount:Data.Amount,
        transaction:session.id
    }
    set(ref(db,`users/${session.id}`),sou);
    res.json({id:session.id})
})

app.listen(8080,()=>{
    console.log("server start")
})