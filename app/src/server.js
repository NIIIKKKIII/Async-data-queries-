import express from "express"
import cors from "cors"

const app = express();
app.use(express.jsno());
app.use(cors());

app.get("/N", (req, res)=>{
const data = {
    Home : Math.floor(Math.random()*100),
    Jobs : Math.floor(Math.random()*100),
    Network : Math.floor(Math.random()*100),
    Notifications : Math.floor(Math.random()*100),
    
}
res.json(data)
})


app.listen(3000)


export default app;