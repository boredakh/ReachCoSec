import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './search-bar.css'

const SearchBar = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div
      className={`search-bar-pricing23 thq-section-padding ${props.rootClassName} `}
    >
      <div className="search-bar-max-width thq-section-max-width">
        <div className="search-bar-section-title">
          <div className="search-bar-content"></div>
        </div>
        {isMonthly && (
          <div className="search-bar-container1">
            <div className="search-bar-column1 thq-card">
              <div className="search-bar-price1">
                <div className="search-bar-price2">
                  <img
                    alt={props.imageAlt2}
                    src={props.imageSrc2}
                    className="search-bar-image"
                  />
                  <h3 className="search-bar-text10 thq-heading-3">
                    {props.plan2Price ?? (
                      <Fragment>
                        <span className="search-bar-text53">
                          <span>Find Opportunities</span>
                          <br></br>
                          <br></br>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span>
                    {props.text111 ?? (
                      <Fragment>
                        <span className="search-bar-text42">Keyword:</span>
                      </Fragment>
                    )}
                  </span>
                  <input
                    type="text"
                    placeholder={props.textinputPlaceholder}
                    className="search-bar-textinput1 input"
                  />
                  <span>
                    {props.text11 ?? (
                      <Fragment>
                        <span className="search-bar-text52">Postcode:</span>
                      </Fragment>
                    )}
                  </span>
                  <input
                    type="text"
                    placeholder={props.textinputPlaceholder1}
                    className="search-bar-textinput2 input"
                  />
                  <div className="search-bar-buttons">
                    <Link
                      to="/opportunities-out"
                      className="search-bar-action1 thq-button-filled thq-button-animated"
                    >
                      <span>
                        {props.text ?? (
                          <Fragment>
                            <span className="search-bar-text44">Search</span>
                          </Fragment>
                        )}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="search-bar-container2">
            <div className="search-bar-column2 thq-card">
              <div className="search-bar-price3">
                <div className="search-bar-price4">
                  <span className="search-bar-text14 thq-body-large">
                    {props.plan11 ?? (
                      <Fragment>
                        <span className="search-bar-text50">Basic plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="search-bar-text15 thq-heading-3">
                    {props.plan1Price1 ?? (
                      <Fragment>
                        <span className="search-bar-text62">$200/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan1Yearly1 ?? (
                      <Fragment>
                        <span className="search-bar-text64">
                          or $20 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="search-bar-list1">
                  <div className="search-bar-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature11 ?? (
                        <Fragment>
                          <span className="search-bar-text48">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature21 ?? (
                        <Fragment>
                          <span className="search-bar-text41">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature31 ?? (
                        <Fragment>
                          <span className="search-bar-text43">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="search-bar-button1 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.plan1Action1 ?? (
                    <Fragment>
                      <span className="search-bar-text49">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="search-bar-column3 thq-card">
              <div className="search-bar-price5">
                <div className="search-bar-price6">
                  <span className="search-bar-text21 thq-body-large">
                    {props.plan21 ?? (
                      <Fragment>
                        <span className="search-bar-text58">Business plan</span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="search-bar-text22 thq-heading-3">
                    {props.plan2Price1 ?? (
                      <Fragment>
                        <span className="search-bar-text40">$299/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan2Yearly1 ?? (
                      <Fragment>
                        <span className="search-bar-text38">
                          or $29 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="search-bar-list2">
                  <div className="search-bar-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature11 ?? (
                        <Fragment>
                          <span className="search-bar-text66">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature21 ?? (
                        <Fragment>
                          <span className="search-bar-text47">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature31 ?? (
                        <Fragment>
                          <span className="search-bar-text46">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan2Feature41 ?? (
                        <Fragment>
                          <span className="search-bar-text68">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="search-bar-button2 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan2Action1 ?? (
                    <Fragment>
                      <span className="search-bar-text67">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="search-bar-column4 thq-card">
              <div className="search-bar-price7">
                <div className="search-bar-price8">
                  <span className="search-bar-text29 thq-body-large">
                    {props.plan31 ?? (
                      <Fragment>
                        <span className="search-bar-text63">
                          Enterprise plan
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="search-bar-text30 thq-heading-3">
                    {props.plan3Price1 ?? (
                      <Fragment>
                        <span className="search-bar-text60">$499/yr</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-large">
                    {props.plan3Yearly1 ?? (
                      <Fragment>
                        <span className="search-bar-text51">
                          or $49 monthly
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="search-bar-list3">
                  <div className="search-bar-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature11 ?? (
                        <Fragment>
                          <span className="search-bar-text61">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature21 ?? (
                        <Fragment>
                          <span className="search-bar-text59">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature31 ?? (
                        <Fragment>
                          <span className="search-bar-text57">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature41 ?? (
                        <Fragment>
                          <span className="search-bar-text45">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="search-bar-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan3Feature51 ?? (
                        <Fragment>
                          <span className="search-bar-text39">
                            Feature text goes here
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="search-bar-button3 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.plan3Action1 ?? (
                    <Fragment>
                      <span className="search-bar-text65">Get started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

SearchBar.defaultProps = {
  plan2Yearly1: undefined,
  plan3Feature51: undefined,
  plan2Price1: undefined,
  plan1Feature21: undefined,
  text111: undefined,
  plan1Feature31: undefined,
  textinputPlaceholder1: 'placeholder',
  text: undefined,
  plan3Feature41: undefined,
  plan2Feature31: undefined,
  plan2Feature21: undefined,
  plan1Feature11: undefined,
  plan1Action1: undefined,
  plan11: undefined,
  plan3Yearly1: undefined,
  text11: undefined,
  plan2Price: undefined,
  plan3Feature31: undefined,
  imageSrc2: '/search-icon-2048x2048-cmujl7en-200h.png',
  plan21: undefined,
  plan3Feature21: undefined,
  plan3Price1: undefined,
  rootClassName: '',
  plan3Feature11: undefined,
  plan1Price1: undefined,
  plan31: undefined,
  textinputPlaceholder: 'placeholder',
  plan1Yearly1: undefined,
  plan3Action1: undefined,
  plan2Feature11: undefined,
  plan2Action1: undefined,
  plan2Feature41: undefined,
  imageAlt2: 'image',
}

SearchBar.propTypes = {
  plan2Yearly1: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Feature21: PropTypes.element,
  text111: PropTypes.element,
  plan1Feature31: PropTypes.element,
  textinputPlaceholder1: PropTypes.string,
  text: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan11: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  text11: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature31: PropTypes.element,
  imageSrc2: PropTypes.string,
  plan21: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan3Price1: PropTypes.element,
  rootClassName: PropTypes.string,
  plan3Feature11: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan31: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  plan1Yearly1: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Feature41: PropTypes.element,
  imageAlt2: PropTypes.string,
}

export default SearchBar
