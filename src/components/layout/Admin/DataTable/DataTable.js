import classes from './DataTable.module.css';
import { Table } from 'react-bootstrap';

const DataTable = () => {
	return (
		<div className={classes.DataTable}>
			<div className={classes.DataTableHeader}>
				<h3>All Candidates</h3>

				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search by name, employee id"
					className={classes.SearchInput}
				/>
			</div>
			<Table responsive className={classes.Table}>
				<thead className={classes.TableHead}>
					<tr>
						<th>Name</th>
						<th>Employee ID</th>
						<th>Completed</th>
						<th>Enrolled</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody className={classes.TableBody}>
					<tr>
						<td>Daniel Moro</td>
						<td>12345XYZ</td>
						<td>0%</td>
						<td>1/2</td>
						<td>Not Started</td>
					</tr>
					<tr>
						<td>Zielk Amon</td>
						<td>23745XYZ</td>
						<td>50%</td>
						<td>1/2</td>
						<td>Ongoing</td>
					</tr>
					<tr>
						<td>Toph Zeke</td>
						<td>12905XYZ</td>
						<td>50%</td>
						<td>1/2</td>
						<td>Ongoing</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default DataTable;
