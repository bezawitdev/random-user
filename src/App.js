import { useState, useEffect } from 'react'
import './App.css';
import { fetchUser } from './services/rando_user';
import UserSummary from './components/UserSummary';



function App() {
  const [currentUser, setCurrentUser] = useState([])
  const [checkData, setCheckData] = useState(false)

async function refreshUser(){
  const userList = await fetchUser()
    // console.log(userList)
    console.log('It works')
    setCurrentUser(userList.data.results)
    setCheckData(true)
   
}
 console.log(checkData, 'checkdata')
console.log(currentUser, 'app.js first')

useEffect(() => {
  refreshUser()
}, [])


  return (
    <div className="App">
     <h1>Rnadom User App</h1>
     <button onClick={refreshUser}>Get User</button>
    { checkData && <UserSummary userData={currentUser} />}
    
     
     {/* {JSON.stringify(currentUser)} */}
    </div>
  );
}

export default App;
