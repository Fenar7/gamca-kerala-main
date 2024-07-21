import './register.css'
import React from 'react'

function page() {
  return (
    <>
      <section className="form-container-main">
        <div className="form-container container margin-top margin-bottom">
            <h1>Book a medical examination appointment</h1>
            <form>
                <h3 className="grp-heading">Location</h3>
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

                <h3 className="grp-heading">Candidate's information</h3>
                <div className="form-row">
                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="first_name">First Name</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="first_name" />
                        </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="last_name">Last Name</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="last_name" />
                        </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                        <label htmlFor="date_of_birth">Date Of Birth</label>
                        <div className="custom-select-container">
                            <input type="date" className="form-control custom-select" id="date_of_birth" />
                        </div>
                    </div>
                </div>
 
                <div className="form-row">
                    <div className="form-group custom-select-wrapper">
                            <label htmlFor="nationality">Nationality</label>
                            <div className="custom-select-container">
                                <select className="form-control custom-select" id="nationality">
                                    <option value=""disabled selected>Select Your Nationality</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div className="custom-arrow"></div>
                            </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                            <label htmlFor="gender">Gender</label>
                            <div className="custom-select-container">
                                <select className="form-control custom-select" id="gender">
                                    <option value=""disabled selected>Select Gender</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div className="custom-arrow"></div>
                            </div>
                    </div>

                    <div className="form-group custom-select-wrapper">
                            <label htmlFor="martial_status">Martial Status</label>
                            <div className="custom-select-container">
                                <select className="form-control custom-select" id="martial_status">
                                    <option value=""disabled selected>-------------</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div className="custom-arrow"></div>
                            </div>
                    </div>

                </div>

                <div className="form-row">
                <div className="form-group custom-select-wrapper">
                        <label htmlFor="passport_number">Passport Number</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="passport_number" />
                        </div>
                </div>

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="passport_number_cm">Confirm Passport Number</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="passport_number_cm" />
                        </div>
                </div>

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="passport_issue_date">Passport Issue Date</label>
                        <div className="custom-select-container">
                            <input type="date" className="form-control custom-select" id="passport_issue_date" />
                        </div>
                </div>

                </div>

                <div className="form-row">
                <div className="form-group custom-select-wrapper">
                        <label htmlFor="passport_issue_place">Passport Issue Place</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="passport_issue_place" />
                        </div>
                </div>

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="passport_expiry_date">Passport Expiry Date</label>
                        <div className="custom-select-container">
                            <input type="date" className="form-control custom-select" id="passport_expiry_date" />
                        </div>
                </div>

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="visa_type">Visa Type</label>
                        <div className="custom-select-container">
                            <select className="form-control custom-select" id="visa_type">
                                <option value=""disabled selected>Select Visa Type</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="custom-arrow"></div>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                <div className="form-group custom-select-wrapper">
                        <label htmlFor="emailid">Email ID</label>
                        <div className="custom-select-container">
                            <input type="email" className="form-control custom-select" id="emailid" />
                        </div>
                </div>

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="nationalid">Phone No</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="nationalid" />
                        </div>
                </div>

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="nationalid">National ID</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="nationalid" />
                        </div>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group custom-select-wrapper">
                        <label htmlFor="countrytravellingto">Position Applied For</label>
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

                <div className="form-group custom-select-wrapper">
                        <label htmlFor="nationalid">Other</label>
                        <div className="custom-select-container">
                            <input type="text" className="form-control custom-select" id="nationalid" />
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
