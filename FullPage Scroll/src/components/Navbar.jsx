import React from 'react'

export const Navbar = () => {
  return (
        <>
            <nav class="container navbar navbar-expand-sm navbar-light py-md-3 shadow fixed-top rounded-bottom">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li class="nav-item mx-3">
                                <a href="#home" className='nav-link'>Home</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a href="#about" className='nav-link'>About Me</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a href="#projects" className='nav-link'>Projects</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a href="#contact" className='nav-link'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
  )
}

export default Navbar
