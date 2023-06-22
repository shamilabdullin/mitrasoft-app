import Card from 'react-bootstrap/Card'
import { User } from '../types/user';

interface UserCardProps {
	user: User;
}

export const UserCard = ({user}: UserCardProps) => {
	return (
		<Card style={{'width' : '50%', 'margin': '0 auto'}}>
			<Card.Body style={{'margin' : '0 auto'}}>
				<div style={{'width' : '100%'}}>
					<p><strong>Id:</strong> {user.id}</p>
					<p><strong>Name:</strong> {user.name}</p>
					<p><strong>Email:</strong> {user.email}</p>
					<p><strong>Phone:</strong> {user.phone}</p>
					<p><strong>Website:</strong> {user.website}</p>
					<p><strong>Address:</strong> {user.address.suite.slice(5)} {user.address.street}, {user.address.city}</p>
					<p><strong>Company:</strong> {user.company.name}</p>
				</div>
			</Card.Body>
		</Card>
	)
}
