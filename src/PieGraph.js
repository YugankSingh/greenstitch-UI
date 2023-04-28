import React from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts"

function PieGraph({ sources }) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width={800} height={400}>
				<Pie
					data={sources}
					innerRadius={"60%"}
					fill="#8884d8"
					paddingAngle={0}
					dataKey="value"
				>
					{sources.map((source, index) => (
						<Cell key={`cell-${index}`} fill={source.color || "#eee"} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	)
}

export default PieGraph
