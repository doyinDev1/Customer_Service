import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
const ScrollableTabsButtonAuto = ({
	value,
	setValue,
	tabLabels,
	// setCandidateLabel,
	// setCourseLabel,
}) => {
	const handleChange = (event, newValue) => {
		setValue(newValue)
		// setCandidateLabel && setCandidateLabel('')
		// setCourseLabel && setCourseLabel('')
	}

	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant={'scrollable'}
				scrollButtons='auto'
				aria-label='scrollable auto tabs example'
				centered={true}>
				{tabLabels.map((label, index) => (
					<Tab 
						key={index}
						label={label}
						style={{
							backgroundColor: value === index && 'var(--color-green)',
							color: value === index && 'var(--color-primary)',
							outline: 'none',
							fontSize: 16,
							fontFamily: 'Montserrat'
						}}
					/>
				))}
			</Tabs>
		</Box>
	)
}

export default ScrollableTabsButtonAuto
