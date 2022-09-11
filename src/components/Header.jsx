import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
	 <header className='header'>
		<nav className='navbar'>
			<ul className="nav__list">
				<li>
					<Link className="about" to="/">About</Link>
				</li>
				<li>
					<Link className="top-players" to="/TopTeams">Top Teams</Link>
				</li>
				<li>
					<Link className="faceIt" to="/FaceIt">About Face It</Link>
				</li>
			</ul>
		</nav>
	 </header>
  )
}

export default Header