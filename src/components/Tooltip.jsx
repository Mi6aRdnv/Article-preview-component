import "./Tooltip.css";
import facebookIcon from "../assets/icons/icon-facebook.svg";
import twitterIcon from "../assets/icons/icon-twitter.svg";
import pinterestIcon from "../assets/icons/icon-pinterest.svg";

export default function Tooltip() {
	return (
		<div className="tooltip">
			<span className="tooltip__text">SHARE</span>
			<a
				href="https://www.facebook.com/sharer/sharer.php?u=https://your-article-url.com"
				className="tooltip__share-link"
				aria-label="Share on Facebook"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={facebookIcon}
					alt="Facebook"
					className="tooltip__share-icon"
				/>
			</a>
			<a
				href="https://twitter.com/intent/tweet?url=https://your-article-url.com"
				className="tooltip__share-link"
				aria-label="Share on Twitter"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={twitterIcon} alt="Twitter" className="tooltip__share-icon" />
			</a>
			<a
				href="https://pinterest.com/pin/create/button/?url=https://your-article-url.com"
				className="tooltip__share-link"
				aria-label="Share on Pinterest"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={pinterestIcon}
					alt="Pinterest"
					className="tooltip__share-icon"
				/>
			</a>
		</div>
	);
}
