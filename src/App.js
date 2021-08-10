import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home/home.compoents';

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
       <div className="container d-flex">

         <a href="w" className="navbar-brand">Home</a>

         <div className="collapse navbar-collapse">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <a href="w" className="nav-link">
                 Login
               </a>
             </li>

             <li className="nav-item">
               <a href="w" className="nav-link">
                Sign-Up
               </a>
             </li>

           </ul>

         </div>










       </div>
     </nav>
     <div className="auth-wrapper">
       <div className="auth-inner">
         <Home/>

       </div>
     </div>
    </div>
  );
}

export default App;
