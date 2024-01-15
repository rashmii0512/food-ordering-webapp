import {useState, useEffect} from "react";
import { GITHUB_URL } from "../utils/constants";


const User = () => {
    const [count , setCount] = useState("0");
    const[count2, setCount2] =  useState("1");
    const[info, setInfo] = useState([]);

    useEffect(()=>{
        getInfo();
    }, []);
    
    async function getInfo(){
        const data = await fetch(GITHUB_URL);
        const jsonData = data.json();
        setInfo(jsonData);
    }

    const [name, html_url] = info ;
    return (
        <div className="user-card">
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <h2>Name:{name}</h2>
            <h2>url: {html_url}</h2>
            <h3>Location</h3>
            <h4>Contact @rashmii0512</h4>
        </div>
    )
}
export default User;