import React from 'react'
import './SignUpForm.css'


function SignUpForm (){

    return(
        
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center equal">
            <div className="col-12 col-md-5  ">
              <div className="card shadow h-100">
                <article className="card-body">
                  <h4 className="card-title font-weight-bold   mb-4 mt-1">Sign up</h4>
                  <form>
                    <div className="form-group">
                      <label>First Name</label>
                      <input name="" className="form-control" placeholder="Name" type="text"/>
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input name="" className="form-control" placeholder="Name" type="text"/>
                    </div>
                    <div className="form-group">
                      <label>Alias</label>
                      <input name="" className="form-control" placeholder="Name" type="text"/>
                    </div>
                    <div className="form-group">
                      <label>Your email</label>
                      <input name="" className="form-control" placeholder="Email" type="email"/>
                    </div>
                    <div className="form-group">
                      <label>New password</label>
                      <input className="form-control" placeholder="******" type="password"/>
                    </div>
                    <div className="form-group">
                      <label>Repeat password</label>
                      <input className="form-control" placeholder="******" type="password"/>
                    </div>
                    <div className="form-group">
                      <div className="checkbox">
                        
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
        
      </section>

       

        )

};
export default SignUpForm 