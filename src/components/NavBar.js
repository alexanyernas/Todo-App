import React from 'react';

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            
            <a className="navbar-brand" href="https://github.com/alexanyernas/" rel="noreferrer" target="_BLANK">Mis Tareas App</a>
       
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
       
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              
                <div className="navbar-nav">
                    <a className="nav-link" href="https://twitter.com/alexanyernas/" rel="noreferrer" target="_BLANK" ><i className="bi bi-twitter mr-1"></i>Twitter</a>
                    <a className="nav-link" href="https://instagram.com/alexanyernas/" rel="noreferrer" target="_BLANK"><i className="bi bi-instagram mr-1"></i>Instagram</a>
                    <a className="nav-link" href="https://linkedin.com/in/alexanyernas/" rel="noreferrer" target="_BLANK"><i className="bi bi-linkedin mr-1"></i>LinkedIn</a>
                </div>
           
            </div>
       
        </nav>
    )
}

export default NavBar;