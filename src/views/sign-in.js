import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import NavBarOut from '../components/nav-bar-out'
import SignIn1 from '../components/sign-in1'
import Footer from '../components/footer'
import './sign-in.css'

const SignIn = (props) => {
  return (
    <div className="sign-in-container">
      <Helmet>
        <title>SignIn - Which Second Hand Lion</title>
        <meta property="og:title" content="SignIn - Which Second Hand Lion" />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="sign-in-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="sign-in-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="sign-in-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="sign-in-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="sign-in-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="sign-in-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="sign-in-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="sign-in-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="sign-in-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-in-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="sign-in-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name2"
        page1Description={
          <Fragment>
            <span className="sign-in-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="sign-in-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="sign-in-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="sign-in-text24">Page Four Description</span>
          </Fragment>
        }
      ></NavBarOut>
      <SignIn1
        action1={
          <Fragment>
            <span className="sign-in-text25">Sign in</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="sign-in-text26">Create an account</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="sign-in-text27">Sign in</span>
          </Fragment>
        }
        action21={
          <Fragment>
            <span className="sign-in-text28">Create an account</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="sign-in-text29">New to our community</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="sign-in-text30">Sign in As Volunteer</span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="sign-in-text31">New to our community</span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="sign-in-text32">Sign in As Organisation</span>
          </Fragment>
        }
      ></SignIn1>
      <Footer
        link1={
          <Fragment>
            <span className="sign-in-text33">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="sign-in-text34">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="sign-in-text35">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="sign-in-text36">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="sign-in-text37">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="sign-in-text38">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="sign-in-text39">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="sign-in-text40">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="sign-in-text41">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="sign-in-text42">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name5"
      ></Footer>
    </div>
  )
}

export default SignIn
