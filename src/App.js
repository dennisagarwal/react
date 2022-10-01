import "./App.css";
import AddPost from "./components/AddPost/AddPost";
import Button from "./components/Button/Button";
import Category from "./components/Category/Category";
import ButtonContext from "./components/Context/ButtonContext";
import UserContext from "./components/Context/UserContext";
import HelloWorld from "./components/HelloWorld/HelloWorld";
import Posts from "./components/Posts/Posts";
import ParentRefTextInput from "./components/RefTextInput/ParentRefTextInput";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  let userData = {
    name: "Leela",
    greet: function () {
      return "hello " + this.name;
    },
  };
  return (
    <div className="App">
      <ButtonContext.Provider value="Leela web dev context">
        <UserContext.Provider value={userData}>
          <Sidebar/>
        </UserContext.Provider>
      </ButtonContext.Provider>
      <Button name="Button Name" />
      <HelloWorld text="Hello World Text" />
      <Category/>
      <ParentRefTextInput/>
      <Posts />
      <AddPost></AddPost>
    </div>
  );
}

export default App;
