import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"AL AROUBA MEDICAL CENTER", address:"S.COMPLEX 1ST FLOOR RAJIVNAGAR"},
        {name:"AL-BALUSHI MEDICAL CENTRE", address:"JMD TOWER, GROUND FLOOR NEW BYPASS ROAD, KHEMNICHAK, PATNA"},
        {name:"Al-Jazeera Medicare", address:"2nd Floor,Abhilasha Enclave opposite Passport Office, Ashiana-Digha Road,Patna"},
        {name:"MBS Medical Center", address:"Galaxy Enclave, Near Big Bazar Budh Marg, Besides KP Mall"},
        {name:"MOHAMMDI HEALTH CARE SYSTEMS PVT. LTD.", address:"E-22, Chakrapani, P.C. Colony, Kankarbagh Patna"},
        {name:"Sara Diagnostic Centers LLP", address:"Shailja Tower, First Floor, Office No. 07, Kankarbagh, Patna, India"},
        {name:"SHIVVIR DIAGNOSTIC CENTRE", address:"Ground Floor, Anjaneya's Atmaj's Awesome Galleria, Main Gola Road, Opp. Club Easy Day, Patna"},
        {name:"UNIVERSAL MEDICARE", address:"Universal Tower, Near Holy Family Hospital, Kurji Mor"},
        {name:"YOURCENTER DIAGNOSTIC SERVICES", address:"RAJENDRA COMPLEX NEW BYPASS,ANISABAD,PATNA"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Patna: Book Your Appointment Now"
      placename="Patna"
      secondtitle="GCC Medical centers in Patna"
      paragraph="Gamca Medical Patna  has 9 (Nine) Gamca Approved Medical Centers available for all Work & Family visa candidates to conduct their medical examination for travelling to GCC countries such as (Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, UAE) schedule your appointment now to conduct your medical in Gamca Approved Medical Center just clicks on book appointment button fill all require details in form as per your passport select your city and submit the form & make the payment ****Please note center will assign automatically you can’t make choices.

From 1st April 2018, GAMCA (GCC) has opted for online medical slip generator and payment methods. The Candidates can log onto the GAMCA website and generate their own medical slip for the medical checkup by means of online payment, or they can take our service"
      image1="/patna-image.jpg"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
