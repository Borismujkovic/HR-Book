import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom"

const Header = (props) => {
    

    const deleteToken = () => {
        props.setToken('')
        localStorage.clear()
      }


    return (
        <div id="header">
            <Link to='/admin/home-page'><img src="https://iconape.com/wp-content/png_logo_vector/hr-lab-logo.png" alt="HR Lab logo" /></Link>
            <div>
            <button className='btnLogout' onClick={props.changeTheme}>Switch Theme</button>
            <button className='btnLogout' onClick={() => {
                deleteToken()
                props.deleteData()
            }
            }>Logout</button>
            </div>

        </div>
    )
}

export default Header