import Tooltip from "./Tooltip";
import "./BlogPreview.css";
import { useState } from "react";
import ShareIcon from "../assets/icons/icon-share.svg";

export default function BlogPreview({ content, author }) {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);
	function toggleTooltip() {
		setIsTooltipVisible((prev) => !prev);
	}
	return (
		<div className="blog-preview">
			<div className="blog-preview__img-box">
				<img
					className="blog-preview__img"
					src={content.previewImg}
					alt="Drawers furniture preview"
				/>
			</div>
			<div className="blog-preview__content-box">
				<h2 className="blog-preview__title">{content.title}</h2>
				<p className="blog-preview__text">{content.text}</p>
				<div className="blog-preview__footer">
					<div className="blog-preview__author author">
						<img
							src={author.photo}
							alt={author.name}
							className="author__photo"
						/>
						<div className="author__text-box">
							<p className="author__name">{author.name}</p>
							<p className="author__date">{author.date}</p>
						</div>
					</div>
					{isTooltipVisible && <Tooltip />}
					<button
						onClick={toggleTooltip}
						className={
							isTooltipVisible
								? "blog-preview__share-btn blog-preview__share-btn--active"
								: "blog-preview__share-btn"
						}
					>
						<img
							src={ShareIcon}
							alt="Share"
							className="blog-preview__share-btn-icon"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}
