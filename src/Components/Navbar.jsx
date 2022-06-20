import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledButton = styled.div`
width:500px;
height:70px;
font-size:30px;
border:1px solid black;
display:flex;
gap:20px;
text-align:center;
margin-left:200px;
margin-top:50px;
background-color:pink;
text-decoration:none;
`

function Navbar (){
return(
    <div>
    <h1>Navbar</h1> 
   <StyledButton>
   <Link to = "/">Home</Link>
   <Link to= "/login">Login</Link>
  </StyledButton>
    </div>

)
}
export { Navbar }