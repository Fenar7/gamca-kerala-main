import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Salama Diagnostic Centre", address:"c/o Saleema Hospital, Malappuram Dist. Thalakkadathur, Tirur 676103, Kerala India"},
        {name:"Core Diagnostic Centre", address:"Iris Tower, Tirur 676 101 India"},
        {name:"Modern Diagnostics Health Check up Centre", address:"c/o Savera Hospital Complex Ezur Road Tirur Malapuram district Kerala 676101 INDIA"},
        {name:"Newell Diagnostics", address:"Nazeem Commercial Complex Malappuram Road Tirur 676 101 Malappuram District INDIA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Tirur: Book Your Appointment Now"
      placename="Tirur"
      secondtitle="GCC Medical centers in Tirur"
      paragraph="TIRUR has 4 (Four) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just 
clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment
****Please note center will assign automatically 
you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service."
      image1="/tirur-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
