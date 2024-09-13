import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from './redux/usersReducer'
import UserTable from './components/UsersTable/UserTable'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import { loadingStates } from './utils/typesAndHelperVariables'
import styles from './App.module.scss'

function App() {
	const [loadingState, setLoadingState] = useState(loadingStates.loading)
	const dispatch = useDispatch()

	useEffect(() => {
		setLoadingState(loadingStates.loading)
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				dispatch(addUsers({ users: data }))
				setLoadingState(loadingStates.success)
			})
			.catch(error => {
				console.log('Error fetching users')
				setLoadingState(loadingStates.error)
			})
	}, [])

	return (
		<section>
			<h2 className={styles.header}>Users table:</h2>
			{loadingState === loadingStates.loading && <LoadingSpinner />}
			{loadingState === loadingStates.success && <UserTable />}
			{loadingState === loadingStates.error && <p>Error fetching data....</p>}
		</section>
	)
}

export default App
