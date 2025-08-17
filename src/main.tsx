import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Countdown } from './components/Countdown.tsx'
import { Welcome } from './components/Welcome.tsx'
import { PhotoCarousel } from './components/PhotoCarousel.tsx'
import { DateSection } from './components/DateSection.tsx'
import { InfoCards } from './components/InfoCards.tsx'
import { Schedule } from './components/Schedule.tsx'
import { Rewards } from './components/Rewards.tsx'
import { CouplePhoto } from './components/CouplePhoto.tsx'
import { PlayList } from './components/PlayList.tsx'
import { Attendance } from './components/Attendence.tsx'
import { Contact } from './components/Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Welcome />
    <PhotoCarousel />
    <DateSection />
    <InfoCards />
    <Schedule />
    <Countdown />
    <Rewards />
    <CouplePhoto />
    <PlayList />
    <Attendance />
    <Contact />
    
  </StrictMode>,
)
