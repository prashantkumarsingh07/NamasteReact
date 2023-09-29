import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    
     const {name}=this.props; /*  destructuring */
    return(
    <div className="user-card">
    <h2>Name : {name}</h2>
    <h2>Location : Bhopal</h2>
    <h2>Contact : prashantkumarsingh07pks@gmail.com</h2>

    </div>
    );
  }
}

export default UserClass;