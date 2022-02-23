import ReactApexChart from 'react-apexcharts';

const GroupedBars = ({ title, candidateCourseData = [], fileDownloadName, colors }) => {
	const data = {
		series: [
			{
				name: 'Candidate Score',
				// data: [44, 55, 41, 64, 22, 43, 21],
				data: candidateCourseData?.map((n) => n.candidateSummary[0].candidateScore),
			},
			{
				name: 'National Average',
				// data: [53, 32, 33, 52, 13, 44, 32],
				data: candidateCourseData?.map((n) => n.candidateSummary[1].nationalAverage),
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
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
							// dateFormatter(timestamp) {
							// 	return new Date(timestamp).toDateString()
							// },
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
			// colors: ['#002049', '#f17e3b'],
			colors: colors,
			plotOptions: {
				bar: {
					borderRadius: 5,
					horizontal: false,
					dataLabels: {
						position: 'top',
					},
				},
			},
			dataLabels: {
				enabled: true,
				offsetX: -6,
				style: {
					fontSize: '15px',
					fontFamily: 'Montserrat',
					fontWeight: 400,
					colors: ['#fff'],
				},
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['#fff'],
			},
			tooltip: {
				shared: true,
				intersect: false,
			},
			xaxis: {
				categories: candidateCourseData?.map((n) => n.course_name),
				fontSize: '16px',
				fontFamily: 'Montserrat',
			},
			legend: {
				position: 'bottom',
				fontSize: '15px',
				fontFamily: 'Montserrat',
				fontWeight: 700,
				offsetX: -10,
				offsetY: 0,
			},
			fill: {
				opacity: 1,
			},
		},
	};

	const style = {
		width: '100%',
		margin: '0 auto',
		minWidth:
			candidateCourseData && candidateCourseData?.length <= 2
				? '300px'
				: candidateCourseData &&
				  candidateCourseData?.length >= 3 &&
				  candidateCourseData &&
				  candidateCourseData?.length <= 5
				? '1200px'
				: candidateCourseData &&
				  candidateCourseData?.length >= 6 &&
				  candidateCourseData &&
				  candidateCourseData?.length <= 8
				? '1800px'
				: '3000px',
		// padding: '0 5px',
	};

	return (
		<div id="chart" style={style}>
			<p
				style={{
					textAlign: 'center',
					fontFamily: 'Montserrat',
					fontSize: '14px',
					fontWeight: '600',
					color: '#555',
				}}
			>
				{title.toUpperCase()}
			</p>
			<ReactApexChart options={data.options} series={data.series} type="bar" height={300} />
		</div>
	);
};

export default GroupedBars;
