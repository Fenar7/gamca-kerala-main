import SingleExamCenter from "@/components/SingleExamCenter/SingleExamCenter"

function page() {
    let centeres=[
        {name:"Dr. JJ Medical Center", address:"SLS Tower, 1st Floor, F-1, Block GP, Sector-V, Salt Lake, Kolkata – India"},
        {name:"Bangur Medical Centre", address:"48/8 Bangur Avenue Jessore Rd., Kolkata – 700055, India."},
        {name:"Corporate Diagnostic Centre", address:"101, 1st Floor, Shaila Towers, J-1/16, EP & GP Block, Sector – 5, Salt Lake, Kolkata 700091 – India."},
        {name:"Hefco Medicare & Research Center - Kolkata", address:"FF, L1, GP Block, Sector – V Salt Lake, Bidhan Nagar, Kolkata – India."},
        {name:"Fulcrum Health Services", address:"Unit No. R-6, Tower 1, Millennium City IT Park, Plot No. 62, DN Block, Sector V, Saltlake, Kolkata, West Bangal – India"},
        {name:"Sara Diagnostic Center", address:"1E11, 1st Floor, East Block, Mani Casadona, Plot No. IIF/04, Action Area-IIF, Newtown, Kolkata-700135 INDIA"},
        {name:"SWARUP Medical Centre", address:"1st Floor, 1 B, Aster Tolly View, 184, Netaji Subhas Bose Road, Near Netaji Nagar, Kolkata – 700040, India"},
    ]


  return (
    <>
      <SingleExamCenter
      title="Convenient GAMCA Medical Centers in Kolkata: Book Your Appointment Now"
      placename="Kolkata"
      secondtitle="GCC Medical centers in Kolkata"
      paragraph="Has 7 (Seven)
Discover the convenience of Gamca Approved Medical Centers in Kolkata, offering seven accredited facilities for Work and Family visa candidates bound for GCC countries like Bahrain, Kuwait, Saudi Arabia, Oman, Qatar, and the UAE. Schedule your appointment now to undergo your medical examination at one of our trusted centers. Simply click the 'book appointment' button, fill in the required details in the form to match your passport information, select your city, and submit the form along with payment. Please note that center assignments are automatic and cannot be chosen.

Since April 1st, 2018, GAMCA (GCC) has introduced an online medical slip generator and payment system for enhanced convenience. Candidates now have the option to log onto the GAMCA website and generate their own medical slip, completing the payment process securely online. Alternatively, you can opt for our services to assist you through the process seamlessly.

Trust Gamca Approved Medical Centers in Kolkata to facilitate a hassle-free experience in obtaining your health clearance for GCC travel. With our expertise and dedication to customer satisfaction, we ensure a smooth journey for all visa candidates. Book your appointment now and embark on your GCC adventure with peace of mind."
      image1="/kolkata-image.png"
      bgURL="/centre-hero-img.png"
      centeres={centeres}
      />
    </>
  )
}

export default page
