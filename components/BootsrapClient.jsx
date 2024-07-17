"use client"

import { useEffect } from "react"

function BootsrapClient() {
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    },[])
  

    return null
}

export default BootsrapClient
