import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"A to Z Diagnostic Centre", address:"1st Floor, Harchandrai House 81, Queens Road, Marine Lines (E), Mumbai - India"},
        {name:"Al Amal Diagnostic Centre", address:"Kanakia Zillion ,A wing, 101/102, 1st, floor, BKC Annex, Junction of CST Road, & LBS Marg, Kurla, Mumbai - India"},
        {name:"Al-Salaam Diagnostics", address:"Commercial Premises No.01, first Floor, ‘C’ Wing, Greenstone Heritage, Opp. Haj House, M.R.A. Road, Mumbai - India"},
        {name:"Ashwini Clinic", address:"1st Floor, Bhupesh Gupta Bhawan, 85, Sayani Road, Leningrad Chowk, Prabhadevi, Mumbai-400025. India"},
        {name:"Bahrainwala’s Super Speciality Clinic", address:"Hermes House 2nd Floor,B-3 Mama Paramanand Marg, Opera House,Near Charni Rd Station. Mumbai 4000 004 INDIA,Mumbai,India"},
        {name:"Bhatia Medical Centre", address:"7, Geeta A. Ground Floor, Ramabai Pandit Road, Gamdevi, Mumbai – 400 007, India."},
        {name:"Chouhan Clinic", address:"101/105 LADY RATAN TATA MEDICAL & REASERCH CENTRE ,10TH FLOOR,NEAR P.V.M. GYMKHANA OPP.COOPERAGE FOOTBALL GROUND MUMBAI-400021"},
        {name:"Clinical Diagnostic Centre", address:"First Floor, Mahila Vikas Mandal Building, Plot 1, Jagannath Bhosale Road Near Mantralaya, Nariman Point Mumbai 400-021, India."},
        {name:"Dr. Alva’s Clinic", address:"Ist. Floor, Room No. 12 & 13 The Enterpremises – Co-operative Society Prabhadevi Estate 409 Veer Savarkar Marg. Next to Kohinoor Park hotel Prabhadevi,"},
        {name:"Dr. Padaria’s Medical Consultancy Services", address:"1st floor, Elegant Building, Next to Mumbai Central Railway Station, Dr.A.N.Nair Road Mumbai 400011"},
        {name:"Dr. Qureshi Medical Checkup Centre", address:"Mercury Apartments, Commercial Premises, 183/191 Maulana Azad Road (Duncan Road), In between Nagpada Junction and Two tank, Mumbai - 400008,Mumbai,India-Tel : 022"},
        {name:"Fulara Medicare Clinic", address:"G-B/2, Gold Coin, B Block, Ground Floor, Opp. Sobo Shopping Centre, Tardeo, Mumbai – 400034 (India)"},
        {name:"Gulshan Medicare - Mumbai", address:"107/109, Embassy Center, Nariman Point, Mumbai – India"},
        {name:"K. N. Diagnostic Centre Pvt. Ltd.", address:"1/1, Unity House, 8, Mama Parmanand Marg, Above State Bank of India, Opera House, Mumbai-400004 INDIA,Mumbai,India-"},
        {name:"Kaifak Medicare", address:"Office no. 4/18, Tulsiani Chambers Ground floor, 212 - Free Press Journal Marg, Nariman Point, Mumbai- 400 021.,Mumbai,India-"},
        {name:"Medicare Diagnostic Centre", address:"Kanakia Zillion Phase II, F Wing, 119, First Floor, L.B.S. Road, Next to Kurla Bus Depot, Kurla West, Mumbai 400 070, India"},
        {name:"Modern Diagnostics", address:"103-A, Crystal Residency, 65A Dockyard Road, Next to Mazgaon Garden, Near Dockyard Road Rly Stn (W), Mazgaon, Mumbai 400010, INDIA"},
        {name:"Mohammadi Health Care Systems", address:"Moon Building, 1st FLoor, 798 Mori Road Mahim (W) Bombay 400016."},
        {name:"Shastari Medical Center", address:"Shop No. 5/6, Ground Floor, Shivam Centrium, Opp. Kalpita Enclave, Koldongri, Andheri Sahar Road, Andheri (E), Mumbai- India."},
        {name:"Zaff Jay Medical Services", address:"1st Floor, CJ Plaza Building, Apsara Complex, Dr. Dadasaheb Bhadkamkar Marg, Grant Road (East), Mumbai 400007, Maharashtra – India"},
        {name:"Zaff Jay Medical Services", address:"1st Floor, CJ Plaza Building, Apsara Complex, Dr. Dadasaheb Bhadkamkar Marg, Grant Road (East), Mumbai 400007, Maharashtra – India"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Mumbai: Book Your Appointment Now"
      placename="Mumbai"
      secondtitle="GCC Medical centers in Mumbai"
      paragraph="Gamca Medical Mumbai has 20 (Twenty) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just  clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service.

 

Comprehensive Gamca Medical Services in Mumbai
At our state-of-the-art facility in Mumbai, we offer a comprehensive range of services to facilitate your Gamca Medical Mumbai examination. Our experienced team of healthcare professionals is dedicated to ensuring a smooth and hassle-free process for your visa application.

Our Gamca medical services include a thorough medical examination, blood tests, X-rays, and other necessary screenings, all conducted with precision and care. We understand the importance of timely results, and we strive to provide you with quick and accurate reports, helping you stay on track with your travel plans.

With a commitment to excellence and a convenient location in Mumbai, we make your Gamca medical experience efficient and stress-free. Trust us to handle all your medical requirements for visa processing, so you can focus on your journey ahead."
      image1="/mumbai-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
