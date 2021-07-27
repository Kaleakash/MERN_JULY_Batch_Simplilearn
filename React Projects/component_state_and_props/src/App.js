import { MyButton,MyInputField } from './MyButtonComponent';

import EmployeeDetails  from './EmployeeDetails';
function App() {
  return (
    <div className="App">
      <h2>React State and Props concept</h2>
      <EmployeeDetails desg="Developer" city="Bangalore"></EmployeeDetails>
      <hr/>
      Name :<MyInputField type="text" name="uname"/><br/>
      Email :<MyInputField type="email" name="emailId"/><br/>
      PhNumber :<MyInputField type="number" name="phNumber"/><br/>
      <MyButton type="submit" value="Sign In!"></MyButton>
      <MyButton type="reset" value="reset"></MyButton>
      <MyButton type="button" value="Click Here"></MyButton>
    </div>
  );
}

export default App;
