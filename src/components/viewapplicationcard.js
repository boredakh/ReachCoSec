import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './viewapplicationcard.css'

const Viewapplicationcard = (props) => {
  return (
    <div
      className={`viewapplicationcard-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <img
        alt={props.feature1ImageAlt}
        src={props.feature1ImageSrc}
        className="viewapplicationcard-image thq-img-ratio-1-1 thq-img-round"
      />
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="viewapplicationcard-text5">Feature #1</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="viewapplicationcard-text7">Location</span>
          </Fragment>
        )}
      </span>
      <span className="viewapplicationcard-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="viewapplicationcard-text4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        )}
      </span>
      <div className="viewapplicationcard-actions thq-flex-row">
        <button className="viewapplicationcard-button thq-button-filled">
          <span className="viewapplicationcard-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="viewapplicationcard-text6">
                  View Application
                </span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Viewapplicationcard.defaultProps = {
  feature1Description: undefined,
  feature1ImageAlt: 'image',
  feature1Title: undefined,
  rootClassName: '',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  mainAction: undefined,
  text1: undefined,
}

Viewapplicationcard.propTypes = {
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  mainAction: PropTypes.element,
  text1: PropTypes.element,
}

export default Viewapplicationcard
