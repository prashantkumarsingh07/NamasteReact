import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0, 
      
    }
  }
  render(){
    
     const {name}=this.props; /*  destructuring */
    return(
    <div className="user-card">
    <h2> Count:{this.state.count}</h2>
     <button onClick={()=>{
      // Never UPDATE STATE VARIABLES DIRECTLY
      this.setState({
        count:this.state.count+1,
      })
     }}> Count increase</button>
    <h2>Name : {name}</h2>
    <h2>Location : Bhopal</h2>
    <h2>Contact : prashantkumarsingh07pks@gmail.com</h2>

    </div>
    );
  }
}

export default UserClass;