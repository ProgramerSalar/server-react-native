import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cloudanary from 'cloudinary'
import Stripe from 'stripe';


export const stripe = new Stripe(process.env.STRIPE_API_SECRET)

cloudanary.v2.config({
    cloud_name:process.env.CLOUDANARY_NAME,
    api_key:process.env.CLOUDANARY_API_KEY,
    api_secret:process.env.CLOUDANARY_API_SECRET,
})


app.listen(process.env.PORT, () => {
    console.log(`
    Server listinging on port: ${process.env.PORT}, in ${process.env.NODE_ENV} mode 
    `)
})

// database 
connectDB()