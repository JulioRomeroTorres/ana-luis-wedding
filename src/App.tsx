import './App.css'

function App() {

  return (

    <audio autoPlay={true} loop={true} controls={false} style={{display: 'inline'}}>
      <source src="/src/assets/music/music.mpeg" type="audio/mpeg" />
    </audio>
  )
}

export default App
