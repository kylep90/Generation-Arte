import React from 'react'
import {Link} from 'react-router-dom';

function GFooter (){
    return (

<footer className="pt-4 pb-4  bg-dark text-white">
  
                <div className="row">
                  <div className="col-md-6">
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <Link href="/" role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-twitter fa-lg text-white" aria-hidden="true"></i>
                      </Link>
                      <Link href="/" role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-facebook fa-lg text-white" aria-hidden="true"></i>
                      </Link>
                      <Link href="/" role="button" className=" btn btn-link mr-2">
                        <i aria-hidden="true" className="fab fa-linkedin fa-lg text-white"></i>
                      </Link>
                    </div>
                    </div>
            
             
              <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
                © 2020. GENERATION ARTE. All Rights Reserved
              </div>
            </div>
          
        </footer>
      
    )
}
export default GFooter