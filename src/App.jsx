import "./App.css";
import BlogPreview from "./components/BlogPreview";
import PreviewImg from "./assets/images/drawers.jpg";
import AuthorPhoto from "./assets/images/avatar-michelle.jpg";

function App() {
	return (
		<div className="app">
			<header className="header"></header>
			<main className="main">
				<BlogPreview
					content={{
						previewImg: PreviewImg,
						title:
							"Shift the overall look and feel by adding these wonderful touches to furniture in your home",
						text: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips help you make any room feel complete.",
					}}
					author={{
						photo: AuthorPhoto,
						name: "Michelle Appleton",
						date: "28 Jun 2020",
					}}
				/>
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
		</div>
	);
}

export default App;
