import React, { useState, useEffect } from "react";
import { Header } from "../components/Header/Header";
import Features from "../components/Features/Features.jsx"
import { Roadmap } from '../components/Roadmap/Roadmap'
import { Team } from '../components/Team/Team'
import JsonData from "../data/data.json";
import { Gallery } from "../components/Gallery/Gallery";
import { Testimonials } from "../components/Testimonials/Testimonials";
export default function Home() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, [])
  return (
    <div>
<Header data={landingPageData.Header}/>
      <Features data={landingPageData.Features} />
      <Roadmap data={landingPageData.About}/>
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      
    </div>
  )
}


