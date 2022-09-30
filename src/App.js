import './App.css';
import AddPost from './components/AddPost/AddPost';
import Button from './components/Button/Button';
import ButtonContext from './components/Context/ButtonContext';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Posts from './components/Posts/Posts';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <ButtonContext.Provider value='Leela web dev context'>
      <Sidebar ></Sidebar>
      </ButtonContext.Provider>
   <Button name="Button Name"/>
   <HelloWorld text="Hello World Text"/>
   <Posts/>
   <AddPost></AddPost>
    </div>
  );
}

export default App;
