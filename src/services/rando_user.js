import axios from 'axios';

export async function fetchUser(){
    const response = await axios.get('https://api.randomuser.me/')
   
    // const response = await  axios.get("https://randomuser.me/", { headers: {
    //     'ACCESS-CONTROL-ALLOW-ORIGIN': "*"
    //     }})
    console.log(response, 'response from fetchUser funtion')
    return response
}