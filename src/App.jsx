import "./App.css";
import BlogPreview from "./components/BlogPreview";

function App() {
	return (
		<>
			<header className="header"></header>
			<main className="main">
				<BlogPreview />
			</main>
			<footer className="footer">
				<div className="attribution">
					Challenge by&nbsp;
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by&nbsp;
					<a href="https://github.com/Mi6aRdnv" target="_blank">
						Mi6aRdnv
					</a>
					.
				</div>
			</footer>
		</>
	);
}

export default App;
