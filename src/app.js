import express from "express";
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor esta rodando na porta ${PORT}`))

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {

    const { username, avatar } = req.body

    if(!username || typeof username !== 'string' || !avatar || typeof avatar !== 'string'){
        res.status(400).send('Error');
        return;
    }
        const newUser = {
            username, 
            avatar
        }
    
        if (!users.find(us => us.username === newUser.username)){
            users.push(newUser);
        }
    
        res.status(200).send('Ok');  
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body;

    if(tweet.length < 3){
        res.status(411).send('Must have at least 4 letters')
        return
    }else if(!users.includes(username)){
        res.sendStatus(401);
        return
    }

    const newTweet = {
        username, 
        tweet,
        avatar: users.find(us => us.username === username).avatar
    }
    
    tweets.push(newTweet);
    res.sendStatus(200);
})

app.get('/tweets', (req, res) => {
    
})