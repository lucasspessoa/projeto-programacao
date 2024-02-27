import axios from 'axios';

const URL = ('https://reqres.in/api/users');

axios.get(URL)
.then((response) => console.log(response.data))
.catch((error) => console.log(error))