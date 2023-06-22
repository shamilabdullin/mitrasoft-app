import Dropdown from 'react-bootstrap/Dropdown'

interface SortingButtonProps {
	sort: () => void;
	isSortedByTitle: boolean;
}

export const SortingButton = ({sort, isSortedByTitle}: SortingButtonProps) => {
	return (
		<Dropdown>
			<Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
				Sorting
			</Dropdown.Toggle>
			<Dropdown.Menu variant="dark">
				<Dropdown.Item onClick={() => sort()} active={isSortedByTitle}>
					Sort in order
				</Dropdown.Item>
				<Dropdown.Item onClick={() => sort()} active={!isSortedByTitle}>
					Sort by title
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}
