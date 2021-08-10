import { BrowserRouter, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Login from './auth/login'
import Register from './auth/register'
import Home from './components/Home/home.compoents';
import Nav from './components/Nav/nav.components';


function App() {
  return (


    <BrowserRouter>
     <div className="App">
      <Nav/>
     <div className="auth-wrapper">
       <div className="auth-inner">

         <switch>
           <Route exact  path="/" component={Home}/>
           <Route exact path="/login" component={Login}/>
           <Route exact path="/register" component={Register}/>
         </switch>
       </div>
     </div>
    </div>
</BrowserRouter>
   
  );
}

export default App;
