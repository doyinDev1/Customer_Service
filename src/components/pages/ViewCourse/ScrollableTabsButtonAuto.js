import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'



const ScrollableTabsButtonAuto = ({
	value,
	setValue,
	tabLabels,

}) => {
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<Tabs
				value={value}
				onChange={handleChange}
				variant={'scrollable'}
				scrollButtons='auto'
				aria-label='scrollable auto tabs example'
				>
				{tabLabels.map((label, index) => (
					<Tab
						key={index}
						label={label}
						style={{
							backgroundColor: value === index && 'var(--color-green)',
							color: value === index && 'white',
							outline: 'none',
							fontSize: 16,
							fontFamily: 'Montserrat',
						}}
					/>
				))}
			</Tabs>
		</Box>
	)
}

export default ScrollableTabsButtonAuto


// ssh product testing
// 3 admins and 12 agents