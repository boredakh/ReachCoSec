import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './viewapplicationvol.css'

const Viewapplicationvol = (props) => {
  return (
    <div
      className={`viewapplicationvol-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <img
        alt={props.feature1ImageAlt}
        src={props.feature1ImageSrc}
        className="viewapplicationvol-image thq-img-ratio-1-1 thq-img-round"
      />
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="viewapplicationvol-text4">Feature #1</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="viewapplicationvol-text5">Location</span>
          </Fragment>
        )}
      </span>
      <span className="viewapplicationvol-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="viewapplicationvol-text6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        )}
      </span>
      <div className="viewapplicationvol-actions thq-flex-row">
        <button className="viewapplicationvol-button thq-button-filled">
          <span className="viewapplicationvol-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="viewapplicationvol-text7">View Role</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Viewapplicationvol.defaultProps = {
  feature1Title: undefined,
  rootClassName: '',
  text1: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'image',
  feature1Description: undefined,
  mainAction: undefined,
}

Viewapplicationvol.propTypes = {
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  text1: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
}

export default Viewapplicationvol
