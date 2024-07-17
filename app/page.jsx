'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Hero from "@/components/Home/Hero/Hero";

export default function Home() {
  return (
   <div>
     <Hero
      title="Register for Your GAMCA Medical Test Easily Online"
      subtext="Register for Your GAMCA Medical Test Online Hassle-Free and Ensure a Smooth Experience Every Step of the Way"
     />
   </div>
  );
}
