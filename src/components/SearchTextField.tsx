import Form from 'react-bootstrap/Form'

interface SearchTextFieldProps {
	setSearchTitle: (value: React.SetStateAction<string>) => void;
}

export const SearchTextField = ({setSearchTitle}: SearchTextFieldProps) => {
	return (
		<Form className="d-flex">
			<Form.Control
				type="search"
				placeholder="Title"
				className="me-2"
				aria-label="Search"
				onChange={(e) => setSearchTitle(e.currentTarget.value)}
			/>
		</Form>
	)
}
