import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './notificationcardvol.css'

const Notificationcardvol = (props) => {
  return (
    <div
      className={`notificationcardvol-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="notificationcardvol-text6">Feature #1</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="notificationcardvol-text4">Location</span>
          </Fragment>
        )}
      </span>
      <span className="notificationcardvol-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="notificationcardvol-text5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        )}
      </span>
      <div className="notificationcardvol-actions thq-flex-row"></div>
    </div>
  )
}

Notificationcardvol.defaultProps = {
  text1: undefined,
  rootClassName: '',
  feature1Description: undefined,
  feature1Title: undefined,
}

Notificationcardvol.propTypes = {
  text1: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Notificationcardvol
