import { useState } from 'react'

function UserSummary(props){
// console.log(userData)
    const [state, setState] = useState('false')
// console.log(props.userData, 'usersummary')
//const [name, gender] = props.userData


const showMore = () => {
    setState(prevState => (!prevState))
}

    return(
       
        <div>
       
            <span>Name:{props.userData[0].name.first}</span>&nbsp;
            <span>{props.userData[0].name.first}</span>
            <p>Email:{props.userData[0].email}</p>        

          
            
         <button onClick={showMore}>{state? 'Hide' : 'More'}</button>
         
        {state && 
        <div>
            <br/>
              <hr/>
              <img src={props.userData[0].picture.thumbnail} />
              
        <p>Email:{props.userData[0].email}</p>
        <span>Street:{props.userData[0].location.street.number}</span>&nbsp;
        <span>{props.userData[0].location.street.name}</span>
        <p>City:{props.userData[0].location.city}</p>
       
        </div>
        }
      

         </div>
         // {props.userData? 
            // :<p>No User to Display</p>}</div>
        //     <h1>hello</h1>
        // name, email, street, city, state, and username 
    )
}

export default UserSummary