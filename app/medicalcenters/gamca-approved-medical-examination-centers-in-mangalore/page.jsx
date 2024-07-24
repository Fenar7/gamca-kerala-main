import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Medistar Diagnostic Centre", address:"2/21-1640 Lady Hill Urva, Lalbaugh, Near Mangla Stadium, Next to HPCL Petrol Pump, Mangalore – 575 006, India"},
        {name:"National CT Scanner & Diagnostic Center", address:"Door # 18-1-1/39, 1/40, 141, 1/42 Fortune Building, Avery Junction, Falnir Road,"},
        {name:"Shivam Medical Center", address:"Al-Rahaba Plaza, C-9, Ist Floor Nelli Kai Road, Manglore 575001"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Mangalore: Book Your Appointment Now"
      placename="Mangalore"
      secondtitle="GCC Medical centers in Mangalore"
      paragraph="Mangalore has 3 (Three) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just 
clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment
****Please note center will assign automatically 
you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service."
      image1="/mangalore-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
