import React from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedColumns = ({
	title,
	colors,
	first_attempt = [],
	multiple_attempt = [],
	courseModuleEngagementLabels = [],
}) => {
	const data = {
		series: [
			{
				name: 'First Attempt',
				data: first_attempt,
			},
			{
				name: 'Multiple Attempts',
				data: multiple_attempt,
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
				stacked: true,
			},
			plotOptions: {
				bar: {
					horizontal: false,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff'],
			},
			colors: colors,
			xaxis: {
				categories: courseModuleEngagementLabels,
				fontSize: '12px',
				fontFamily: 'Montserrat',
			},
			yaxis: {
				title: {
					text: undefined,
				},
				fontSize: '16px',
				fontFamily: 'Montserrat',
			},
			tooltip: {
				x: {
					formatter: function (val) {
						return val.split('-')[0] + 'odule ' + val.split('-')[1];
					},
				},
			},
			fill: {
				opacity: 1,
			},
			legend: {
				position: 'bottom',
				fontSize: '15px',
				fontFamily: 'Montserrat',
				fontWeight: 600,

				horizontalAlign: 'left',
				offsetX: 40,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 250,
							height: 300,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	};

	const style = {
		display: 'grid',
		placeItems: 'center',
		flexGrow: '1',
		padding: '0 5px',
	};

	return (
		<div id="chart" style={style}>
			<p
				style={{
					fontFamily: 'Montserrat',
					fontSize: '14px',
					fontWeight: '600',
					color: '#777',
				}}
			>
				{title.toUpperCase()}
			</p>
			<ReactApexChart
				options={data?.options}
				series={data?.series}
				type="bar"
				height={330}
				width={350}
			/>
		</div>
	);
};

export default StackedColumns;
