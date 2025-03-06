import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './featured-role.css'

const FeaturedRole = (props) => {
  return (
    <div
      className={`featured-role-card thq-flex-column thq-card ${props.rootClassName} `}
    >
      <img
        alt={props.feature1ImageAlt}
        src={props.feature1ImageSrc}
        className="featured-role-image thq-img-ratio-1-1 thq-img-round"
      />
      <h2 className="thq-heading-2">
        {props.feature1Title ?? (
          <Fragment>
            <span className="featured-role-text6">Feature #1</span>
          </Fragment>
        )}
      </h2>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="featured-role-text5">Location</span>
          </Fragment>
        )}
      </span>
      <span className="featured-role-text3 thq-body-small">
        {props.feature1Description ?? (
          <Fragment>
            <span className="featured-role-text7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        )}
      </span>
      <div className="featured-role-actions thq-flex-row">
        <button className="featured-role-button thq-button-filled">
          <span className="featured-role-action1 thq-body-small">
            {props.mainAction ?? (
              <Fragment>
                <span className="featured-role-text4">View Role</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

FeaturedRole.defaultProps = {
  mainAction: undefined,
  text1: undefined,
  feature1Title: undefined,
  rootClassName: '',
  feature1ImageAlt: 'image',
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGZlYXR1cmV8ZW58MHx8fHwxNzE2NDYwNjE4fDA&ixlib=rb-4.0.3&w=1400',
}

FeaturedRole.propTypes = {
  mainAction: PropTypes.element,
  text1: PropTypes.element,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
}

export default FeaturedRole
