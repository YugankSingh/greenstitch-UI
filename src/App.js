import "./App.css"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import DashboardStats from "./DashboardStats"

function App() {
	return (
		<div className="App">
			<div className="dashboard">
				<SideNav className="dashboard-left" />
				<div className="dashboard-right">
					<TopNav />
					<DashboardStats />
				</div>
			</div>
		</div>
	)
}

export default App
