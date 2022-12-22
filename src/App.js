import logo from './logo.svg';
import './App.css';
import { useState, useContext } from 'react';
import Students from'./components/Students';
import Counter from './components/Counter';
import Contact from './components/Contact';
import About from './components/About';
import Pokemon from './components/Pokemon';
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider'

/*
  Create 2 new React components:
  /about
  /contact

  Please add at least one heading, paragraph tag, and unordered list to each componenet
 */

export default function App() {
  const { login, logout, user } = useContext(AuthContext)

  return (
    <div className="App">
      <h2>Logged in User: { user.username }</h2>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pokemon">Pokemon</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {
              (user.loggedIn) ?
              <li><button onClick={logout}>Logout</button></li> :
              <li><button onClick={login}>Login</button></li>
            }
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Pokemon />} />
          {/* {<Route path="/blog" element={<Blog />} />} */}
          <Route path="/blog">
            <Route path=":uid">
              <Route path=":id" element={<BlogSingle />} />
            </Route>
            <Route path="" element={<Blog />} />
          </Route>

        </Routes>
      </BrowserRouter>
      
      {/* <Students />*/}
      {/* <Counter default={10} name={"FIRST COUNTER"}/>
      <Counter />
      <Counter default={5} name={"MIDDLE COUNTER"}/>
      <Counter />
      <Counter default={20} name={"LAST COUNTER"}/> */}
    </div>
  );
}

// export default App;
