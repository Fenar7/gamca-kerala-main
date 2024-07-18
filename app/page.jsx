'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Hero from "@/components/Home/Hero/Hero";
import AboutSection from "@/components/Home/AboutSection/AboutSection";
import MedicalCentres from "@/components/Home/MedicalCentres/MedicalCentres";
import SmContact from "@/components/Home/SmContact/SmContact";
import DocumentsRequired from "@/components/Home/DocumentsRequired/DocumentsRequired";

export default function Home() {
  return (
   <div>
     <Hero
      title="Register for Your GAMCA Medical Test Easily Online"
      subtext="Register for Your GAMCA Medical Test Online Hassle-Free and Ensure a Smooth Experience Every Step of the Way"
     />

     <AboutSection
      title="About Us"
      description="
        At [Your Website Name], we pride ourselves on being your trusted partner in the GAMCA medical examination process. With years of experience and a dedication to excellence, we understand the importance of providing a seamless and efficient experience for our users. Our team is committed to simplifying the registration process, ensuring that you can easily schedule your GAMCA medical test online with confidence. Whether you're a first-time applicant or a seasoned expatriate, we're here to support you every step of the way. Trust [Your Website Name] for all your GAMCA medical examination needs and embark on your journey to Gulf employment with peace of mind.
        From 1st April 2018, GAMCA has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service which is Rs 1500. The website will provide you assistance with the name and address of the medical Centre that will conduct your medical checkup.
      "
     />

     <MedicalCentres
      title="GCC Medical Centers"
      points={["Bahrain Medical Centre","Kuwait Medical Centre","Oman Medical Centre","Qatar Medical Centre","Saudi Medical Centre"]}
     />

     <SmContact
      title="Do you need GAMCA Medical Appointment Service"
      phone="8943319888"
      email="fenar@gmail.com"
     />

     <DocumentsRequired/>


   </div>
  );
}
