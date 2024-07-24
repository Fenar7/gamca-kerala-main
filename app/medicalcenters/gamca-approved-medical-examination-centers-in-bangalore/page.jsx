import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Majeed Polyclinic", address:"No,9 PRISM ARCADE 2ND FLOOR MILLERS TANK BUND ROAD OPP. MAHAVEER JAIN HOSPITAL, VASANTH NAGAR, BANGALORE-560052"},
        {name:"Richmond Medicare", address:"D/No. 2 B, 32, Alsa Glenridge, Langford Road, Shanthinagar, ( Opp. St. Joseph College ),Bangalore,India-+91-080-22"},
        {name:"Sanghi Medical Center Pvt Ltd - Bangalore", address:"90/1b King Cross, Ist Floor Outer Ring Road Near Innovartive Multiplex, Marathall, Banglore 37"},
        {name:"Shifa Diagnostic Center", address:"No. 11 & 12, Ist floor P.S. Plaza, Jawhar Platform Road Shshadripuram Karnataka"},
        {name:"The Care One Diagnostic Center", address:"Ground floor 39 Dickenson Road Cross"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Bangalore : Book Your Appointment Now"
      placename="Bangalore "
      secondtitle="GCC Medical centers in Bangalore "
      paragraph="Gamca Medical Bangalore has 5 (Five) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service"
      image1="/banglore-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
