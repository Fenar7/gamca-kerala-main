import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Asian Diagnostic Centre", address:"121/ 10, 2nd Floor, Ganj Trade Center Building, Capper Road, Hazratganj, Lucknow – India"},
        {name:"Atlantis Diagnostic Centre", address:"1st Floor, Cyber Heights, TC/G-2/2 & TC/G-5/5, Vibhuti Khand, Near Indira Gandhi Pratishthan Gate No.2, Gomti Nagar, Lucknow – India."},
        {name:"Bachan Medical Centre", address:"TC-14,Vibhuti Khand, Gomti Nagar, Lucknow – India"},
        {name:"DKH Diagnostics - Lucknow", address:"B-2/8, Vineet Khand, Gomti Nagar, Lucknow – India"},
        {name:"Galaxy Medical Centre", address:"1/44, Viram Khand, Gomti Nagar, Lucknow – 226010, India"},
        {name:"HEFCO Medicare & Research Centre", address:"G.F., ELDELCO Corporate Chambers – II, Vibhuti Khand, Gomti Nagar, Lucknow – 226010, India"},
        {name:"Medigulf Diagnostic Centre", address:"C.P.-19, Viraj Khand, Near Sahara Hospital, Gomti Nagar, Lucknow – 226010, India."},
        {name:"New Lucknow Diagnostic Centre", address:"New Lucknow Diagnostic Center B-1/68 Sector – B Aligang, Lucknow 226024"},
        {name:"Puraniya Diagnostic Centre", address:"1/4, Priyadarshni, Sector-C, Sitapur Road, Puraniya, Lucknow – India."},
        {name:"Reza Medical Center", address:"B-43, Near Mandir Marg, Sector A, Mahanagar, Lucknow – 226006, Uttar Pradesh, India"},
        {name:"Sessa Medical Centre", address:"C-962/63, Sector-B, Behind Beej Nigam Office, Mahanagar, Lucknow-226006 India"},
        {name:"Total Health Medical Centre", address:"Azmi Apartment, 1st Floor, 739/743, Kanchanpur Matiyari,Chinhat, Lucknow-226028, UTTARPRADESH, INDIA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Lucknow: Book Your Appointment Now"
      placename="Lucknow"
      secondtitle="GCC Medical centers in Lucknow"
      paragraph="Gamca Medical Lucknow has 12 (Twelve) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for traveling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.?

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service.
 

We are Trusted Partner for GAMCA Medical in Lucknow
Welcome to our premier center GAMCA Medical Lucknow, your one-stop destination for all your Gulf Cooperation Council (GCC) visa medical examination needs. We take pride in offering a seamless and efficient experience to ensure your visa application process goes smoothly.

Our expert healthcare professionals are dedicated to conducting comprehensive medical examinations, including blood tests, X-rays, and other essential screenings, all under one roof. We understand the significance of timely results and strive to provide you with accurate reports promptly.

Conveniently located in Lucknow, we make it easy for you to fulfill your GAMCA medical requirements. Put your trust in us, and we'll handle your visa medical needs, allowing you to focus on your upcoming Gulf destination adventure. Count on us for a hassle-free journey to the GCC."
      image1="/lucknow-image.jpeg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
