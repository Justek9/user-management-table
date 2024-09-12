import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from './redux/usersReducer'
import UserTable from './components/UsersTable/UserTable'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import { loadingSstates } from './utils/typesAndHelperVariables'

function App() {
	const [loadingState, setLoadingState] = useState(loadingSstates.loading)
	const dispatch = useDispatch()

	useEffect(() => {
		setLoadingState(loadingSstates.loading)
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				dispatch(addUsers({ users: data }))
				setLoadingState(loadingSstates.success)
			})
			.catch(error => {
				console.log('Error fetching users')
				setLoadingState(loadingSstates.error)
			})
	}, [])

	return (
		<div>
			<p>Users table:</p>
			{loadingState === loadingSstates.loading && <LoadingSpinner />}
			{loadingState === loadingSstates.success && <UserTable />}
			{loadingState === loadingSstates.error && <p>Error fetching data....</p>}
		</div>
	)
}

export default App
