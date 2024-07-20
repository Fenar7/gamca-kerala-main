import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"This is name", address:"This is Address"},
        {name:"This is name2", address:"This is Address2"},
        {name:"This is name3", address:"This is Addres3"}
    ]

    
  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Ahmedabad: Book Your Appointment Now"
      placename="Ahmedabad"
      secondtitle="GCC Medical centers in Ahmedabad"
      paragraph="Has 3 (Three)
        Discover GAMCA Approved Medical Centers, your gateway to seamless medical examinations for GCC visa candidates. Whether you're planning to travel to Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, or the UAE, our centers are here to ensure your health clearance with ease. Simply schedule your appointment now and undergo your medical examination at a GAMCA Approved Medical Center nearest to you.

        Starting April 1st, 2018, GAMCA (GCC) has transitioned to an online medical slip generator and payment system, offering candidates the convenience of generating their own medical slip and making payments online. Candidates can access the GAMCA website to generate their medical slip and complete their payment electronically. Alternatively, you can avail of our services for assistance with the process.

        Please note that center assignments are automatic, and candidates cannot select their preferred center. Simply click on the 'book appointment' button, fill in the required details in the form according to your passport, select your city, and submit the form to initiate the process. Trust GAMCA Approved Medical Centers for a hassle-free experience in securing your health clearance for GCC travel."
      image1="/ahmedabad1.png"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
