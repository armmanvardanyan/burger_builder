import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-my-burger-ded4e.firebaseio.com/',
    
})

export default instance;