import Pagination from 'react-bootstrap/Pagination'
import styles from './MyPagination.module.sass'
import { PostState } from '../types/post';

interface MyPaginationProps {
	pages: number[];
	post: PostState;
	handlePagination: (page: number) => void;
}

export const MyPagination = ({pages, post, handlePagination}: MyPaginationProps) => {
	return (
		<Pagination className={styles.pagination}>
			{pages.map((page) => (
				<Pagination.Item key={page.toString()} active={page === post.postsPage} onClick={() => handlePagination(page)}>
					{page}
				</Pagination.Item>
			))}
		</Pagination>
	)
}
