import React from 'react';
import styled  from 'styled-components'
function Login(){
    const [data,setData] = React.useState([])
    const [count,setCount] = React.useState(0);

    const StyleLine = styled.h1`
    border : 1px solid black;
    width:200px;
    // height:400px;
    display:grid;
    grid-template-column:repeat(1,1fr);
    margin-left:70px;
    `
const StyleButton = styled.button`
border : 1px solid black;
// width:200px;
// height:400px;
// display:grid;
grid-template-column:repeat(3,1fr);
// margin-left:260px;
`
const handleadd=()=>{
setCount(count+1)
}
const HandleDel=()=>{
    setCount(count-1)
    }

 



React.useEffect(()=>{
    fetch(`http://localhost:3000/products`)
    .then((res)=>res.json())
    .then((res)=>{
        setData(res)
    })
},[])

    return (
        <>
        <h4>Login page</h4>
        <div className='table'>
            {data.map((item)=>(
                <div key = {item.id} className="table1">
           
           <StyleLine>{item.name}</StyleLine>
          <div > <p>{item.description}</p>
        
           <p>{count+1}</p>
           
            <StyleButton onClick={handleadd}>Increase</StyleButton>
            
              <StyleButton onClick = {HandleDel}>Decrease</StyleButton>
                </div>
                 </div>
                
            ))}
        </div>
        </>
    )
}
export { Login }