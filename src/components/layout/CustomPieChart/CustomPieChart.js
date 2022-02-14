import ReactApexChart from 'react-apexcharts';

const CustomPieChart = (props) => {
	const options = {
		chart: {
			type: 'donut',
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
	};

	return (
		<>
			<ReactApexChart options={options} series={props.series} type="donut" />
		</>
	);
};

export default CustomPieChart;
