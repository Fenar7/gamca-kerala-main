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
                        <label htmlFor="country">Country</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="country">
                                <option value=""disabled selected>Select Your Country</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="custom-arrow"></div>
                        </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="city">City</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="city">
                                <option value=""disabled selected>Select Your City</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="custom-arrow"></div>
                        </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="countrytravellingto">Country Traveling To</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="countrytravellingto">
                                <option value=""disabled selected>Select GCC Country</option>
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
