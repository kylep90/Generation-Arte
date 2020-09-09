import React, { Component } from 'react'
import './SignUpForm.css'
import axios from "axios"


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      alias: null,
      bio: null,
      type: null,
      email: null,
      password: null,
      picture: null,
      formErrors: {
        type: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        alias: '',
        bio:'',
        picture: "",
      }
    };
  }
  


  handleSubmit = e => {
    e.preventDefault();
console.log(this.state)

    if (formValid(this.state)) {
    //  console.log(`
    //    --SUBMITTING--
    //    First Name: ${this.state.firstName}
    //    Last Name: ${this.state.lastName}
    //    Email: ${this.state.email}
    //    Password: ${this.state.password}
    //  `);

      //TH?iS FORM IS VALID
      axios.post('/api/users', {...this.state})


      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      //INSTRUCTIONS TO SUBMIT
    } else {
  
      //FORM WAS NOT VALID
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
          break;
          case "picture":
        formErrors.picture =
          value.length < 3 ? "minimum 3 characaters required" : "";
          break;
          case "type":
            formErrors.type =
              value.length < 4 ? "admin/user" : "";
              break;
      case "alias":
        formErrors.alias =
          value.length < 3 ? "minimum 3 characaters required" : "";
          break;
          case "bio":
            formErrors.bio =
              value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
        
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

            <div className="alias">
              <label htmlFor="alias">Alias</label>
              <input
                className={formErrors.alias.length > 0 ? "error" : null}
                placeholder="alias"
                type="text"
                name="alias"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.alias.length > 0 && (
                <span className="errorMessage">{formErrors.alias}</span>
              )}
            </div>

            <div className="bio">
              <label htmlFor="bio">bio</label>
              <input
                className={formErrors.bio.length > 0 ? "error" : null}
                placeholder="bio"
                type="text"
                name="bio"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.alias.length > 0 && (
                <span className="errorMessage">{formErrors.alias}</span>
              )}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>

            <div className="picture">
              <label htmlFor="picture">Your Picture</label>
              <input
                className={formErrors.picture.length > 0 ? "error" : null}
                placeholder="picture"
                type="picture"
                name="picture"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.picture.length > 2 && (
                <span className="errorMessage">{formErrors.picture}</span>
              )}
            </div>

            <div className="type">
              <label htmlFor="type">Type of User (Admin or User)</label>
              <input
                className={formErrors.type.length > 0 ? "error" : null}
                placeholder="type"
                type="type"
                name="type"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.type.length > 0 && (
                <span className="errorMessage">{formErrors.type}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            

            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


// function SignUpForm (){

//     return(
        
//       <section className="pt-5 pb-5">
//         <div className="container">
//           <div className="row justify-content-center equal">
//             <div className="col-12 col-md-5  ">
//               <div className="card shadow h-100">
//                 <article className="card-body">
//                   <h4 className="card-title font-weight-bold   mb-4 mt-1">Sign Up</h4>
//                   <form>
//                     <div className="form-group">
//                       <label>First Name</label>
//                       <input name="" className="form-control" placeholder="Name" type="text"/>
//                     </div>
//                     <div className="form-group">
//                       <label>Last Name</label>
//                       <input name="" className="form-control" placeholder="Name" type="text"/>
//                     </div>
//                     <div className="form-group">
//                       <label>Alias</label>
//                       <input name="" className="form-control" placeholder="Name" type="text"/>
//                     </div>
//                     <div className="form-group">
//                       <label>Your email</label>
//                       <input name="" className="form-control" placeholder="Email" type="email"/>
//                     </div>
//                     <div className="form-group">
//                       <label>Password</label>
//                       <input className="form-control" placeholder="******" type="password"/>
//                     </div>
              
//                     <div className="form-group">
//                       <div className="checkbox">
                        
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <button type="submit" className="btn btn-primary btn-block">Register</button>
//                     </div>
//                   </form>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </div>
        
//       </section>

       

//         )

// };
export default SignUpForm 