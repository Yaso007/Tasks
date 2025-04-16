
import { useState, useRef } from 'react';
import './App.css'

function App() {
 const [user, setUser] = useState({
 })
  return (<>
  <CardWrapper>
    <h1>User Form</h1>
    <UserForm user={user} setUser={setUser}>
    </UserForm>
  </CardWrapper>
 <CardWrapper>

<h3>    Submitted Inputs</h3>

  <p>
    Username: {user.username}
  </p>
  <p>
    Email: {user.email}
  </p>
  <p>
    password: {user.password}
  </p>
 </CardWrapper>
   
  </>

  );
}


function UserForm({user, setUser}){

  const handleSubmit = (e)=>{
    console.log("hello" + user)
     e.preventDefault();
     const form = e.target;

     const username = form.username.value;
     if(!username){
      alert("Username is required")
    }

     const email = form.email.value;
     if(!email){
      alert("email is required")
     }

     const password = form.password.value;
     if(!password){
      alert("password is required")
     }
     const update = {
      username,
      email,
      password
     }
     console.log(user)

     setUser(update)
   

  }
  return (<form onSubmit={handleSubmit}>
  <input type="text" placeholder='Enter username' name='username'/><br />
  <input type="text" name="email" placeholder='Enter email' /> <br />
  <input type="text" name='password' placeholder='Enter password' />
  <br />
  <button type="submit">Submit</button>
</form>)
}


function CardWrapper({children}){
return <div className='wrapper'>
  {children}
</div>
}
export default App
