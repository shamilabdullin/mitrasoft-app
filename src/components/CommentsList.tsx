import React from 'react'
import styles from './CommentsList.module.sass'
import Accordion from 'react-bootstrap/Accordion'

export const CommentsList = () => {
  return (
	<Accordion>
		<Accordion.Header>
			Comments
		</Accordion.Header>
		<Accordion.Body>
			Comment bla bla bla
		</Accordion.Body>
	</Accordion>
  )
}
