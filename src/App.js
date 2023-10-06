import React from 'react';
import { ReactDOM } from 'react';
import {Route, Routes} from 'react-router-dom'

import './App.css';

import { Layout } from './components/MainLayout';
import { Homepage } from './pages/HomePage';
import { Aboutpage } from './pages/Aboutpage';
import { Profilepage } from './pages/Profilepage';
import { EditProfilepage } from './pages/EditProfilepage';
import {Loginpage} from './pages/Loginpage';
import { Contactpage } from './pages/Contactpage';
import { SinglePostPage } from './pages/SinglePostPage';

import { UserAuth } from './hoc/UserAuth';
import { NotProtectedRoute  } from './hoc/NotProtectedRoute';
import { useRootStore } from './store/root-store-provider';

function App() {
  const {singInStore} = useRootStore();
  const sensetiveInfo = JSON.parse(localStorage.getItem("sensetiveInfo"))

  if((sensetiveInfo.username !== null) && (sensetiveInfo.password !== null)){
      singInStore.getUserData(sensetiveInfo.username, sensetiveInfo.password)
    }

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Homepage />}/>
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
          <Route path='/profile/edit' element = {
            <UserAuth>
              <EditProfilepage />
            </UserAuth>
          } />
          <Route path="/auth" element={
            <NotProtectedRoute>
              <Loginpage />
            </NotProtectedRoute>
          }/>
          <Route path="/contact"element={<Contactpage />}/>
          <Route path="/about"element={<Aboutpage />}/>
        </Route>
      </Routes>
    
  );
}

export default App;
