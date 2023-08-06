import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login () {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const [loginUser, { error }] = useMutation(LOGIN_USER);

    useEffect(() => {
        if (error) {
          setShowAlert(true);
        } else {
          setShowAlert(false);
        }
      }, [error]);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await loginUser({
              variables: {...userFormData}
            });
      
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
      
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
          } catch (err) {
            //console.error(err);
            setShowAlert(true);
          }
      
          setUserFormData({
            username: '',
            email: '',
            password: '',
          });
        };
    return (
<div className="Login">
    <form onSubmit={handleFormSubmit}>
<div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email *" onChange={handleInputChange} value={userFormData.email} />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password *" onChange={handleInputChange} value={userFormData.password} />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </form>
        </div>
    )
}

export default Login;