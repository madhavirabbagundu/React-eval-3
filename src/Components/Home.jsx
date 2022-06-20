import React from 'react';
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
function Home(){

    const [input,setInput] = React.useState({
        email : "",
        password: ""
    });
  const [data,setData] = React.useState([])
  console.log(data)

const navigate = useNavigate();
if(input.token){
    navigate("login")
}


    const handleChange =(e)=> {
     const {name,value} = e.target;
     setInput({...input,[name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:3000/products`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res)
        })

    }
    
    const {email,password} = input;
    return (
        <>
        <h4>Home page</h4>
        <div>
        <form onSubmit = {handleSubmit}>
        <input type = "email"
        placeholder = "enter your email"
        value = {email}
        name = "email"
        onChange={handleChange}
        />
        <br/>
        <br/>

        <input type = "password"
        placeholder = "enter the password"
        name = "password"
        value = {password}
        onChange = {handleChange}/>

        {/* <input type= "submit" value = "LOGIN"/> */}
          
        </form>
        </div>
        <Link to = {`/login`}>Login</Link>

        {/* <div>
            {data.map((item)=>(
                <div key = {item.id}>
                <h1>{item.name}</h1>
                </div>
            ))}
        </div> */}
        </>
    )
}
export { Home }