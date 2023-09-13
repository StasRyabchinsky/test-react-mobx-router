import React from 'react';
import { ReactDOM } from 'react';
import {Route, Routes, Link} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import { Layout } from './components/MainLayout';
import { Homepage } from './pages/HomePage';
import { Aboutpage } from './pages/Aboutpage';
// import { Postspage } from './pages/Postspage';
import { Profilepage } from './pages/Profilepage';
import { Authpage } from './pages/Authpage';
import { Contactpage } from './pages/Contactpage';
import { SinglePostPage } from './pages/SinglePostPage';

import { UserAuth } from './hoc/UserAuth';
function App() {            
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/home/:id" element={
          <UserAuth>
            <SinglePostPage />
          </UserAuth>
        }/>
        
        <Route path="/profile"element={
          <UserAuth>
            <Profilepage />
          </UserAuth>
        }/>
        <Route path="/auth"element={<Authpage />}/>
        <Route path="/contact"element={<Contactpage />}/>
        <Route path="/about"element={<Aboutpage />}/>

      </Route>
    </Routes>
  );
}

export default App;
