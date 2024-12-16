import express from 'express'
import cors from "cors"
import expenseRouter from "./routes/expense.route"
import settingsRouter from "./routes/settings.route"
const app = express();

app.use(cors());
app.use(express.json());


//Error HAndling
app.use(async)

app.listen(3000, () => {
    console.log("server is up on 3000")
});