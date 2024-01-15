import React from "react";
import { GITHUB_URL } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(this.props.name + "Child Constructor");
        // console.log(props);
        this.state = {
            count  : 0,
            count2 : 1,
            userInfo:{
                name :"dummy",
                url: "dummy",
            }
        };

        // this.setInterval(()=>{
        //     console.log("here");
        // }, 1000 );


        

    }

    async componentDidMount(){
        

        const data = await fetch(GITHUB_URL);
        const jsonData = await data.json();
        this.setState({
            userInfo : jsonData,
        })
        console.log(jsonData);

        
    }

    componentWillUnmount(){

    }

    render(){
        // console.log(this.props.name + "Child render");
        // const {name} = this.props;
        const {count, count2} = this.state;
        const {name, html_url} = this.state.userInfo ;
        return(
            <div className="user-card">
                {/* <h2>Name:{this.props.name}</h2> */}
                <h2>{this.state.count}</h2>
                <   button 
                    onClick = {()=>{
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}
                >incriment count</button>
                <h2>{count2}</h2>
                <h2>Name:{name}</h2>
                <h2>url: {html_url}</h2>
                <h4>Contact @rashmii0512</h4>
            </div>
        )
    }
}

export default UserClass;