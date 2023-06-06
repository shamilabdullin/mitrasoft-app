import React from 'react'
import styles from './CommentsList.module.sass'
import Accordion from 'react-bootstrap/Accordion'
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { actionGetComments } from '../stateManager/actions/actionCreator';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface CommentsListProps {
	postId: number;
}

export const CommentsList = ({ postId }: CommentsListProps) => {

	const dispatch = useDispatch <Dispatch>()
	const { comments } = useTypedSelector(store => store.comment) 

	const handleComments = (postId: number) => {
		dispatch(actionGetComments(postId))
	}

	return (
		<Accordion>
			<Accordion.Header onClick={() => handleComments(postId)}>
				Comments
			</Accordion.Header>
			<Accordion.Body>
				{comments.map((comment) => (
					<>
						<div><strong>{comment.email}</strong></div>
						<div>{comment.body}</div>
					</>
				))}
			</Accordion.Body>
		</Accordion>
	)
}
