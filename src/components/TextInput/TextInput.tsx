import styles from './TextInput.module.scss'

type TextInputProps = {
	name: string
	value: string
	setFilters: (callback: (prev: any) => any) => void
}

const TextInput: React.FC<TextInputProps> = ({ name, value, setFilters }) => {
	return (
		<input
			id={name}
			type='text'
			placeholder={`Search by ${name}`}
			value={value}
			onChange={e => {
				setFilters(prev => {
					return { ...prev, [name]: e.target.value }
				})
			}}
			className={styles.inputField}
		/>
	)
}

export default TextInput
