import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Haramain Diagnostic Centre", address:"Hamid Building 3rd Floor, New No. 251, (Old No. 191) Anna Salai, (Mount Road) Chennai 600 006 INDIA"},
        {name:"Al-Saudi Clinical Servicies", address:"26, Sardar Patel Road 2nd Floor, Adyar, Chennai- 600 020 INDIA"},
        {name:"Gulshan Medicare - Chennai", address:"5, Judge Jumbulingam Road, Mylapore, Chennai 600 004 TAMILNADU, INDIA"},
        {name:"Huma Specialists Hospital & Research Centre", address:"Division 786 Anna Salal, Nandanam Chennai - 600 0 INDIA"},
        {name:"M S Clinic", address:"No. A 1/16 Chinnappa Rother Street Triplican, Chennai 600 005 India"},
        {name:"Mariam Diagnostic Centre", address:"Old No 8, New No.19A,Thiruvalluvar Salai, Teynampet, Chennai 600 018.,Chennai,India-91 44 2433"},
        {name:"Marwa Medicare & Diagnostic Centre", address:"Plot # 62, Door # 1, Bharathi Nagar 4th Street, Off North Usman Road Opp. Croma – Kenses Towers T. Nagar Chennai – India"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Chennai : Book Your Appointment Now"
      placename="Chennai "
      secondtitle="GCC Medical centers in Chennai "
      paragraph="Gamca Medical Chennai has 7 (Seven) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.?

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service"
      image1="/chennai-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
