import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor esta rodando na porta ${PORT}`))

app.post('/sign-up', (req, res) => {

    const { username, avatar } = req.body

    const newUser = {
        username, 
        avatar
    }

    
})