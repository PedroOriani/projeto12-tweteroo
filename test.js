import axios from 'axios'

axios.post('http://localhost:5000/sign-up', {    
    username: 'username',
    avatar: 'avatar'
}).then(res => {
    console.log('funcionou normal')
})

// axios.post('http://localhost:5000/tweets', {tweet: "EIEIEIEIEI"}).then(response => {
//     console.log(response.data)
// })

// axios.get('http://localhost:5000/tweets?page=2').then(response => {
//     console.log(response.data)
// })

// axios.get('http://localhost:5000/tweets/levy').then(response => {
//     console.log(response.data)
// })

// console.log(typeof 1 === 'number')