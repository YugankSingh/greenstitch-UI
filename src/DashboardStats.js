import React, { useEffect, useState } from "react"
import "./DashboardStats.css"
import BarGraph from "./BarGraph"
import SmallDataCard from "./SmallDataCard"
import PieGraph from "./PieGraph"
import db from "./db"
import { doc, onSnapshot } from "firebase/firestore"

const data = [
	{
		name: "Jan",
		spinning: 1,
		transportation: 1,
		carding: 1,
		thermal: 1,
	},
	{
		name: "Feb",
		spinning: 1,
		transportation: 1,
		carding: 1,
		thermal: 1,
	},
	{
		name: "Mar",
		spinning: 1,
		transportation: 1,
		carding: 1,
		thermal: 1,
	},
	{
		name: "Apr",
		spinning: 1,
		transportation: 1,
		carding: 1,
		thermal: 1,
	},
	{
		name: "May",
		spinning: 1,
		transportation: 1,
		carding: 1,
		thermal: 1,
	},
	{
		name: "Jun",
		spinning: 1,
		transportation: 1,
		carding: 1,
		thermal: 1,
	},
]

const sources = [
	{
		id: "spinning",
		color: "#57cc78",
		name: "Spinning",
		value: 1,
	},
	{
		id: "transportation",
		color: "#55dbdb",
		name: "Transportation",
		value: 1,
	},
	{
		id: "carding",
		color: "#2bb7d6",
		name: "Carding",
		value: 1,
	},
	{
		id: "thermal",
		color: "#fec102",
		name: "Heating and Cooling",
		value: 1,
	},
]

function DashboardStats(props) {
	const [emission, setEmission] = useState({})
	useEffect(() => {
		onSnapshot(doc(db, "emissions", "months"), doc => {
			console.log(" data: ", doc.data())
		})
	})
	let sum = 0
	sources.forEach(source => (sum += source.value))

	let newSources = sources.map(el => {
		return { ...el, fill: el.color, percentage: (el.value * 100) / sum }
	})

	return (
		<div id="dashboard-stats">
			<div id="small-cards">
				<SmallDataCard
					lastEmmissions={2045342}
					emmissions={1345342}
					cardHeader={"Carbon FootPrint"}
				/>
				<SmallDataCard
					lastEmmissions={1345342}
					emmissions={1345342}
					cardHeader={"Emmission By Spinning"}
				/>
				<SmallDataCard
					lastEmmissions={1345342}
					emmissions={2545342}
					cardHeader={"Emmission By Transportation"}
				/>
				<SmallDataCard
					lastEmmissions={1335242}
					emmissions={1335342}
					cardHeader={"Emmission By Carding"}
				/>
			</div>
			<div id="big-cards">
				<div className="big-card bar-graph">
					<div className="bar-graph-header">
						<h1>Carbon Footprint</h1>
						<div className="legend">
							{sources.map(source => (
								<span key={source.id}>
									<span
										className="legend-mark"
										style={{ backgroundColor: source.color }}
									></span>
									{source.name}
								</span>
							))}
						</div>
					</div>
					<div className="bar-graph-chart">
						<BarGraph data={data} sources={sources} />
					</div>
				</div>
				<div className="big-card pie-graph">
					<h1>Top emissions by type</h1>
					<div className="pie-graph-chart">
						<PieGraph sources={newSources} />
					</div>
					<div className="legend">
						{newSources.map(source => (
							<span key={source.id} className="legend-element">
								<div>
									<span
										className="legend-mark"
										style={{ backgroundColor: source.color }}
									></span>
									<span>{source.name}</span>
								</div>
								<span>{Math.trunc(source.percentage)}%</span>
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardStats
