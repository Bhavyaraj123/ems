import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage } from './utils/LocalStorage'

const App = () => {
 const [user, setUser] = useState();
 const [loggedinUser, setloggedinUser] = useState()

 const [userData,setUserData]=useContext(AuthContext)

useEffect(() => {
  if(userData){
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role);
    setloggedinUser(userData.data)

    
    }

   
  }
}, [userData])


 const handleLogin=(email,password)=>{
  if(email == "admin@itfirm.com" && password == "123"){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:admin}))

  }else if(userData){
    const employees =  userData.find((e)=>email==e.email && e.password==password)
    if(employees){

      setUser('employees')
      setloggedinUser(employees)
      console.log("emp data fetcched" + email +password)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employees',UserData:employees}))
    }

  }
  else{ 
    console.log("invalid email and user")
  }
 }
 
 



  


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === 'admin'?<AdminDashboard changeUser={setUser}  />:<EmployeeDashboard  changeUser={setUser} data={loggedinUser}/>}
   
    </div>
  )
}

export default App
