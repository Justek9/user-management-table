import { useAppSelctor } from '../redux/store'
import { tableHead } from '../typesAndHelperVariables'
import styles from './UsersTable.module.scss'

const UserTable = () => {
	const users = useAppSelctor(state => state.users.users)

	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.head}>
					<th>{tableHead.name}</th>
					<th>{tableHead.username}</th>
					<th>{tableHead.email}</th>
					<th>{tableHead.phone}</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, id) => {
					return (
						<tr>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
						</tr>
					)
				})}
			</tbody>
			<tfoot>
				<tr></tr>
			</tfoot>
		</table>
	)
}

export default UserTable
