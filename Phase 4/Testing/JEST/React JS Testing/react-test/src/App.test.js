import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// This API is use to provide the link to component

Enzyme.configure({adapter:new Adapter()});  
describe("App Component Testing",()=> {

  // static value 
  it("Simple Text Message Testing",()=> {
     let wrapper  = shallow(<App/>)       // load the component
      let text    = wrapper.find("h1").text();  // get the content of h1 tag
      expect("Welcome to React Testing").toBe(text); 
  })

  // dynamic value 
  it("State variable testing in JSX",()=> {
    let wrapper  = shallow(<App/>)       // load the component
    let text    = wrapper.find("p").text();  //
     expect("Name is Raj").toBe(text); 
 })


 // variable value 
 it("State variable",()=> {
  let wrapper  = shallow(<App/>)       // load the component
  let ref    = wrapper.instance();    // creating the reference of component
   expect(100).toBe(ref.state.id);    // id value 
   expect("Raj").toBe(ref.state.name); //name value 
})

})