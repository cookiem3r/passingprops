import NavigationBar from './Components/NavigationBar';
import Content from './Components/Content';
import { useState } from 'react';
import './App.css';

//Top level Component
function App() {

  //Use State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function flipLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      {/* passing data as a prop*/}
      <NavigationBar value={isLoggedIn}/>      

      {/* passing the function to change data as a prop*/}
      <Content onLogin={flipLogin}/>
    </div>
  );
}

export default App;
