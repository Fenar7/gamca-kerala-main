import './register.css'
import React from 'react'

function page() {
  return (
    <>
      <section className="form-container-main">
        <div className="form-container container margin-top margin-bottom">
            <h1>Book a medical examination appointment</h1>
            <form>
                <div className="form-row">
                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="custom-arrow"></div>
                        </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="custom-arrow"></div>
                        </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="custom-arrow"></div>
                        </div>
                    </div>
                </div>
        </form>
        </div>
      </section>
    </>
  )
}

export default page
