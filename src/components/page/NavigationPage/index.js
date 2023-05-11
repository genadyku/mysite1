import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signout } from '../../../actions/auth'

const Navigation = () => {
	const store = useSelector((state) => ({
		fullname: state.auth.fullname,
		role: state.auth.role,
	}))

	const dispatch = useDispatch()

	return (
		<header>
			<ul className='site-nav'>
				<h4 className='logo'>
					<Link to='/'>Главная</Link>
				</h4>
				<li>
					<Link to='/articles'>Статьи</Link>
				</li>
				<li>
					<Link to='/lessons'>Уроки</Link>
				</li>
				{store.role === 'Admin' || store.role === 'User' ? (
					<li>
						<Link to='/reactarticles'>React</Link>
					</li>
				) : (
					<div />
				)}
				{store.role === 'Admin' ? (
					<div className='dropdown dropdown2'>
						<h4 className='dropbtn'>Админка</h4>
						<div className='dropdown-content'>
							<Link to='/editArticles'>Статьи</Link>
							<Link to='/editReactArticles'>Статьи React</Link>
						</div>
					</div>
				) : (
					<div />
				)}
				<li>
					<span className='user-name'>{store.fullname} </span>
				</li>
				<li>
					<Link to='/login'>Вход</Link>
				</li>
				<li>
					<Link to='/signup'>Регистрация</Link>
				</li>
				<li>
					{store.fullname && (
						<Link
							className='nav-link'
							to='/'
							onClick={() => dispatch(signout())}
						>
							Выход
						</Link>
					)}
				</li>
			</ul>
		</header>
	)
}

export default Navigation
