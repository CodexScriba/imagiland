"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./FlipBook.module.css";

const FlipBook = () => {
	return (
		<HTMLFlipBook
			width={window.innerWidth}
			height={window.innerHeight}
			size="stretch"
			minWidth={315}
			maxWidth={1000}
			minHeight={420}
			maxHeight={1350}
			maxShadowOpacity={0.5}
			showCover={true}
			mobileScrollSupport={true}
			className={styles.flipbook}
			startPage={0} // Default to the first page
			drawShadow={true} // Draws shadow between pages
			flippingTime={1000} // Time in ms for the page flip
			useMouseEvents={true} // Enable mouse events for flipping
			style={{}} // Optional: Add custom styling
			usePortrait={false}
			startZIndex={0}
			autoSize={true}
			clickEventForward={false}
			swipeDistance={0}
			showPageCorners={false}
			disableFlipByClick={false}
		>
			<div className="demoPage">Page 1</div>
			<div className="demoPage">Page 2</div>
			<div className="demoPage">Page 3</div>
			<div className="demoPage">Page 4</div>
			<div className="demoPage">Page 5</div>
			<div className="demoPage">Page 6</div>
		</HTMLFlipBook>
	);
};

export default FlipBook;
