import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from './redux/usersReducer'
import UserTable from './UsersTable/UserTable'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch(addUsers({ users: data })))
			.catch(error => {
				console.log('Error fetching users')
			})
	}, [])

	return (
		<div>
			<UserTable />
		</div>
	)
}

export default App
