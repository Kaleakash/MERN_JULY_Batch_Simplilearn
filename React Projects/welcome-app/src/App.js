import logo from './logo.svg';
import './App.css';


function Header() {
  return(
    <div>
      <h2>This is Header Component</h2>
    </div>
  )
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
    <p>Welcome to React JS</p>
    <p>Welcome to React JS</p>
    <FooterComponent></FooterComponent>
    </div>
  )
}

export default App;
