import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component{
    render(){
        return(
            <div className="container">
            
        <div className="row">
        
            <div className="col-md-4 col-md-offset-4">
                <form id="signup" className="well well-lg"name="signup" method="post" action="/signup">
                    <div className="form-group">
                        <label className="label-form" for="email">Correo electrónico</label>
                        <input className="form-control" name="email" type="email" />
                    </div>
                    <div className="form-group">
                        <label for="firstname">Nombre</label>
                        <input className="form-control" name="firstname" type="text" />
                    </div>
                    <div className="form-group">
                        <label for="lastname">Apellido</label>
                        <input className="form-control" name="lastname" type="text" />
                    </div>
                    <div className="form-group">
                        <label for="password">Contraseña</label>
                        <input className="form-control" name="password" type="password" />
                    </div>
                    <div className="form-group">
                    <Link to='/dashboard'><button className="btn btn-primary" >Registrar</button></Link>
                        
                         {/* <input className="btn btn-primary" type="submit" value="Registrar" /> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default SignUp;