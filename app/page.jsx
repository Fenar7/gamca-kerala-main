'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from '@/components/Header/Header'
import { useState } from "react";

export default function Home() {
  const[admin,setAdmin] = useState(false)
  return (
   <div>
      {!admin && <Header phone={"+91 894 3319 888"} email={"gamcakerala@gmail.com"}/>}
   </div>
  );
}
