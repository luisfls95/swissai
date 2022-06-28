import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import Project from './components/Project';


function App() {

  const [user, setUser]  = useState(undefined)
  let {projectId} = useParams()
 
  const sendUser = (userInfo) => {
    setUser(userInfo)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login defineUser={sendUser} />} />
        <Route path="home" element={user == undefined ? <Login defineUser={sendUser}/> : <Home user={user} defineUser={sendUser}/>} />
        <Route path="project">
          <Route path=":projectId" element={user == undefined ? <Login defineUser={sendUser}/> : <Project user={user} defineUser={sendUser}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
