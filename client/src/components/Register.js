import React from 'react'

function Register () {
    return (
<div className="Register">
<div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Register</h3>
                    <form>
                    <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password *" value="" />
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

export default Register;