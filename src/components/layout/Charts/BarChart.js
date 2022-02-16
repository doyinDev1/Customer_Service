import ReactApexChart from 'react-apexcharts'

const Bars = ({
	title,
	courseEngagementData = [],
	courseModuleEngagementLabels = [],
	fileDownloadName,
}) => {
	const data = {
		series: [
			{
				// data: [40, 43, 80, 70],
				data: courseEngagementData,
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
				width: 200,
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
								return new Date(timestamp).toDateString()
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
			// title: {
			// 	text: title,
			// 	fontFamily: 'Nunito',
			// 	fontSize: '14px',
			// 	fontWeight: 600,
			// 	color: '#777',
			// },
			colors: '#002049',
			plotOptions: {
				bar: {
					borderRadius: 5,
					horizontal: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			legend: {
				position: 'bottom',
				fontSize: '16px',
				fontFamily: 'Nunito',
				fontWeight: 600,
				offsetX: -10,
				offsetY: 0,
			},
			xaxis: {
				// categories: ['Module One', 'Module Two', 'Module Three', 'Module Four'],
				categories: courseModuleEngagementLabels,
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
							height: 250,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	}

	const style = {
		display: 'grid',
		placeItems: 'center',
		flexGrow: '1',
		padding: '0 5px',
	}

	return (
		<div id='chart' style={style}>
			<p
				style={{
					fontFamily: 'Nunito',
					fontSize: '14px',
					fontWeight: '600',
					color: '#555',
				}}>
				{title.toUpperCase()}
			</p>
			<ReactApexChart
				options={data?.options}
				series={data?.series}
				type='bar'
				height={300}
				width={350}
			/>
		</div>
	)
}

export default Bars
