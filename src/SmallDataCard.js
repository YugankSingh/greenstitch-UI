import React from "react"

function SmallDataCard({ cardHeader, emmissions, lastEmmissions }) {
	const emmissionDifference = emmissions - lastEmmissions
	const emmissionDifferencePercent =
		(emmissionDifference * 100) / lastEmmissions
	let dataChangeClass
	if (emmissionDifference < 0.5 && emmissionDifference > -0.5)
		dataChangeClass = "grey"
	else if (emmissionDifference > 0) dataChangeClass = "red"
	else dataChangeClass = "green"

	return (
		<div className="small-card">
			<p className="card-header">{cardHeader}</p>
			<p className="card-data">{emmissions.toLocaleString()}</p>
			<p className="card-co2">
				CO<sub>2</sub> Emission
			</p>
			<p className={"card-data-change " + dataChangeClass}>
				{emmissionDifferencePercent.toFixed(2)}%
			</p>
		</div>
	)
}

export default SmallDataCard
