"use client";
import './register.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const countryCityMapping = {
    India: ['Ahmedabad', 'Bangalore', 'Calicut', 'Chennai','Cochin','Goa','Hyderabad','Jaipur','Kolkata','Kutch','Lucknow','Mangalore','Manjeri','Mumbai','New Delhi','Patna','Tirur','Trichy','Trivananthapuram'],
    Indonesia: ['Jakarta Selatan', 'Malang', 'Matram', 'Surabaya'],
    Nepal: ['Kathmandu'],
    Srilanka: ['Colombo', 'Kurunegala']
};

function Page() {
    const router = useRouter();
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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            router.push('/register/payment');
        } else {
            console.error('Failed to register user', response);
        }
    };

    const getCityOptions = () => {
        if (!formData.country) {
            return <option value="" disabled>Select Your City</option>;
        }
        return countryCityMapping[formData.country].map((city) => (
            <option key={city} value={city}>{city}</option>
        ));
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
                                        <option>India</option>
                                        <option>Indonesia</option>
                                        <option>Nepal</option>
                                        <option>Srilanka</option>
                                    </select>
                                    <div className="custom-arrow"></div>
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="city">City</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="city" value={formData.city} onChange={handleChange} required>
                                        {getCityOptions()}
                                    </select>
                                    <div className="custom-arrow"></div>
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="countrytravellingto">Country Traveling To</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="countrytravellingto" value={formData.countrytravellingto} onChange={handleChange} required>
                                        <option value="" disabled>Select GCC Country</option>
                                        <option>Bahrain</option>
                                        <option>Kuwait</option>
                                        <option>Oman</option>
                                        <option>Qatar</option>
                                        <option>Saudi Arabia</option>
                                        <option>UAE</option>
                                        <option>Yemen</option>
                                    </select>
                                    <div className="custom-arrow"></div>
                                </div>
                            </div>
                        </div>

                        <h3 className="grp-heading">Candidate&apos;s information</h3>
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
                                        <option>Indian</option>
                                        <option>Indonesian</option>
                                        <option>Nepali</option>
                                        <option>Srilankan</option>
                                    </select>
                                    <div className="custom-arrow"></div>
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="gender">Gender</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="" disabled>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <div className="custom-arrow"></div>
                                </div>
                            </div>

                            <div className="form-group custom-select-wrapper">
                                <label htmlFor="martial_status">Martial Status</label>
                                <div className="custom-select-container">
                                    <select className="form-control custom-select" name="martialstatus" value={formData.martialstatus} onChange={handleChange} required>
                                        <option value="" disabled>-------------</option>
                                        <option>Married</option>
                                        <option>Single</option>
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
                                        <option>Work Visa</option>
                                        <option>Family Visa</option>
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
                                        <option>Banking & Finance</option>
                                        <option>Carpenter</option>
                                        <option>Cashier</option>
                                        <option>Electrician</option>
                                        <option>Engineer</option>
                                        <option>General Secretory</option>
                                        <option>Health & Medicine & Nursing</option>
                                        <option>Heavy Driver</option>
                                        <option>IT & Internet Engineer</option>
                                        <option>Leisure & Tourism</option>
                                        <option>Light Driver</option>
                                        <option>Mason</option>
                                        <option>President</option>
                                        <option>Labour</option>
                                        <option>Labour</option>
                                        <option>Plumber</option>
                                        <option>Doctor</option>
                                        <option>Family</option>
                                        <option>Steel Fixer</option>
                                        <option>Aluminum Technician</option>
                                        <option>Nurse</option>
                                        <option>Male Nurse</option>
                                        <option>Ward Boy</option>
                                        <option>Shovel Operator</option>
                                        <option>Dozer Operator</option>
                                        <option>Car Mechanic</option>
                                        <option>Petrol Mechanic</option>
                                        <option>Diesel Mechanic</option>
                                        <option>Student</option>
                                        <option>Accountant</option>
                                        <option>Lab Technician</option>
                                        <option>Drafts man</option>
                                        <option>Auto-Cad Operator</option>
                                        <option>Painter</option>
                                        <option>Tailor</option>
                                        <option>Welder</option>
                                        <option>X-ray Technician</option>
                                        <option>Lecturer</option>
                                        <option>A.C Technician</option>
                                        <option>Business</option>
                                        <option>Cleaner</option>
                                        <option>Security Guard</option>
                                        <option>House Maid</option>
                                        <option>Manager</option>
                                        <option>Hospital Cleaning</option>
                                        <option>Mechanic</option>
                                        <option>Computer Operator</option>
                                        <option>House Driver</option>
                                        <option>Driver</option>
                                        <option>Cleaning Labour</option>
                                        <option>Building Electrician</option>
                                        <option>Salesman</option>
                                        <option>Plastermason</option>
                                        <option>Servant</option>
                                        <option>Barber</option>
                                        <option>Residence</option>
                                        <option>Shepherds</option>
                                        <option>Employment</option>
                                        <option>Fuel Filler</option>
                                        <option>Worker</option>
                                        <option>House Boy</option>
                                        <option>House Wife</option>
                                        <option>RCC Fitter</option>
                                        <option>Clerk</option>
                                        <option>Microbiologist</option>
                                        <option>Teacher</option>
                                        <option>Helper</option>
                                        <option>Hajj Duty</option>
                                        <option>Shuttering</option>
                                        <option>Supervisor</option>
                                        <option>Medical Specialist</option>
                                        <option>Office Secretary</option>
                                        <option>Technician</option>
                                        <option>Butcher</option>
                                        <option>Arabic Food Cook</option>
                                        <option>Agricultural Worker</option>
                                        <option>Service</option>
                                        <option>Studio CAD Designer</option>
                                        <option>Financial Analyst</option>
                                        <option>Cabin Appearance (AIR LINES)</option>
                                        <option>Car Washer</option>
                                        <option>Surveyor</option>
                                        <option>Electrical Technician</option>
                                        <option>Waiter</option>
                                        <option>Nursing helper</option>
                                        <option>Anesthesia technician</option>
                                        <option>Marvel</option>
                                        <option>Construction worker</option>
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
