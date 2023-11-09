async function saveUser(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const password = event.target.password.value;

    const user={
        name,email,phone,password
    }
    console.log(user)

    try{
        const response = await axios.post("http://localhost:4000/user/signup",user)
        alert(response.data.message);
    }catch(err){
        console.log(err);
    }
}