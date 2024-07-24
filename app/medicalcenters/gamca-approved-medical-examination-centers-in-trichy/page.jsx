import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Salama Diagnostic Centre", address:"IInd Floor – GVR Complex No. 6-A, Lawsons Road Cantoment Trichirapalli – 620 001 Tamil Nadu – India"},
        {name:"Gulshan Medicare - Trichy", address:"No. 2/ C-35, Fifth Cross, Fort Station Road, Thillai Nagar, Trichirapalli – 620 018 TamilNadu – India"},
        {name:"Shifa Health Centre", address:"36, 37 Ist Floor, Faj Park Amarar Jeeva Street Trichy Chennai bypass Road, T.V.S. Tollgate, Trichirapalli – 620 020, Tamil Nadu – INDIA"},
        {name:"Shivani Diagnostic Centre", address:"Door # 168, Ist Floor JJ Towers Near Old Jupitor Theatre Madurai Road- Trichiripalli 620008 Tamil Nadu – INDIA"},
        {name:"Ultimed Dianostics", address:"2nd Floor,B Block 4A , Amalorpavi Complex Opp national college, Dindigul road Tiruchirappali – 620001, India"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Trichy: Book Your Appointment Now"
      placename="Trichy"
      secondtitle="GCC Medical centers in Trichy"
      paragraph="Gamca Medical Trichy has 5 (Five) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service"
      image1="/trichy-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
