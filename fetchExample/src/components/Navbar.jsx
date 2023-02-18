import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {

	const { keyword, method } = props

	const Navigate = useNavigate()

	const handleChange = (e) => {
		Navigate("/search")
		method(e.target.value)
	}

	return (
		<>
			<nav className='d-flex navbar navbar-light bg-light py-3 shadow fixed-top rounded-bottom justify-content-evenly'>
				<Link to='/' className='link text-dark'>
					<h5 className='mt-2'>Movies DB</h5>
				</Link>
				<form className="d-flex" role="search">
					<input className="form-control" type="search" placeholder="Search" aria-label="Search" value={keyword} onChange={handleChange} />
				</form>
			</nav>
		</>
	)
}

export default Navbar