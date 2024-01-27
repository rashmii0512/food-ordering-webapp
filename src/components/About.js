import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent Constructor");
    };

    componentDidMount(){
        // console.log("Parent's component mounted");
    }

    render(){

        // console.log("Parent render");

        return (
            <div>
                <h1>About</h1>
                <p>My first React App</p>
                <div>
                    Logged in user :
                    <UserContext.Consumer>
                        {({loggedInUser})=>(
                            <span> {loggedInUser} </span>
                        )}
                    </UserContext.Consumer>
                </div>
                {/* <User name="rashmi-function"/> */}

                {/* <UserClass name={"1st class"} age={20}/> */}
                {/* <UserClass name={"2nd class"} age={20}/> */}
                <UserClass/>
            </div>
            
        )
    };
}

export default About;