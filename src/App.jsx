import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./views/About";
import LandingPage from "./views/LandingPage";
import User from "./views/User";
import Error from "./views/Error";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router";
import TodosContext from "./contexts/todos_context";
import React,{ useState } from 'react';

const initialTodos = [
  {
    id: 1,
    title: "Do homework",
    description: "Do my homework",
    completed: false,
  },
  {
    id: 2,
    title: "Review hooks",
    description: "They're useful in React",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element= {<LandingPage/>} />
              <Route path="/about" element= {<About/>} />
              <Route path="user/:username" element={ <User/> }/>
              <Route path="*" element= {<Error/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </TodosContext.Provider>
  )
}

export default App;
