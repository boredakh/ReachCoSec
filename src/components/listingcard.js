import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './listingcard.css'

const Listingcard = (props) => {
  return (
    <div
      className={`listingcard-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <img
        alt={props.feature1ImageAlt}
        src={props.feature1ImageSrc}
        className="listingcard-image thq-img-ratio-1-1 thq-img-round"
      />
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="listingcard-text8">Feature #1</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="listingcard-text4">Location</span>
          </Fragment>
        )}
      </span>
      <span className="listingcard-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="listingcard-text6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        )}
      </span>
      <div className="listingcard-actions thq-flex-row">
        <button className="listingcard-button1 thq-button-filled">
          <span className="listingcard-action11 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="listingcard-text7">View Listing</span>
              </Fragment>
            )}
          </span>
        </button>
        <button className="listingcard-button2 thq-button-filled">
          <span className="listingcard-action12 thq-body-small">
            {props.mainAction1 ?? (
              <Fragment>
                <span className="listingcard-text5">Edit Listing</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Listingcard.defaultProps = {
  rootClassName: '',
  text1: undefined,
  mainAction1: undefined,
  feature1ImageAlt: 'image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature1Description: undefined,
  mainAction: undefined,
  feature1Title: undefined,
}

Listingcard.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  mainAction1: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Listingcard
