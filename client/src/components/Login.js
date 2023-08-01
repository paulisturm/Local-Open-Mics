import React from 'react'

function Login () {
    return (
<div className="Login">
<div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        
                    </form>
                </div>
                <div class="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form>
                    <div class="form-group ">
                            <input type="text" class="form-control" placeholder="Your Username *" value="" />
                        </div>
                        <div class="form-group ">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Register" />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;