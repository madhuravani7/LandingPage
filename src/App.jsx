import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {

  let heroData = [
    {
      text1: "Dive into",
      text2: "your life"
    },
    {
      text1: "Indulge",
      text2: "your dreams"
    },
    {
      text1: "buckle up",
      text2: "your passion"
    }
  ]

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus = {playStatus} heroCount={heroCount} />
      <Navbar/>
    </div>
  )
}

export default App