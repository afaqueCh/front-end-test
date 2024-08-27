import React from 'react';
import Navbar from './components/Navbar/Navbar';
import VideoSection from './components/Sections-Home/Video';
import CardLayout from './components/Sections-Home/Gallery';
import ExperienceSection from './components/Sections-Home/Experience';
import EventSection from './components/Sections-Home/Event';
import LocationSection from './components/Sections-Home/LocationSection';
import TicketCard from './components/Sections-Home/TicketCard/index'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <VideoSection />
    <TicketCard />
    <CardLayout />
    <ExperienceSection />
    <EventSection />
    <LocationSection />
    <Footer />
    </>
  );
}

export default App;
