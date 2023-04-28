import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"

import React from "react"

function BarGraph({ data, sources }) {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				{sources.map(source => (
					<Bar
						dataKey={source.id}
						key={source.id}
						stackId="a"
						fill={source.color}
					/>
				))}
			</BarChart>
		</ResponsiveContainer>
	)
}

export default BarGraph
