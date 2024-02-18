import './Login.css';
import Logo from'./img/Aplica-Music-Logo.png';
import Wave from './img/Wave-2.png';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/user/login", {
        email: email,
        password: password,
      }).then(({ data }) => {
        if (data.message === "Login Success") {
          navigate('/home');
        } else {
          alert("Incorrect credentials not match");
        }
      });
    }
    catch (err) {
      alert(err);
    }

  }
  return (
    <div>
      <div class="container">
      <div class="waves">
            <img src={Wave} alt="" id="wave2"/>
        </div>
        <div class="header">
            <div class="header-logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div class="header-info">
                <div class="header-title">
                    <h1>Where your passion<br/><span>takes shape</span></h1>
                </div>
                <div class="header-presentation">
                    <p>Ignite your creativity and make your beats shine at our digital music academy. Turn your ideas into melodies with us, where each note is a new adventure in the world of sound. Explore, learn and create with passion in our home of digital music!</p>
                </div>
            </div>
        </div>
        <div class="login-form">
            <form action="#" class="form">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email..." value={email} onChange={(event) => {setEmail(event.target.value);}}/>
                </div>

                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password..." value={password} onChange={(event) => {setPassword(event.target.value);}}/>
                </div>
                <a href="#">Forgot your password?</a>
                <button type="submit" onClick={login}>Sign In</button>
            </form>
            <div class="sign-up">
                <div class="divider">
                    <div class="line"></div>
                        <span>OR</span>
                    <div class="line"></div>
                </div>
                <a href="/register">Join now and learn with us!</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;