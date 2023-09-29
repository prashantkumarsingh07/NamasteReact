import React from "react";
class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0, 
      
    };
    console.log( this.props.name+"Child constructor");
  }
 
  
  componentDidMount(){
    console.log( this.props.name+"child ComponentDidMount");

    // Used to make an API call
  }


  render(){
    
     const {name}=this.props; /*  destructuring */
     
     console.log(this.props.name+" child render");
     
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