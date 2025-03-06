import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sign-up-volunteer.css'

const SignUpVolunteer = (props) => {
  return (
    <div className="sign-up-volunteer-container1">
      <div className="sign-up-volunteer-max-width thq-section-max-width">
        <div className="sign-up-volunteer-form-root thq-section-padding">
          <div className="sign-up-volunteer-form1">
            <div className="sign-up-volunteer-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-up-volunteer-text32">
                      Welcome to ReachCoSec
                    </span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-up-volunteer-have-an-account-login1">
                <Link to="/sign-in" className="sign-up-volunteer-navlink">
                  <p className="sign-up-volunteer-text11 thq-body-large">
                    Already have an account? Sign in
                  </p>
                </Link>
              </div>
            </div>
            <form className="sign-up-volunteer-form2">
              <div className="sign-up-volunteer-first-name">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-volunteer-textinput1 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-volunteer-last-name">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  className="sign-up-volunteer-textinput2 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-volunteer-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  className="sign-up-volunteer-textinput3 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-volunteer-username">
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
                  className="sign-up-volunteer-textinput4 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-volunteer-password">
                <div className="sign-up-volunteer-textfield">
                  <div className="sign-up-volunteer-container2">
                    <label
                      htmlFor="thq-sign-up-1-password"
                      className="thq-body-large"
                    >
                      Password
                    </label>
                    <div className="sign-up-volunteer-hide-password">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="sign-up-volunteer-icon1"
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
                    className="sign-up-volunteer-textinput5 thq-body-large thq-input"
                  />
                </div>
                <div className="sign-up-volunteer-pass-requirements">
                  <div className="sign-up-volunteer-pass-conditions1">
                    <div className="sign-up-volunteer-bulletpoint1">
                      <div className="sign-up-volunteer-container3"></div>
                      <span className="sign-up-volunteer-text18 thq-body-small">
                        Use 8 or more characters
                      </span>
                    </div>
                    <div className="sign-up-volunteer-bulletpoint2">
                      <div className="sign-up-volunteer-container4"></div>
                      <span className="sign-up-volunteer-text19 thq-body-small">
                        One special character
                      </span>
                    </div>
                  </div>
                  <div className="sign-up-volunteer-pass-conditions2">
                    <div className="sign-up-volunteer-bulletpoint3">
                      <div className="sign-up-volunteer-container5"></div>
                      <span className="sign-up-volunteer-text20 thq-body-small">
                        One Uppercase character
                      </span>
                    </div>
                    <div className="sign-up-volunteer-bulletpoint4">
                      <div className="sign-up-volunteer-container6"></div>
                      <span className="sign-up-volunteer-text21 thq-body-small">
                        One number
                      </span>
                    </div>
                  </div>
                  <div className="sign-up-volunteer-pass-conditions3">
                    <div className="sign-up-volunteer-bulletpoint5">
                      <div className="sign-up-volunteer-container7"></div>
                      <span className="sign-up-volunteer-text22 thq-body-small">
                        One lowercase character
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sign-up-volunteer-city-county">
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
                  className="sign-up-volunteer-textinput6 thq-body-large thq-input"
                />
              </div>
              <div className="sign-up-volunteer-experience">
                <div className="sign-up-volunteer-input1">
                  <label
                    htmlFor="contact-form-5-options"
                    className="thq-body-small"
                  >
                    Experience
                  </label>
                  <select
                    id="contact-form-5-options"
                    placeholder="Select one"
                    className="thq-select"
                  >
                    <option value="Option 3">No experience</option>
                    <option value="Option 1">Less than 1 year</option>
                    <option value="Option 2">1-2 Years</option>
                    <option value="Option 2">2-5 Years</option>
                    <option value="Option 2">More than 5 years</option>
                  </select>
                </div>
              </div>
              <div className="sign-up-volunteer-age-group">
                <div className="sign-up-volunteer-input2">
                  <label
                    htmlFor="contact-form-5-options"
                    className="thq-body-small"
                  >
                    Age group
                  </label>
                  <select
                    id="contact-form-5-options"
                    placeholder="Select one"
                    className="thq-select"
                  >
                    <option value="Option 3">Under 18</option>
                    <option value="Option 1">18-24</option>
                    <option value="Option 2">24-29</option>
                    <option value="Option 2">30-39</option>
                    <option value="Option 2">40+</option>
                  </select>
                </div>
              </div>
              <div className="sign-up-volunteer-gender">
                <div className="sign-up-volunteer-input3">
                  <label
                    htmlFor="contact-form-5-options"
                    className="thq-body-small"
                  >
                    Gender
                  </label>
                  <select
                    id="contact-form-5-options"
                    placeholder="Select one"
                    className="thq-select"
                  >
                    <option value="Option 3">male</option>
                    <option value="Option 1">female</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="sign-up-volunteer-container8">
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
                    <span className="sign-up-volunteer-text33">
                      I want to receive emails about the product, events, and
                      marketing promotions.
                    </span>
                  </Fragment>
                )}
              </label>
            </div>
            <div className="sign-up-volunteer-terms-agree">
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
            <Link to="/" className="sign-up-volunteer-button thq-button-filled">
              <span className="sign-up-volunteer-text29 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="sign-up-volunteer-text31">
                      Create an account
                    </span>
                  </Fragment>
                )}
              </span>
            </Link>
            <div className="sign-up-volunteer-have-an-account-login2">
              <p className="thq-body-large">Already have an account? Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignUpVolunteer.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

SignUpVolunteer.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default SignUpVolunteer
