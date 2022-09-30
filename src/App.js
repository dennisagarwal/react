import './App.css';
import AddPost from './components/AddPost/AddPost';
import Button from './components/Button/Button';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
   <Button name="Button Name"/>
   <HelloWorld text="Hello World Text"/>
   <Posts/>
   <AddPost></AddPost>
    </div>
  );
}

export default App;
