import Tooltip from "./Tooltip";
import "./BlogPreview.css";
// import { useState } from "react";

export default function BlogPreview() {
	// const [isTooltipVisible, setIsTooltipVisible] = useState(false);
	return (
		<div className="blog-preview">
			<div className="blog-preview__img-box">
				<img
					className="blog-preview__img"
					src="/images/blog-preview.png"
					alt="Blog preview"
				/>
			</div>
			<div className="blog-preview__content-box">
				<h2 className="blog-preview__title">
					Shift the overall look and feel by adding these wonderful touches to
					furniture in your home
				</h2>
				<p className="blog-preview__text">
					Ever been in a room and felt like something was missing? Perhaps it
					felt slightly bare and uninviting. I've got some simple tips help you
					make any room feel complete.
				</p>
				<div className="blog-preview__footer">
					<div className="blog-preview__author author">
						<img src="" alt="" className="author__photo" />
						<div className="author___text-box">
							<p className="author__name">Michelle Appleton</p>
							<p className="author__date">28 Jun 2020</p>
						</div>
					</div>
					<button className="blog-preview__share-btn">
						<img src="" alt="" className="blog-preview__share-btn-icon" />
					</button>
				</div>
			</div>
		</div>
	);
}
