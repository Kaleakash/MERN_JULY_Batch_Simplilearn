import EmployeeDetails from './EmployeeDetails';
function Header() {
  return(
    <div>
      <h2>This is Header Component</h2>
    </div>
  )
}

let Info = ()=><div>This is Arrow style componnet</div>
let PersonDetails = ()=> {
  return(<div>
          <h2>This arrow style component with multiple message</h2>
          <p>This is PersonDetails component</p>
        </div>)
}
function FooterComponent() {
  return(
    <div>
      <h3>This is footer component</h3>
      <p>This is footer component description</p>
    </div>
  )
}
function App() {  
  return(
    <div>
     <Header></Header> 
    <p>Welcome to React JS</p>
    <EmployeeDetails></EmployeeDetails>
    <Info></Info>
    <PersonDetails></PersonDetails>
    <FooterComponent></FooterComponent>
    </div>
  )
}

export default App;
