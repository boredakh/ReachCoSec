import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import Viewapplicationcard from './viewapplicationcard'
import Listingcard from './listingcard'
import Notificationcard from './notificationcard'
import './dashboard-orgs.css'

const DashboardOrgs = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  return (
    <div
      className={`dashboard-orgs-container10 thq-section-padding ${props.rootClassName} `}
    >
      <div className="dashboard-orgs-max-width1 thq-section-max-width">
        <div className="dashboard-orgs-container11 thq-flex-column">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(false)
                setIsTermsVisible(true)
              }}
              className="dashboard-orgs-button1 thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="dashboard-orgs-text40">
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
                    <span className="dashboard-orgs-text40">
                      View Applications
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {!isPrivacyVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="dashboard-orgs-button3 thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="dashboard-orgs-text41">Listings</span>
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
                    <span className="dashboard-orgs-text41">Listings</span>
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
              className="dashboard-orgs-button5 thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="dashboard-orgs-text42">Notifications</span>
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
                    <span className="dashboard-orgs-text42">Notifications</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="dashboard-orgs-container12 thq-flex-column">
          {isTermsVisible && (
            <div className="dashboard-orgs-container13">
              <div className="dashboard-orgs-max-width2 thq-section-max-width">
                <div className="dashboard-orgs-container14"></div>
                <div className="dashboard-orgs-container15 thq-grid-auto-300">
                  <Viewapplicationcard
                    text1={
                      <Fragment>
                        <span className="dashboard-orgs-text16">Location</span>
                      </Fragment>
                    }
                    mainAction={
                      <Fragment>
                        <span className="dashboard-orgs-text17">
                          View Application
                        </span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-orgs-text18">
                          Feature #1
                        </span>
                      </Fragment>
                    }
                    rootClassName="viewapplicationcardroot-class-name"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-orgs-text19">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Viewapplicationcard>
                  <Viewapplicationcard
                    text1={
                      <Fragment>
                        <span className="dashboard-orgs-text20">Location</span>
                      </Fragment>
                    }
                    mainAction={
                      <Fragment>
                        <span className="dashboard-orgs-text21">
                          View Application
                        </span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-orgs-text22">
                          Feature #1
                        </span>
                      </Fragment>
                    }
                    rootClassName="viewapplicationcardroot-class-name1"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-orgs-text23">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Viewapplicationcard>
                </div>
              </div>
            </div>
          )}
          {isPrivacyVisible && (
            <div className="dashboard-orgs-container16">
              <div className="dashboard-orgs-max-width3 thq-section-max-width">
                <div className="dashboard-orgs-container17"></div>
                <div className="dashboard-orgs-container18 thq-grid-auto-300">
                  <Listingcard
                    text1={
                      <Fragment>
                        <span className="dashboard-orgs-text24">Location</span>
                      </Fragment>
                    }
                    mainAction={
                      <Fragment>
                        <span className="dashboard-orgs-text25">
                          View Listing
                        </span>
                      </Fragment>
                    }
                    mainAction1={
                      <Fragment>
                        <span className="dashboard-orgs-text26">
                          Edit Listing
                        </span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-orgs-text27">
                          Feature #1
                        </span>
                      </Fragment>
                    }
                    rootClassName="listingcardroot-class-name"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-orgs-text28">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Listingcard>
                  <Listingcard
                    text1={
                      <Fragment>
                        <span className="dashboard-orgs-text29">Location</span>
                      </Fragment>
                    }
                    mainAction={
                      <Fragment>
                        <span className="dashboard-orgs-text30">
                          View Listing
                        </span>
                      </Fragment>
                    }
                    mainAction1={
                      <Fragment>
                        <span className="dashboard-orgs-text31">
                          Edit Listing
                        </span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-orgs-text32">
                          Feature #1
                        </span>
                      </Fragment>
                    }
                    rootClassName="listingcardroot-class-name1"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-orgs-text33">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Listingcard>
                </div>
              </div>
            </div>
          )}
          {isRefundVisible && (
            <div className="dashboard-orgs-container19">
              <div className="dashboard-orgs-max-width4 thq-section-max-width">
                <div className="dashboard-orgs-container20"></div>
                <div className="dashboard-orgs-container21 thq-grid-auto-300">
                  <Notificationcard
                    text1={
                      <Fragment>
                        <span className="dashboard-orgs-text34">Location</span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-orgs-text35">
                          Feature #1
                        </span>
                      </Fragment>
                    }
                    rootClassName="notificationcardroot-class-name"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-orgs-text36">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Notificationcard>
                  <Notificationcard
                    text1={
                      <Fragment>
                        <span className="dashboard-orgs-text37">Location</span>
                      </Fragment>
                    }
                    feature1Title={
                      <Fragment>
                        <span className="dashboard-orgs-text38">
                          Feature #1
                        </span>
                      </Fragment>
                    }
                    rootClassName="notificationcardroot-class-name1"
                    feature1Description={
                      <Fragment>
                        <span className="dashboard-orgs-text39">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique. Duis cursus, mi quis viverra ornare, eros
                          dolor interdum nulla.
                        </span>
                      </Fragment>
                    }
                  ></Notificationcard>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

DashboardOrgs.defaultProps = {
  button: undefined,
  button1: undefined,
  rootClassName: '',
  button2: undefined,
}

DashboardOrgs.propTypes = {
  button: PropTypes.element,
  button1: PropTypes.element,
  rootClassName: PropTypes.string,
  button2: PropTypes.element,
}

export default DashboardOrgs
