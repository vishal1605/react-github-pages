import { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {
  const navigate = useNavigate();
  const submitFormLogin = (e) => {
      e.preventDefault();
      let formData = new FormData(e.target);
      let user = {
          email: '',
          password: '',
      }
      for (const [key, value] of formData) {
          console.log(key, value)
          user[key] = value;
      }
      fetch('http://localhost:8080/login-process', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify(user)
      }).then(json=>{
          console.log(json.text)
          return json.json()}).then(data=>{
          console.log(data)
          if (data.email) {
              navigate(`/home-page`)
          }else{
              alert("Invalid User")
          }
      }).catch(err=>{
          console.log(err)
      })
  }
  return (
      <div className="row">
          <div className="col-5 m-auto">
              <div className="wrapper fadeInDown">
                  <div id="formContent">

                      <div className="fadeIn first">
                          <img src="./src/assets/images/image.png" id="icon" alt="User Icon" />
                      </div>

                      <form onSubmit={submitFormLogin}>
                          <input type="email" id="login" className="fadeIn second" name="email" placeholder="email" />
                          <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" />
                          <input type="submit" className="fadeIn fourth" value="Log In" />
                      </form>

                      <div id="formFooter">
                          <a className="underlineHover" href="/register">Register</a>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  )
}

export default App
