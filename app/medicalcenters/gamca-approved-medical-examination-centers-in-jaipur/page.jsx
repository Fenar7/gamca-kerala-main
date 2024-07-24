import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"ACE Diagnostics", address:"15-16 Janpath, Shysm Nagar – Jaipur 302019 – India"},
        {name:"Zaff Jay Life Line Diagnostic Centre", address:"K. R. Plaza, First Floor, Plot No. 378, Guru Jambeshwer Nagar - A, Queens Road, Vaishali nagar, Jaipur - India."},
        {name:"A. K. Diagnostic Center", address:"Plot No A-45 Shastri Nagar Main Road. Jaipur Rajasthan PIN 302016 INDIA"},
        {name:"Advanced Diagnostic Centre", address:"1st Floor,Rotary Bhawan, Off.Church Road,M.I.ROAD, Behind Sangam Tower, Jaipur-302001, India."},
        {name:"Royale Diagnostic Centre", address:"W-8 Park stree M I road Jaipur 302011 INDIA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Jaipur: Book Your Appointment Now"
      placename="Jaipur"
      secondtitle="GCC Medical centers in Jaipur"
      paragraph="Has 5 (Five)
Discover GAMCA Approved Medical Centers, your gateway to seamless medical examinations for GCC visa candidates. Whether you're planning to travel to Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, or the UAE, our centers are here to ensure your health clearance with ease. Simply schedule your appointment now and undergo your medical examination at a GAMCA Approved Medical Center nearest to you.

Starting April 1st, 2018, GAMCA (GCC) has transitioned to an online medical slip generator and payment system, offering candidates the convenience of generating their own medical slip and making payments online. Candidates can access the GAMCA website to generate their medical slip and complete their payment electronically. Alternatively, you can avail of our services for assistance with the process.

Please note that center assignments are automatic, and candidates cannot select their preferred center. Simply click on the 'book appointment' button, fill in the required details in the form according to your passport, select your city, and submit the form to initiate the process. Trust GAMCA Approved Medical Centers for a hassle-free experience in securing your health clearance for GCC travel."
      image1="/jaipur-image.png"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
