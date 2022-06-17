// import logo from './logo.svg';
// import {navbar} from './Components/navbar'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AddTodo } from "./Components/AddTodo";
import { Navbar } from "./Components/Navbar";
import Login from "./Components/Login";
import RequiredAuth from "./RequredAuth/RequiredAuth";
import Home from "./Components/Home";
import Details from "./Components/Details";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todos/:id" element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
