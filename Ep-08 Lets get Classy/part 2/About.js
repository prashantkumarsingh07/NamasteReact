import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
  return(
    <div>
      <h1> About us </h1>
      <h1> This is your one stop solution</h1>
      <User name={"Prashant Singh (function)"}/>
      <UserClass name={"Prashant Singh(Class)"} />
    </div>
  );
};
export default About;