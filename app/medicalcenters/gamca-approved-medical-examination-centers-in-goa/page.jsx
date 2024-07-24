import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Carino National C T & Diagnostic Center", address:"Lake Plaza Door # 10-12 Opp Nehru stadium - Patroda – Margoa GOA INDIA"},
        {name:"Sanghi Medical Center Pvt Ltd - Goa", address:"Alcon Chambers, Ist floor Dayanand bandokar Marg Panjim GOA 403 001 INDIA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Goa: Book Your Appointment Now"
      placename="Goa"
      secondtitle="GCC Medical centers in Goa"
      paragraph="Has 2 (Three)
Discovering Goa's two Gamca-approved medical centers, ensuring hassle-free medical examinations for both work and family visa applicants bound for GCC countries including Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, and UAE. Schedule your appointment effortlessly by clicking the 'Book Appointment' button, filling in your details as per your passport, selecting your city, and submitting the form. Please note that center assignments are automatic, and choices cannot be made. Since April 1st, 2018, GAMCA (GCC) has transitioned to an online medical slip generator and payment system. Candidates can conveniently access the GAMCA website to generate their medical slips and complete payments online, or opt for our personalized service for assistance."
      image1="/goa-image.png"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
