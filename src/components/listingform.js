import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './listingform.css'

const Listingform = (props) => {
  return (
    <div className="listingform-contact1 thq-section-padding">
      <div className="thq-flex-column thq-section-max-width">
        <div className="listingform-section-title thq-flex-column">
          <div className="listingform-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="listingform-text18">Listing Details</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <form className="listingform-form thq-flex-column">
          <div className="listingform-container1">
            <div className="listingform-job-title">
              <label
                htmlFor="contact-form-5-first-name"
                className="thq-body-small"
              >
                Job Title
              </label>
              <input
                type="text"
                id="contact-form-5-first-name"
                className="thq-input"
              />
            </div>
            <div className="listingform-organisation-name">
              <label
                htmlFor="contact-form-5-last-name"
                className="thq-body-small"
              >
                Organisation Name
              </label>
              <input
                type="text"
                id="contact-form-5-last-name"
                className="thq-input"
              />
            </div>
          </div>
          <div className="listingform-container2">
            <div className="listingform-postcode">
              <label htmlFor="contact-form-5-email" className="thq-body-small">
                Postcode
              </label>
              <input
                type="email"
                id="contact-form-5-email"
                required="true"
                className="thq-input"
              />
            </div>
            <div className="listingform-phone">
              <label htmlFor="contact-form-5-phone" className="thq-body-small">
                Industry
              </label>
              <input
                type="tel"
                id="contact-form-5-phone"
                className="thq-input"
              />
            </div>
          </div>
          <div className="listingform-container3">
            <div className="listingform-input">
              <label
                htmlFor="contact-form-5-options"
                className="thq-body-small"
              >
                Commitment
              </label>
              <select
                id="contact-form-5-options"
                placeholder="Select one"
                className="thq-select"
              >
                <option value="Option 1">Part time</option>
                <option value="Option 2">Full time</option>
              </select>
            </div>
          </div>
          <div className="listingform-listing-description">
            <label htmlFor="contact-form-5-message" className="thq-body-small">
              Listing description
            </label>
            <textarea
              id="contact-form-5-message"
              rows="3"
              placeholder="Enter your message"
              className="thq-input listingform-textarea"
            ></textarea>
          </div>
          <div className="listingform-checkbox1">
            <input
              type="checkbox"
              id="contact-form-5-check"
              checked="true"
              required="true"
              className="thq-checkbox"
            />
            <label htmlFor="contact-form-5-check" className="thq-body-small">
              I accept the Terms
            </label>
          </div>
          <Link
            to="/find-volunteers-in"
            className="listingform-button thq-button-filled"
          >
            <span className="thq-body-small">
              {props.action ?? (
                <Fragment>
                  <span className="listingform-text19">Submit</span>
                </Fragment>
              )}
            </span>
          </Link>
        </form>
      </div>
    </div>
  )
}

Listingform.defaultProps = {
  heading1: undefined,
  action: undefined,
}

Listingform.propTypes = {
  heading1: PropTypes.element,
  action: PropTypes.element,
}

export default Listingform
