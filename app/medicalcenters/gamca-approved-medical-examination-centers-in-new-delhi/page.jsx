import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Al-Khaleej Diagnostic Centre", address:"M-2, 2nd Floor, South Extension, Part II, New Delhi 110049 INDIA"},
        {name:"Corporate Diagnostic Centre - New Delhi", address:"1st Floor, CC-28, Nehru Enclave New Delhi, India"},
        {name:"Gulf Medical Centre", address:"Third Floor, Hemkunt Tower, 6 Rajendra Place, New Delhi 110008 INDIA"},
        {name:"Gulshan Medicare - New Delhi", address:"G-2, South Extn. Part II New Delhi 110049 INDIA"},
        {name:"Health Plus Diagnostic Centre", address:"S-63, Greater Kailash Part I, New Delhi - 110048 INDIA"},
        {name:"HEFCO, Medicare & Research Centre", address:"1/1-A, G.F. & F.F. Bharat Nagar New Friends Colony New Delhi 110065 INDIA"},
        {name:"Lama Medical Centre", address:"R-4, Khirki Extension, Near Women Polytechnic – Malviya Nagar, New Delhi 110017 - India"},
        {name:"Mayfair Diagnostic Clinic", address:"28-30a, Ground Floor, Dlf Prime Towers, Okhla Phase-1, New Delhi – India"},
        {name:"Medivisa Diagnostic Centre", address:"G-2 ,Delhi Blue Apartment , 2, Ring Road , Safdarjung , New Delhi - 110029"},
        {name:"New Delhi Medical Centre", address:"Ist Floor, Hemkunt House, 6, Rajendra Place, New Delhi – 110008, INDIA"},
        {name:"Paramount Diagnostic Centre", address:"Upper Ground Floor Building No. E-49/5, Okhla Phase 2, New Delhi – 110020"},
        {name:"Sanghi Medical Centre - New Delhi", address:"A-7 Kailash colony (First Floor) (Next to Kailash colony metro station), New Delhi – India"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Delhi: Book Your Appointment Now"
      placename="Delhi"
      secondtitle="GCC Medical centers in Delhi"
      paragraph="Gamca Medical Delhi has 13 (Thirteen) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service."
      image1="/delhi-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
