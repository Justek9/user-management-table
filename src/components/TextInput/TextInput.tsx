import { User } from '../../utils/typesAndHelperVariables'

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
		/>
	)
}

export default TextInput
