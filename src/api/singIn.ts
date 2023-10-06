const singIn = async( username?:string, password?:string) => {
  try{
    const userData = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
      })
    })
    .then(res => res.json())
    .then(data => {
          return data
    })
    return userData
  } catch (username) {
    console.error(username)
  }
  
}
export default singIn;