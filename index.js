import "dotenv/config"
import axios from "axios"
import express from "express"
const app = express();

app.get("/",function(req,res){
    res.send("server started");
})
app.get("/joke",async function (req, res) {
    try{
        const joke=await axios.get("https://icanhazdadjoke.com/slack",{headers: { 'Accept': 'application/json' }});
        res.send(`<h3>${joke.data.attachments[0].fallback}</h3>`);
    }
    catch(error){
        console.error(error);
        res.send("<h1>please try again,refresh the page</h1>")
    }
})

app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`)
})

