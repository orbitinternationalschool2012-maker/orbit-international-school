"use client";

import Notice from "./components/Notice"
import BannerGal from "./components/BannerGal"
import AdmissionGoingOn from "./mainpage/AdmissionGoingOn";
import AboutUs from "./mainpage/AboutUs";
import PrincipalsQuote from "./mainpage/PrinipalsQoute";
import Achievements from "./mainpage/Achivements";
import Location from "./mainpage/Location";
import CulturalActivities from "./mainpage/CulturalActivities";
import Blogs from "./mainpage/Blogs";
const Page = () => {
  return (
    <div>
      <div>
        <Notice />
        <BannerGal />
        <AdmissionGoingOn />
        <AboutUs />
        <PrincipalsQuote />
        <Achievements />
        <Location />
        <CulturalActivities />
        <Blogs />
      </div>
    </div>
  )
}

export default Page
