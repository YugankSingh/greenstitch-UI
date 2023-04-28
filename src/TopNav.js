import React from "react"
import "./TopNav.css"

function TopNav(props) {
	return (
		<div id="topnav">
			<div className="search">
				<img src="/search.svg" alt="" />
				<input type="text" placeholder="Search..." />
			</div>
			<img src="/notifications.svg" alt="" />
			<img src="/calendar.svg" alt="" />
			<img src="/menu.svg" alt="" />
			<img src="/avatar.png" alt="" />
		</div>
	)
}

export default TopNav
