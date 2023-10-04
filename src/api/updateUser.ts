const editUserData = async(id:number,username:string,firstname:string,lastname:string,email:string,image:any,password:string ) => {
  try{
    const newData = await fetch(`https://dummyjson.com/users/${id}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        firstName: firstname,
        lastName: lastname,
        email: email,
        image: '',
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
        return data;
    })
    return newData;
  } catch (e) {
    console.error(e)
  }
  
}
export default editUserData;