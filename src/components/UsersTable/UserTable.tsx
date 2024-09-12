import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/store'
import { User, tableHead } from '../../utils/typesAndHelperVariables'
import styles from './UsersTable.module.scss'
import { useDispatch } from 'react-redux'
import { addFilters } from '../../redux/filtersReducer'
import { filterTextIncludes } from '../../utils/helperFunctions'
import TextInput from '../TextInput/TextInput'

const UserTable = () => {
	const dispatch = useDispatch()
	const [filters, setFilters] = useState<User>({
		name: '',
		username: '',
		email: '',
		phone: '',
	})

	const users = useAppSelector(state => state.users.users).filter(
		el =>
			filterTextIncludes(el, 'name', filters) &&
			filterTextIncludes(el, 'username', filters) &&
			filterTextIncludes(el, 'email', filters) &&
			filterTextIncludes(el, 'phone', filters)
	)
	useEffect(() => {
		dispatch(addFilters(filters))
	}, [filters])

	return (
		<table className={styles.table}>
			<button
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
				{users.map((user, id) => {
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
	)
}

export default UserTable
