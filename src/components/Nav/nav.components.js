import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
       <div className="container d-flex">


         <Link href="w" className="navbar-brand"  to={'/'}>Home</Link>

         <div className="collapse navbar-collapse">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link href="w" className="nav-link" to={'/login'}>
                 Login
               </Link>
             </li>

             <li className="nav-item">
               <Link href="w" className="nav-link" to={'/register'}>
                Sign-Up
               </Link>
             </li>

           </ul>

         </div>

       </div>
     </nav>

        )
    }
}