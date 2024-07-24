import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Medina Medical Centre", address:"AL-MEDINA MEDICAL CENTRE,8/1360-D,E,F,G-FIRST FLOOR,'KENZ',BEHIND MALABAR GOLD,CALICUT ROAD MANJERI,MALAPPURAM DISTRICT DISTRICT,KERALA,INDIA-PIN-676121.,Manjeri,India-+91-483276"},
        {name:"Focus Medical Clinic", address:"Korambayil Corporate Mall Calicut Road, Majeri 676 121 Kerala INDIA"},
        {name:"Ibnu Seena Medical Centre", address:"16/89 Calicut Road Manjeri - Kerala 676 121 INDIA"},
        {name:"Meraj Medical Center", address:"Tharif Tower, Ground Floor Opp. Kseb Office – Calicut Road Manjeri 676121 INDIA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Manjeri: Book Your Appointment Now"
      placename="Manjeri"
      secondtitle="GCC Medical centers in Manjeri"
      paragraph="Manjeri has 4 (Four) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just 
clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment
****Please note center will assign automatically 
you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service."
      image1="/manjeri-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
