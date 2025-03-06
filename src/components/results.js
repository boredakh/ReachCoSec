import React, { Fragment } from 'react'

import FeaturedRole from './featured-role'
import ShowmoreResults from './showmore-results'
import './results.css'

const Results = (props) => {
  return (
    <div className="results-layout349 thq-section-padding">
      <div className="results-max-width thq-section-max-width">
        <div className="results-container1"></div>
        <div className="results-container2 thq-grid-auto-300">
          <FeaturedRole
            text1={
              <Fragment>
                <span className="results-text1">Location</span>
              </Fragment>
            }
            mainAction={
              <Fragment>
                <span className="results-text2">View Role</span>
              </Fragment>
            }
            feature1Title={
              <Fragment>
                <span className="results-text3">Feature #1</span>
              </Fragment>
            }
            rootClassName="featured-roleroot-class-name"
            feature1Description={
              <Fragment>
                <span className="results-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            }
          ></FeaturedRole>
          <FeaturedRole
            text1={
              <Fragment>
                <span className="results-text5">Location</span>
              </Fragment>
            }
            mainAction={
              <Fragment>
                <span className="results-text6">View Role</span>
              </Fragment>
            }
            feature1Title={
              <Fragment>
                <span className="results-text7">Feature #1</span>
              </Fragment>
            }
            rootClassName="featured-roleroot-class-name1"
            feature1Description={
              <Fragment>
                <span className="results-text8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            }
          ></FeaturedRole>
          <ShowmoreResults
            mainAction71={
              <Fragment>
                <span className="results-text9">Show more Results</span>
              </Fragment>
            }
            rootClassName="showmore-resultsroot-class-name"
          ></ShowmoreResults>
        </div>
      </div>
    </div>
  )
}

export default Results
