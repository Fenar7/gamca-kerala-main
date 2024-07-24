import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Celica Medical Center", address:"Valmattam State, Ravipuram M G Road, 682 915 Cochin Kerala – India"},
        {name:"Delmon Clinic & Diagnostic Centre", address:"First Floor Bab Towers M.G. Road Opposite shipyard - Cochin - 5 INDIA"},
        {name:"Dr. Kunhalu’s Nursing Home", address:"Ernakulam, Kochi 682011 KERALA – INDIA"},
        {name:"Gulshan Medicare - Cochin", address:"Door 41/3714 Amulya Street, Opp Federal Bank Off Benerji Road, Ernakulam Cochin - India"},
        {name:"Medline Diagnostic Center", address:"6993 C & CI, Devaki Krishna Building, TD East Sinnidhi Road, Cochin – 682035, India"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Cochin : Book Your Appointment Now"
      placename="Cochin "
      secondtitle="GCC Medical centers in Cochin "
      paragraph="Gamca Medical Cochin has 5 (Five) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical"
      image1="/cochin-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
