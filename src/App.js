import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react";
import { TiThSmall } from "react-icons/ti";
import { BiSearchAlt2 } from "react-icons/bi";
import { TiMicrophoneOutline } from "react-icons/ti";
const App = () => {
  const [inputText, setinputText] = useState("");

  const changeImage = (e) => {
    setinputText(e.target.value);
  };
  return (
    <div class="container">
      <nav class="navigation">
        <ul class="navigation__list">
          <li class="navigation__list-item">
            <a href="#" class="navigation__link navigation__link-1">
              Gmail
            </a>
          </li>
          <li class="navigation__list-item">
            <a href="#" class="navigation__link navigation__link-2">
              Images
            </a>
          </li>
          <li
            class="navigation__list-item navigation__list-item-3"
            title="Google apps"
          >
            <a href="#" class="navigation__link navigation__link-3">
              <TiThSmall className="icon" />
            </a>
          </li>
          <li class="navigation__list-item navigation__list-item-4">
            <a href="#" class="navigation__link navigation__link-4">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
      <main class="content__wrapper">
        {inputText ? (
          <p>{inputText}</p>
        ) : (
          <img src={logo} alt="Side Hustle Image" className="logo" />
        )}
        <form method="GET" class="form">
          <a href="#" class="icon__link-1">
            <BiSearchAlt2 />
          </a>
          <input type="text" class="input__text" onChange={changeImage} />
          <a href="#" class="icon__link-2">
            <TiMicrophoneOutline />
          </a>
        </form>
        <div class="button__div">
          <button class="btn btn-1">Google Search</button>
          <button class="btn btn-2">I'm Feeling Lucky</button>
        </div>
        <div class="goggle__language">
          <p>Google offered in:</p>
          <ul class="languages">
            <li>
              <a href="#" class="hausa">
                Hausa
              </a>
            </li>
            <li>
              <a href="#" class="igbo">
                Igbo
              </a>
            </li>
            <li>
              <a href="#" class="yoruba">
                Ede Yoruba
              </a>
            </li>
            <li>
              <a href="#" class="pidgin">
                Nigerian Pidgin
              </a>
            </li>
          </ul>
        </div>
      </main>
      <footer class="footer">
        <p class="nigeria">Nigeria</p>
        <div class="copywrite">
          <p class="copywrite__text">
            <a href="#">Carbon neutral since 2007</a>
          </p>
          <div class="footer__link">
            <ul class="footer__navigation-list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
            </ul>
            <ul class="footer__terms">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
