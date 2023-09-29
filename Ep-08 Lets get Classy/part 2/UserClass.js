import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0, 
      count2:2, 
    }
  }
  render(){
    
     const {name}=this.props; /*  destructuring */
    return(
    <div className="user-card">
    <h2> Count:{this.state.count}</h2>
    <h2> Count:{this.state.count2}</h2>
    <h2>Name : {name}</h2>
    <h2>Location : Bhopal</h2>
    <h2>Contact : prashantkumarsingh07pks@gmail.com</h2>

    </div>
    );
  }
}

export default UserClass;