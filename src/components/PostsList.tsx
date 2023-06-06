import React from 'react'
import styles from './PostsList.module.sass'
import { Post } from '../types/post'
import { Link } from 'react-router-dom'
import Avatar from './avatar.svg'
import { CommentsList } from './CommentsList'

interface PostsListProps {
	posts: Post[]
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
		<div className={styles.posts}>
			{posts.map(post => (
				<div className={styles.post} key={post.id}>
					<div className={styles.post_content}>
						<div>
							<div className={styles.post_title}><h4>{post.title}</h4></div>
							<div className={styles.post_body}><p>{post.body}</p></div>
						</div>
						<div className={styles.post_avatar}>
							<Link to={`/user/${post.userId}`}>
								<img src={Avatar} alt='avatar' height={100} />
							</Link>
						</div>
					</div>
					<CommentsList postId={post.id} />
				</div>
			))}
		</div>
	)
}
