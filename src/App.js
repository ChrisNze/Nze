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
						<button href="#" class="navigation__link navigation__link-1">
							Gmail
						</button>
					</li>
					<li class="navigation__list-item">
						<button href="#" class="navigation__link navigation__link-2">
							Images
						</button>
					</li>
					<li class="navigation__list-item navigation__list-item-3" title="Google apps">
						<button href="#" class="navigation__link navigation__link-3">
							<TiThSmall className="icon" />
						</button>
					</li>
					<li class="navigation__list-item navigation__list-item-4">
						<button href="#" class="navigation__link navigation__link-4">
							Sign in
						</button>
					</li>
				</ul>
			</nav>
			<main class="content__wrapper">
				{inputText ? <p>{inputText}</p> : <img src={logo} alt="Side Hustle Image" className="logo" />}
				<form method="GET" class="form">
					<button href="#" class="icon__link-1">
						<BiSearchAlt2 />
					</button>
					<input type="text" class="input__text" onChange={changeImage} />
					<button href="#" class="icon__link-2">
						<TiMicrophoneOutline />
					</button>
				</form>
				<div class="button__div">
					<button class="btn btn-1">Google Search</button>
					<button class="btn btn-2">I'm Feeling Lucky</button>
				</div>
				<div class="goggle__language">
					<p>Google offered in:</p>
					<ul class="languages">
						<li>
							<button href="#" class="hausa">
								Hausa
							</button>
						</li>
						<li>
							<button href="#" class="igbo">
								Igbo
							</button>
						</li>
						<li>
							<button href="#" class="yoruba">
								Ede Yoruba
							</button>
						</li>
						<li>
							<button href="#" class="pidgin">
								Nigerian Pidgin
							</button>
						</li>
					</ul>
				</div>
			</main>
			<footer class="footer">
				<p class="nigeria">Nigeria</p>
				<div class="copywrite">
					<p class="copywrite__text">
						<button href="#">Carbon neutral since 2007</button>
					</p>
					<div class="footer__link">
						<ul class="footer__navigation-list">
							<li>
								<button href="#">About</button>
							</li>
							<li>
								<button href="#">Advertising</button>
							</li>
							<li>
								<button href="#">Business</button>
							</li>
							<li>
								<button href="#">How it works</button>
							</li>
						</ul>
						<ul class="footer__terms">
							<li>
								<button href="#">Privacy</button>
							</li>
							<li>
								<button href="#">Terms</button>
							</li>
							<li>
								<button href="#">Settings</button>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
