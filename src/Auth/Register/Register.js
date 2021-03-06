import React from 'react';
import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import PasswordField from '../Password/Password';
import '../Register/Register.css';
import axios from 'axios';
export default class extends React.Component{
    state = {
        Name: "",
        Email: "",
        Username: "",
        Password: "",
        ConfirmPassword:"",
        submit:false
      };
 checkname = new RegExp(/^[a-z A-Z]{3,40}$/);
 checkemail =new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)
 checkusername =new RegExp( /^[A-Za-z0-9_]{4,20}$/)
 checkpassword = new RegExp( /^[A-Za-z0-9!@#$%^&*()_]{9,20}$/)
 
       OnSubmit = (event) => {
           this.setState({submit:true})
           if((this.checkname.test(this.state.Name))===true&&
           (this.checkemail.test(this.state.Email))===true&&(this.checkusername.test(this.state.Username))===true&&
           (this.checkpassword.test(this.state.Password))===true&&this.state.Password===this.state.ConfirmPassword){
         
            console.log("this data you can use to store in data base",this.state);

            const newTodo = {
              Name:this.state.Name,
              User_Name:this.state.Username,
               Email: this.state.Email,
              Password: this.state.Password,
             
            };
      
            axios.post('http://localhost:4000/online_tutor_db/Register_New_Admin', newTodo)
            .then(() => console.log("api invoked"))
            .catch(err=>alert(err)); 
           }
       
        event.preventDefault();
      };
    setName=(e)=>{
      this.setState({Name:e.target.value})
    }
    setEmail=(e)=>{
        this.setState({Email:e.target.value})
      }
      setUsername=(e)=>{
        this.setState({Username:e.target.value})
      }
      setPassword=(e)=>{
        this.setState({Password:e.target.value})
      }
      setRepass=(e)=>{
        this.setState({ConfirmPassword:e.target.value})
      }
     
    
      HandleBlur = (event) => {
        console.log("blur event called");
        console.log(event.currentTarget.name + ":" + event.currentTarget.value);
        event.preventDefault();
      };
   render()
   {
       return(
        <div className="container">
        <div className="login-container">
          <div style={{marginLeft:100,marginBottom:20,fontSize:18}}>Registration Form</div>
          <form className="w-100" onSubmit={this.OnSubmit}>
        
        
            <TextField
              id="name"
              name="Name"
              label="Name"
              error={(!this.checkname.test(this.state.Name))&&this.state.submit===true?true:false}
              aria-describedby="component-error-text"
              onChange={this.setName}
              onBlur={this.HandleBlur}
              
            />
            {(!this.checkname.test(this.state.Name))&&this.state.submit===true?<div style={{color:'red',fontSize:11}}>Name should only contain letters</div>:null} 
           
            <TextField
              id="email"
              name="Email"
              label="Email"
              error={(!this.checkemail.test(this.state.Email))&&this.state.submit===true?true:false}
              aria-describedby="component-error-text"
              onChange={this.setEmail}
            
            />
             {(!this.checkemail.test(this.state.Email))&&this.state.submit===true?<div style={{color:'red',fontSize:11}}>Enter Valid Email address</div>:null} 
           
            <TextField
              id="username"
              name="Username"
              label="Username"
              error={(!this.checkusername.test(this.state.Username))&&this.state.submit===true?true:false}
              onChange={this.setUsername}
            
            />
             {(!this.checkusername.test(this.state.Username))&&this.state.submit===true?<div style={{color:'red',fontSize:11}}>Enter Valid User Name</div>:null} 
           
            <PasswordField
              label="Password"
              name="Password"
              Submit={this.state.submit}
              value={this.state.Password}
              Confirm={true}
              emsg={true}
              HandleChange={this.setPassword}
            
              
            />
            <PasswordField
              label="Confirm Password"
              name="Confirm Password"
              emsg={false}
              Submit={this.state.submit}
              value={this.state.ConfirmPassword}
              Confirm={this.state.ConfirmPassword!==this.state.Password?true:false}
              HandleChange={this.setRepass}
              
             
            />
           {this.state.ConfirmPassword!==this.state.Password&&this.state.submit===true?<div style={{color:"red",fontSize:11}}>Password Should b match</div>:null}
            <div style={{marginTop:20}}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-3"
            >
              Sign up
              <ExitToApp />
            </Button>
            </div>
          </form>
        </div>
      </div>
       )
   }
}