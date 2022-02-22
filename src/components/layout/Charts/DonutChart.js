import ReactApexChart from 'react-apexcharts';

const DonutChart = ({ title, labels = [], series = [], colors = [], fileDownloadName }) => {
	const data = {
		series: series,
		options: {
			chart: {
				type: 'donut',
				toolbar: {
					show: true,
					offsetX: 0,
					offsetY: 0,
					tools: {
						download: true,
					},
					export: {
						csv: {
							filename: fileDownloadName,
							columnDelimiter: ',',
							headerCategory: 'category',
							headerValue: 'value',
							dateFormatter(timestamp) {
								return new Date(timestamp).toDateString();
							},
						},
						svg: {
							filename: fileDownloadName,
						},
						png: {
							filename: fileDownloadName,
						},
					},
					autoSelected: 'zoom',
				},
			},
			labels: labels,
			colors: colors,
			legend: {
				position: 'bottom',
				fontSize: '15px',
				fontFamily: 'Montserrat',
				fontWeight: 600,
			},
			plotOptions: {
				pie: {
					donut: {
						size: '65%',
						labels: {
							show: true,
							name: {
								show: true,
								fontSize: '16px',
								fontFamily: 'Montserrat',
								fontWeight: 500,
							},
							value: {
								show: true,
								fontSize: '16px',
								fontFamily: 'Montserrat',
								fontWeight: 600,
							},
							total: {
								show: true,
								fontSize: '16px',
								fontFamily: 'Montserrat',
								fontWeight: 500,
								color: 'black',
							},
						},
					},
				},
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
					color: '#555',
				}}
			>
				{title.toUpperCase()}
			</p>
			<ReactApexChart
				options={data.options}
				series={data.series}
				type="donut"
				height={350}
				width={300}
			/>
		</div>
	);
};

export default DonutChart;
