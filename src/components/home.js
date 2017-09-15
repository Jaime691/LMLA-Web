import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import '../style/home.css'

const Home = () => (
    <div className="container">  
    <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <div className="centerImg">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul className="list-group list-unstyled">
                <li className="list-group-item li_item">
                    <Link to='/signin'>Iniciar sesión</Link>
                </li>
                <li className="list-group-item li_item">
                    <Link to='/signup'>Registrarse</Link>         
                </li>
                <li className="unstyled">
                    <Link to='/passwordreset'>Olvidaste tu contraseña?</Link> 
                </li>
            </ul>
        </div>
    </div>
</div>

  

)

export default Home