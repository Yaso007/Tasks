import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  useEffect(()=>{
    const response = fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (res)=>{
        const data = await res.json()
        console.log(data)
        setUser(data)
      }).catch((err)=>{
        console.log(err)
      })
      console.log(response)
  },[])
  return (
    <>
    {
        user.map((data)=>     <CardWrapper>
    <User user={data.name} email={data.email} phone={data.phone} website={data.website}>

  </User>
        </CardWrapper>
      )
 
}

    </>
  )
}

function User({user,email,phone,website}){
  return<>
    <h4>Username :: {user}</h4>
    <p>Email :: {email}</p>
    <p>Contact No :: {phone} </p>
  <p>
    website :: {website}</p> 
    
  </>
}

function CardWrapper({children}){
  return(
    <>
      <div className="d" style={{
        border:"2px solid wheat",
        borderRadius:"10px",
        boxShadow:"10 10 10",
        padding:"10px",
        margin:"10px",
        width:"500px",
        backgroundColor:"purple"
      }}>
      {children}
      </div>
    </>
  )
}
export default App
