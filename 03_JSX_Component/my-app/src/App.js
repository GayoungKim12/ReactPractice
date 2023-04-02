import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  // const message = "Learn React";

  // const getGreetingMassage = (name) => {
  //   return `Hello, ${name}! Learn React`
  // };

  // const name = 'Gayoung'

  const info = {
    firstName: "Lamu",
    lastName: "Lee",
    withImg: true,
  }

  return (
    <div className="App">
      <Header title={"Learn React"} />

      {/* <Welcome firstName={"Lamu"} lastName={"Lee"} withImg /> */}
      <Welcome {...info} />
      
      {/* <input type="checkbox" name="agreement" id="agreement-el"></input>
      <label htmlFor="agreement-el">동의</label> */}
    </div>
  );
}

export default App;
