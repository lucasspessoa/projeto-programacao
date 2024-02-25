fetch('https://reqres.in/api/users')
.then(response => response.json())
.then((data) => console.log(data.data[5].last_name))
.catch((error) => console.log('error'))