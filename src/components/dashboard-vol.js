import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import Viewapplicationvol from './viewapplicationvol'
import Notificationcardvol from './notificationcardvol'
import './dashboard-vol.css'

const DashboardVol = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  return (
    <div
      className={`dashboard-vol-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="dashboard-vol-max-width1 thq-section-max-width">
        <div className="dashboard-vol-container2 thq-flex-column">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(false)
                setIsTermsVisible(true)
              }}
              className="dashboard-vol-button1 thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="dashboard-vol-text30">
                      View Applications
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(true)
                setIsRefundVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="dashboard-vol-text30">
                      View Applications
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="dashboard-vol-text29">Listings</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsTermsVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="dashboard-vol-button4 thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="dashboard-vol-text31">Notifications</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="dashboard-vol-text31">Notifications</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="dashboard-vol-container3 thq-flex-column">
          {isTermsVisible && (
            <div className="dashboard-vol-container4">
              <div className="dashboard-vol-max-width2 thq-section-max-width">
                <div className="dashboard-vol-container5"></div>
                <div className="dashboard-vol-container6 thq-grid-auto-300">
                  <Viewapplicationvol
                    text1={
                      <Fragment>
                        <span className="dashboard-vol-text15">Location</span>
                      </Fragment>
                    }
                    mainAction={
                      <Fragment>
                        <span className="dashboard-vol-text16">View Role</span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-vol-text17">Feature #1</span>
                      </Fragment>
                    }
                    rootClassName="viewapplicationvolroot-class-name"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-vol-text18">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Viewapplicationvol>
                  <Viewapplicationvol
                    text1={
                      <Fragment>
                        <span className="dashboard-vol-text19">Location</span>
                      </Fragment>
                    }
                    mainAction={
                      <Fragment>
                        <span className="dashboard-vol-text20">View Role</span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-vol-text21">Feature #1</span>
                      </Fragment>
                    }
                    rootClassName="viewapplicationvolroot-class-name1"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-vol-text22">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Viewapplicationvol>
                </div>
              </div>
            </div>
          )}
          {isRefundVisible && (
            <div className="dashboard-vol-container7">
              <div className="dashboard-vol-max-width3 thq-section-max-width">
                <div className="dashboard-vol-container8"></div>
                <div className="dashboard-vol-container9 thq-grid-auto-300">
                  <Notificationcardvol
                    text1={
                      <Fragment>
                        <span className="dashboard-vol-text23">Location</span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-vol-text24">Feature #1</span>
                      </Fragment>
                    }
                    rootClassName="notificationcardvolroot-class-name"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-vol-text25">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Notificationcardvol>
                  <Notificationcardvol
                    text1={
                      <Fragment>
                        <span className="dashboard-vol-text26">Location</span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-vol-text27">Feature #1</span>
                      </Fragment>
                    }
                    rootClassName="notificationcardvolroot-class-name1"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-vol-text28">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Notificationcardvol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

DashboardVol.defaultProps = {
  button1: undefined,
  button: undefined,
  button2: undefined,
  rootClassName: '',
}

DashboardVol.propTypes = {
  button1: PropTypes.element,
  button: PropTypes.element,
  button2: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default DashboardVol
