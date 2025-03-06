import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './notificationcard.css'

const Notificationcard = (props) => {
  return (
    <div
      className={`notificationcard-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="notificationcard-text4">Feature #1</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="notificationcard-text5">Location</span>
          </Fragment>
        )}
      </span>
      <span className="notificationcard-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="notificationcard-text6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        )}
      </span>
      <div className="notificationcard-actions thq-flex-row"></div>
    </div>
  )
}

Notificationcard.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  text1: undefined,
  feature1Description: undefined,
}

Notificationcard.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  text1: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Notificationcard
