import React, { useEffect } from 'react'
import styles from './User.module.sass'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { getUser } from '../stateManager/actions/actionCreator'

export const User: React.FC = () => {

	const { id } = useParams()
	const dispatch = useDispatch<Dispatch>()

	useEffect(() => {
		if (typeof id === 'string') {
			dispatch(getUser(id))
		}
	}, [])

  return (
	<div className={styles.container}>
		<div className={styles.title}>
			<h1>User {id}</h1>
		</div>
	</div>
  )
}
