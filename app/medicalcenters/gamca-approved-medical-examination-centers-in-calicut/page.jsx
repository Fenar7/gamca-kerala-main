import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Sharq Diagnostic Centre", address:"Sheraton Complex. 2nd Floor Near Ganapath Boys High School, Chalappuram Calicut – 673002 INDIA"},
        {name:"Calicut Hospital & Nursing Home", address:"Near 2nd Rly. Gate, Court Road, Calicut – 673001, Kerala – INDIA"},
        {name:"Koyas Hospital", address:"Cheruvannur, P. O. Feroke Calicut – 673631, INDIA"},
        {name:"Manapad Clinic & Diagnostic Center", address:"Opp: Govt. Arts & Science College Meenchanda, Calicut – 673018, India."},
        {name:"Western Hospital & Nursing Home", address:"Mavoor (Indira Gandhi Road) Near KSRTC Bus Stand Calicut 673001 INDIA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in CALICUT : Book Your Appointment Now"
      placename="CALICUT "
      secondtitle="GCC Medical centers in CALICUT "
      paragraph="CALICUT has 5 (Five) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just 
clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment
****Please note center will assign automatically 
you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service."
      image1="/calicut-image.avif"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
