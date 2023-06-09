import { useState } from 'react'
import styles from './CommentsList.module.sass'
import Accordion from 'react-bootstrap/Accordion'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { actionGetComments } from '../stateManager/actions/actionCreator';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Card from 'react-bootstrap/Card'

interface CommentsListProps {
	postId: number;
}

export const CommentsList = ({ postId }: CommentsListProps) => {

	const [commentsOpen, setCommentsOpen] = useState(false)
	const dispatch = useDispatch <Dispatch>()
	const { posts } = useTypedSelector(store => store.post) 

	const handleComments = (postId: number) => {
		setCommentsOpen(prev => !prev)
		if (!commentsOpen && posts[postId - 1].comments === undefined){
			dispatch(actionGetComments(postId))
		}
	}

	return (
		<Accordion>
			<Accordion.Header onClick={() => handleComments(postId)}>
				Comments
			</Accordion.Header>
				<Accordion.Body>
					{posts[posts.findIndex(post => post.id === postId)].comments !== undefined ? posts[posts.findIndex(post => post.id === postId)].comments.map((comment) => (
						<Card key={comment.id} className={styles.comment}>
							<Card.Title className={styles.comment_title}><strong>{comment.email}</strong></Card.Title>
							<Card.Body>{comment.body}</Card.Body>
						</Card>
					)) 
					: 
					<></>}
				</Accordion.Body>
		</Accordion>
	)
}
