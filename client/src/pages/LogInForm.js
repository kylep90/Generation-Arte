import React from 'react'
import './LogInForm.css'


function LogInForm (){

    return(

       
        
          <section className="pt-5 pb-5" >
            <div className="container pt-5 pb-5">
              <div className="row   justify-content-center header-h100 align-items-center">
                <div className="col-12 col-md-4 text-center">
                  <form className="form-signin">
                    <img className="ml-md-3 mr-3 mr-md-0 order-1 img-fluid rounded  mb-4" src="https://via.placeholder.com/80/5fa9f8/fff" alt="Generic"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="">
                    </input>
            
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="">
                    </input>
                    <div className="checkbox mt-3 mb-3">
                      <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                      </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                  </form>
                </div>
              </div>
            </div>
            </section>

    )

};
export default LogInForm 