import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// import classes from './styles.module.css'
import useWindowDimensions from '../../UseWindowSize/UseWindowSize';

const ScrollableTabsButtonAuto = ({ value, setValue, tabLabels, center }) => {
	const { width } = useWindowDimensions();
	const handleChange = (event, newValue) => {
		setValue(newValue);
		localStorage.setItem('reportView', newValue);
	};

	return (
		<Box
			sx={{
				// width: '98.5%',
				// margin: '0 auto',
				bgcolor: 'background.paper',
			}}
		>
			<Tabs
				value={value}
				onChange={handleChange}
				variant={width < 768 && 'scrollable'}
				// variant='scrollable'
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
				centered={width < 768 || !center ? false : true}
			>
				{tabLabels.map((label, index) => (
					<Tab
						key={index}
						label={label}
						style={{
							backgroundColor: value === index && 'var(--color-primary)',
							color: value === index && 'white',
							outline: 'none',
							padding: width > 768 && '3px 40px',
							fontSize: width < 768 && '12px',
						}}
					/>
				))}
			</Tabs>
		</Box>
	);
};

export default ScrollableTabsButtonAuto;
