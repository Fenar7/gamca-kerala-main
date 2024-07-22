"use client";
import './register.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        country: '',
        city: '',
        countrytravellingto: '',
        firstname: '',
        lastname: '',
        dateofbirth: '',
        nationality: '',
        gender: '',
        martialstatus: '',
        passportnumber: '',
        confirmpassportnumber: '',
        passportissuedate: '',
        passportissueplace: '',
        passportexpirydate: '',
        visatype: '',
        email: '',
        phone: '',
        nationalid: '',
        postappliedfor: '',
        other: '',
        paymentstatus: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
        console.log(formData)
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log('userobject-----'+formData)
    //     const response = await fetch('/api/register', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });
    
    //     if (response.ok) {
    //       console.log('User registered successfully');
    //     } else {
    //       console.error('Failed to register user'+response);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('userobject-----'+formData)
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            formData
          ),
        });
    
        if (response.ok) {
          console.log('User registered successfully#######');
        //   router.push('/register/payment')
          
        } else {
          console.error('Failed to register user'+response);
        }
    };

    return (
        <>
            <section className="form-container-main">
                <div className="form-container container margin-top margin-bottom">
                    <h1>Book a medical examination appointment</h1>
                    <form onSubmit={handleSubmit}>
                        <h3 className="grp-heading">Location</h3>
                        <div className="form-row">
                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="country">Country</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="country" value={formData.country} onChange={handleChange} required>
                                        <option value="" disabled>Select Your Country</option>
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
                                    <select className="form-control custom-select" name="city" value={formData.city} onChange={handleChange} required>
                                        <option value="" disabled>Select Your City</option>
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
                                    <select className="form-control custom-select" name="countrytravellingto" value={formData.countrytravellingto} onChange={handleChange} required>
                                        <option value="" disabled>Select GCC Country</option>
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
                                    <input type="text" className="form-control custom-select" name="firstname" value={formData.firstname} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="last_name">Last Name</label>
                                <div className="custom-select-container">
                                    <input type="text" className="form-control custom-select" name="lastname" value={formData.lastname} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="date_of_birth">Date Of Birth</label>
                                <div className="custom-select-container">
                                    <input type="date" className="form-control custom-select" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="nationality">Nationality</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="nationality" value={formData.nationality} onChange={handleChange} required>
                                        <option value="" disabled>Select Your Nationality</option>
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
                                    <select className="form-control custom-select" name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="" disabled>Select Gender</option>
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
                                    <select className="form-control custom-select" name="martialstatus" value={formData.martialstatus} onChange={handleChange} required>
                                        <option value="" disabled>-------------</option>
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
                                    <input type="text" className="form-control custom-select" name="passportnumber" value={formData.passportnumber} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="passport_number_cm">Confirm Passport Number</label>
                                <div className="custom-select-container">
                                    <input type="text" className="form-control custom-select" name="confirmpassportnumber" value={formData.confirmpassportnumber} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="passport_issue_date">Passport Issue Date</label>
                                <div className="custom-select-container">
                                    <input type="date" className="form-control custom-select" name="passportissuedate" value={formData.passportissuedate} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="passport_issue_place">Passport Issue Place</label>
                                <div className="custom-select-container">
                                    <input type="text" className="form-control custom-select" name="passportissueplace" value={formData.passportissueplace} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="passport_expiry_date">Passport Expiry Date</label>
                                <div className="custom-select-container">
                                    <input type="date" className="form-control custom-select" name="passportexpirydate" value={formData.passportexpirydate} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="visa_type">Visa Type</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="visatype" value={formData.visatype} onChange={handleChange} required>
                                        <option value="" disabled>Select Visa Type</option>
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
                                    <input type="email" className="form-control custom-select" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="phone">Phone No</label>
                                <div className="custom-select-container">
                                    <input type="text" className="form-control custom-select" name="phone" value={formData.phone} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="nationalid">National ID</label>
                                <div className="custom-select-container">
                                    <input type="text" className="form-control custom-select" name="nationalid" value={formData.nationalid} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="countrytravellingto">Position Applied For</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="postappliedfor" value={formData.postappliedfor} onChange={handleChange} required>
                                        <option value="" disabled>Select GCC Country</option>
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
                                    <input type="text" className="form-control custom-select" name="other" value={formData.other} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Page;
