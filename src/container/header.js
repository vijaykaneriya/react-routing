import React from 'react';
import {Link} from 'react-router-dom';



class Header extends React.Component {
    render() {
        return (
            <div className="bg-white border-bottom shadow-sm mb-3">
                <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4">
                        <h5 className="my-0 mr-md-auto font-weight-normal">Helios Solutions</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-dark" to="/">Home</Link>
                            <Link className="p-2 text-dark" to="/users">Users</Link>
                            <Link className="p-2 text-dark" to="/Contact">Contact</Link>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;