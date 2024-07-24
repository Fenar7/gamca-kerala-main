import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Shafa Diagnostic Centre", address:"Yatheemkhana Shopping Complex Ist Floor, Vallakkadvu P O Trivendrum 695008 INDIA"},
        {name:"Capital Diagnostic Services", address:"Twinkle Plaza Panavilla Jn., Thycad Post Trivendrum 695 014 Kerala I INDIA"},
        {name:"Dr. Nathani’s Diagnostic Clinic", address:"Chalakizhy Lane Pattom P.O. Trivendrum - 695 004 INDIA"},
        {name:"Health Care Diagnostic Center", address:"Siddiqui House, T.C. 26/875 (3), Panavila Jn, Thycaud P.O. Trivandrum 695014 - India"},
        {name:"Meditrust Diagnostic & Laboratory", address:"Spectrum Chamber TG 4/2563 Kuravankonam Pattom Kowadiar Road Kowadiar P O Trivendrum Trivendrum 695 014 Kerala 1 India"},
        {name:"Mohammdi Healthcare Systems Pvt Ltd", address:"Mamatha Orchid, Main Road Between Pattoor Junction & General Hospital, Pallayam (Petha), Airport Road TC No-94/2748 Pattoor, Trivandrum, Kerala-695011 – India."},
        {name:"Puram Medical Centre", address:"Ground floor, S. P. Bhagya Tower, Attakulangra, Killippalam By-pass Road, Trivandrum – 695023, India."},
        {name:"Sanghi Medical Centre", address:"KRS Tower, Kottamughal, Nalanchira, Trivandrum 695015, Kerala – India."},
        {name:"Your Center Diagnostic Services", address:"Blue Diamonds, Opp. Amman Kovil, Thycaud P.O – Trivandrum, India"},
        {name:"ZIDAAN MEDICAL CENTER", address:"22/3720, Shree Dhanya Apex, Ground Floor, Elankom garden lines, Near Indira Bhavan, Vellayambalam, Sasthamangalam, Trivandrum, Kerala 695010 – India."},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Triuvananthapuram: Book Your Appointment Now"
      placename="Triuvananthapuram"
      secondtitle="GCC Medical centers in Triuvananthapuram"
      paragraph="Gamca Medical Thiruvananthapuram has 10 (Ten) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service"
      image1="/triuvananthapuram-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
