
  
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import style from './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className={style['header']}>
          <h1 className={style['title']}>My First React PWA</h1>

        </div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
    </Routes>

        <footer><div>2022, Pedro Amorim</div></footer>
      </div>
    </BrowserRouter>
  );
};

const Home = () => <div><h2>Home</h2></div>;
const About = () => <div><h2>About</h2></div>;
const Blog = () => <div><h2>Blog</h2></div>;

export default App;
