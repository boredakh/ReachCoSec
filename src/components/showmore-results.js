import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './showmore-results.css'

const ShowmoreResults = (props) => {
  return (
    <div
      className={`showmore-results-max-width thq-section-max-width ${props.rootClassName} `}
    >
      <div className="showmore-results-card thq-flex-column thq-card">
        <div className="showmore-results-actions thq-flex-row">
          <button className="showmore-results-button thq-button-filled">
            <span className="showmore-results-action1 thq-body-small">
              {props.mainAction71 ?? (
                <Fragment>
                  <span className="showmore-results-text">
                    Show more Results
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

ShowmoreResults.defaultProps = {
  rootClassName: '',
  mainAction71: undefined,
}

ShowmoreResults.propTypes = {
  rootClassName: PropTypes.string,
  mainAction71: PropTypes.element,
}

export default ShowmoreResults
