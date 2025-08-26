import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Welcome } from './components/Welcome.tsx'
import { CarouselSection } from './sections/PhotoCarousel.tsx'
import { DateSection } from './sections/DateSection.tsx'
import { InfoCards } from './components/CardsInformationWrapper.tsx'
import { Timeline } from './components/timeline/Timeline.tsx'
import { Rewards } from './components/Rewards.tsx'
import { CouplePhoto } from './components/CouplePhoto.tsx'
import { EventReservation } from './sections/EventReservation.tsx'
import { Attendance } from './components/Attendence.tsx'
import { Contact } from './components/Contact.tsx'
import { CountdownSection } from './sections/CountdownSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Welcome />
    <DateSection />
    { /*<EventReservation />
    <CountdownSection /> */}
    <InfoCards />
    <Timeline />
    <CarouselSection />
    <Rewards />
    <CouplePhoto />
    <Attendance />
    <Contact />
    
  </StrictMode>,
)
