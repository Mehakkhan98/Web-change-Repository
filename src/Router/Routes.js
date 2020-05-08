
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Front from '../OutSidehome/Frontpage/FrontPage';
import Login from '../Auth/Login/Login';
import PageNotFound from '../Auth/PageNotFound/PageNotFound'
import Register from '../Auth/Register/Register';
import About from '../OutSidehome/Aboutus/About'
import Header from '../Component/Header/Header';



 export default class Routes extends React.Component{
     render()
     {
         ////// yahan sab routes create krne hain 
         return(
             <div>
            
            <Router>
            <Header/>
            <Route exact path="/" component={Front} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/PageNotFound" component={PageNotFound} />
            <Route path="/About" component={About} />
            
         
        </Router>
        
        </div>
      
         )
     }
 
 }
