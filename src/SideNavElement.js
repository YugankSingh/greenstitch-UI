import React from "react"
import { useState } from "react"

function SideNavElement({ label, pagesList, labelLogo }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="sidenav-element">
			<p
				className="sidenav-element-header"
				onClick={() => {
					setIsOpen(!isOpen)
				}}
			>
				<span className="sidenav-element-header-left">
					<span>
						<img src={labelLogo} alt="" />
					</span>
					{label}
				</span>
				<span className={`${isOpen ? "" : "inverted"}`}>
					<img src="more-button.svg" alt="🔺" />
				</span>
			</p>
			<ul className={`${isOpen ? "" : "hidden"}`}>
				{pagesList.map((page,index) => (
					<a key={index} href={page.href} className={page.current ? `current` : ""}>
						{page.label}
					</a>
				))}
			</ul>
		</div>
	)
}

export default SideNavElement
