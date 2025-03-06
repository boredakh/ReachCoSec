import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sign-up-org.css'

const SignUpOrg = (props) => {
  return (
    <div className={`sign-up-org-container1 ${props.rootClassName} `}>
      <div className="sign-up-org-max-width thq-section-max-width">
        <div className="sign-up-org-form-root thq-section-padding">
          <div className="sign-up-org-form1">
            <div className="sign-up-org-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up-org-text30">
                      Welcome to ReachCoSec
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up-org-have-an-account-login1">
                <Link to="/sign-in" className="sign-up-org-navlink1">
                  <p className="sign-up-org-text11 thq-body-large">
                    Already have an account? Sign in
                  </p>
                </Link>
              </div>
            </div>
            <form className="sign-up-org-form2">
              <div className="sign-up-org-organisationname">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Organisation Name
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-org-textinput1 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-org-industry">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Industry
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-org-textinput2 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-org-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  className="sign-up-org-textinput3 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-org-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-org-textinput4 thq-body-large thq-input"
                />
                <div className="sign-up-org-password">
                  <div className="sign-up-org-textfield">
                    <div className="sign-up-org-container2">
                      <label
                        htmlFor="thq-sign-up-1-password"
                        className="thq-body-large"
                      >
                        Password
                      </label>
                      <div className="sign-up-org-hide-password">
                        <svg
                          viewBox="0 0 1024 1024"
                          className="sign-up-org-icon1"
                        >
                          <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                        </svg>
                        <span className="thq-body-small">Hide</span>
                      </div>
                    </div>
                    <input
                      type="password"
                      id="thq-sign-up-1-password"
                      required="true"
                      className="sign-up-org-textinput5 thq-body-large thq-input"
                    />
                  </div>
                  <div className="sign-up-org-pass-requirements">
                    <div className="sign-up-org-pass-conditions1">
                      <div className="sign-up-org-bulletpoint1">
                        <div className="sign-up-org-container3"></div>
                        <span className="sign-up-org-text18 thq-body-small">
                          Use 8 or more characters
                        </span>
                      </div>
                      <div className="sign-up-org-bulletpoint2">
                        <div className="sign-up-org-container4"></div>
                        <span className="sign-up-org-text19 thq-body-small">
                          One special character
                        </span>
                      </div>
                    </div>
                    <div className="sign-up-org-pass-conditions2">
                      <div className="sign-up-org-bulletpoint3">
                        <div className="sign-up-org-container5"></div>
                        <span className="sign-up-org-text20 thq-body-small">
                          One Uppercase character
                        </span>
                      </div>
                      <div className="sign-up-org-bulletpoint4">
                        <div className="sign-up-org-container6"></div>
                        <span className="sign-up-org-text21 thq-body-small">
                          One number
                        </span>
                      </div>
                    </div>
                    <div className="sign-up-org-pass-conditions3">
                      <div className="sign-up-org-bulletpoint5">
                        <div className="sign-up-org-container7"></div>
                        <span className="sign-up-org-text22 thq-body-small">
                          One lowercase character
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-up-org-city-county">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  City/County
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-org-textinput6 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-org-postcode">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Postcode
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-org-textinput7 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-org-address">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-org-textinput8 thq-body-large thq-input"
                />
              </div>
            </form>
            <div className="sign-up-org-container8">
              <input
                type="checkbox"
                id="thq-sign-up-1-newsletter"
                checked="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="thq-sign-up-1-newsletter"
                className="thq-body-large"
              >
                {props.content1 ?? (
                  <Fragment>
                    <span className="sign-up-org-text32">
                      I want to receive emails about the product, events, and
                      marketing promotions.
                    </span>
                  </Fragment>
                )}
              </label>
            </div>
            <div className="sign-up-org-terms-agree">
              <p className="thq-body-large">
                By creating an account, you agree to the Terms of use and
                Privacy Policy.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <Link
              to="/sign-in"
              className="sign-up-org-button thq-button-filled"
            >
              <span className="sign-up-org-text28 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up-org-text31">
                      Create an account
                    </span>
                  </Fragment>
                )}
              </span>
            </Link>
            <div className="sign-up-org-have-an-account-login2">
              <Link to="/sign-in" className="sign-up-org-navlink2">
                <p className="sign-up-org-text29 thq-body-large">
                  Already have an account? Sign in
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignUpOrg.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

SignUpOrg.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default SignUpOrg
