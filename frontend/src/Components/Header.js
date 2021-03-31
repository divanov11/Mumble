import React, {useState} from 'react'
import '../App.css';
import '../Css/HeaderBar.css';
import { Link } from 'react-router-dom'
import userData from '../data/users';


function Header() {
    let user = userData.find((u) => u.id === '1');
    console.log('User:', user)
    let [nav, setNav] = useState('closed')

    let toggleNav = () =>{
        let navWrapper = document.getElementById('user--navigation')
        
        if(nav === 'closed'){
            navWrapper.style.display = 'block'
            setNav('open') 
        }else{
            navWrapper.style.display = 'none'
            setNav('closed')
        }
    }

    return (
        <div id="header">

            <div id="logo">
                <Link to={'/'}>
                    <h3>MUMBLE</h3>
                </Link>
            </div>

            <div id="nav-wrapper">
                <i className="fas fa-bell nav-item nav-icon"></i>
                {/* This will eventually be drop down list with options like settings, porfile, logout, etc */}
                    <img id="nav-toggle-icon" onClick={toggleNav} alt="img-description" className="avatar avatar--sm nav-item" src={user.profile_pic} />
                
            </div>

            <div className="card" id="user--navigation">
                <div className="user-navigation--item">
                    <p>(ICON)</p>
                    <Link to={''}>Notifications</Link>
                </div>
                <div className="user-navigation--item">
                    <p>(ICON)</p>
                    <Link to={`/profile/${user.username}`}>Profile</Link>
                </div>

                <div className="user-navigation--item">
                    <p>(ICON)</p>
                    <Link to={'/settings'}>Settings</Link>
                </div>

                <div className="user-navigation--item">
                    <p>(ICON)</p>
                    <Link to={'/logout'}>Logout</Link>
                </div>
             
            </div>
        </div>
    )
}

export default Header
