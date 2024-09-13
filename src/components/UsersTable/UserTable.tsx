import { useEffect, useState } from 'react'
import { User, tableHead } from '../../utils/typesAndHelperVariables'
import styles from './UsersTable.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addFilters } from '../../redux/filtersReducer'
import TextInput from '../TextInput/TextInput'
import { getFilteredUsers } from '../../redux/usersReducer'

const UserTable = () => {
	const dispatch = useDispatch()
	const [filters, setFilters] = useState<User>({
		name: '',
		username: '',
		email: '',
		phone: '',
	})

	const filteredUsers = useSelector(getFilteredUsers)

	useEffect(() => {
		dispatch(addFilters(filters))
	}, [filters])

	return (
		<>
			<button
				className={styles.clearFiltersBtn}
				onClick={() =>
					setFilters({
						name: '',
						username: '',
						email: '',
						phone: '',
					})
				}>
				Clear filters
			</button>
			<table className={styles.table}>
				<thead>
					<tr className={styles.head}>
						<th>{tableHead.name}</th>
						<th>{tableHead.username}</th>
						<th>{tableHead.email}</th>
						<th>{tableHead.phone}</th>
					</tr>
					<tr className={styles.head}>
						<th>
							<TextInput name='name' value={filters.name} setFilters={setFilters} />
						</th>
						<th>
							<TextInput name='username' value={filters.username} setFilters={setFilters} />
						</th>
						<th>
							<TextInput name='email' value={filters.email} setFilters={setFilters} />
						</th>
						<th>
							<TextInput name='phone' value={filters.phone} setFilters={setFilters} />
						</th>
					</tr>
				</thead>
				<tbody>
					{filteredUsers.map((user: User, id: number) => {
						return (
							<tr key={user.name + id}>
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
		</>
	)
}

export default UserTable
