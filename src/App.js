import NavigationBar from './Components/NavigationBar';
import Content from './Components/Content';
import { useState } from 'react';
import './App.css';

//Top level Component
function App() {

  //Use State
  const [data, setData] = useState("Hello");

  //Function to change data
  function changeData(text) {
    setData(text);
  }

  return (
    <div className="App">
      {/* passing data as a prop*/}
      <NavigationBar value={data}/>      

      {/* passing the function to change data as a prop*/}
      <Content onLogin={changeData}/>
    </div>
  );
}

export default App;
