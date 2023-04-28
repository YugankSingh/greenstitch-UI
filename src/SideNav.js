import React from "react"
import "./SideNav.css"
import SideNavElement from "./SideNavElement"

function SideNav(props) {
	return (
		<div id="SideNav">
			<div>
				<img src="/main-logo.png" className="sidenav-logo" />
			</div>
			<div className="sidenav-divider">D A S H B O A R D</div>
			<SideNavElement
				label={"Dashboard"}
				labelLogo="/dashboard.svg"
				pagesList={[
					{ label: "Records", href: "/records", current: true },
					{ label: "Reports", href: "/records", current: false },
					{ label: "Analyse", href: "/records", current: false },
					{ label: "Learn", href: "/records", current: false },
				]}
			/>
			<div className="sidenav-divider">P A G E S</div>

			<SideNavElement
				label={"Help Center"}
				labelLogo="/help-center.svg"
				pagesList={[
					{ label: "Records", href: "/records", current: true },
					{ label: "Learn", href: "/records", current: false },
				]}
			/>
			<SideNavElement
				label={"File Manager"}
				labelLogo="/file-manager.svg"
				pagesList={[
					{ label: "Analyse", href: "/records", current: false },
					{ label: "Learn", href: "/records", current: false },
				]}
			/>
			<div className="help-center"></div>
		</div>
	)
}

export default SideNav
