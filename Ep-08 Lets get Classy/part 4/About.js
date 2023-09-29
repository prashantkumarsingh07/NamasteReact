import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
class About extends Component{
  constructor(props){
    super(props);
    console.log(" Parent constructure");
  }
  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }
  render()
  {
    console.log(" Parent Render");
    return(
      <div>
        <h1> About us </h1>
        <h1> This is your one stop solution</h1>
       
        <UserClass name={"Prashant Singh(Class)"} />
      </div>
    );
  }

}


export default About;