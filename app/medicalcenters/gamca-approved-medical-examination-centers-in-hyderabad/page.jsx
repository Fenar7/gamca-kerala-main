import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Gulshan Medicare - Hyderabad", address:"GHMC NO.5-4-10, 1st Floor, Abids Bhagwandasbada, J.N Road, Besides Vijaya Bank Hyderabad, Telangana - India"},
        {name:"Hyderabad Diagnostic Center", address:"1, Richy House, Ist floor Nears Syndicate Bank Opp. Swami narayan wadi, Old Rly Crossing – Maninagar"},
        {name:"MESCO Diagnostic Centre", address:"22-1-1037/1, Zohra Hospital Darus-Shifa Hyderabad – 500 024"},
        {name:"Preethi Diagnostic Center", address:"12-2-831/88 (MIGH-5) Yousufain Complex Opp Syndicate Bank Mehdipathnam, Asif Nagar Road, Hyderabab 500 028 INDIA"},
        {name:"Salus Health care", address:"PB NO.1011, 3-6-269B, Mez-3, MYM Money center Opp. Telugu Academy Himayath Nagar Hyderabad 29 Andra Pardesh"},
        {name:"SK Medical Center", address:"9-4-84/20, M.N. Tower, Near Olive Hospital, Kakatiya Nagar Colony, Nanal Nagar, Hyderabad 500 008, Telangana, India"},
        {name:"SL Diagnostics Private Ltd", address:"1st Floor, Door. 6-2-982/101, Above HDFC Bank, Khairtabad Main Road, Hyderabad- 500004 (Telangana, India)"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Hyderabad : Book Your Appointment Now"
      placename="Hyderabad"
      secondtitle="GCC Medical centers in Hyderabad"
      paragraph="Has 7 (Seven)
Explore Gamca Approved Medical Centers in Hyderabad, offering comprehensive medical examinations for Work and Family visa candidates bound for GCC countries such as Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, and the UAE. Secure your appointment now to undergo your medical examination at one of our seven accredited centers. Simply click the 'book appointment' button, fill in the necessary details in the form to match your passport, select your city, and submit the form along with payment. Please note that center assignments are automatic and cannot be chosen.
Since April 1st, 2018, GAMCA (GCC) has implemented an online medical slip generator and payment system. Candidates can now conveniently log onto the GAMCA website to generate their own medical slip and complete the payment process online. Alternatively, you can utilize our services for assistance with the process.
Trust Gamca Approved Medical Centers in Hyderabad to facilitate a seamless experience in obtaining your health clearance for GCC travel."
      image1="/hyderbad.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
