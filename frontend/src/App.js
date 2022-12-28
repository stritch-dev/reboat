import {useEffect, useState} from 'react'

import axios from 'axios'
import {Boats} from "./components/Boats";
import {Boat} from "./components/Boat";
import {Link, Route, Routes, useMatch} from "react-router-dom";

const padding = { padding: 5 }

const Home = () => ( <div><h2>Boats</h2></div> )
const Away = () => ( <div><h3>Away</h3></div>)

const App = () => {
  const serverUrl = 'http://localhost:3001/api/boats'
  const [boats, setBoats] = useState([])

  useEffect(() => {
    axios
      .get(serverUrl)
      .then(response => {
        console.log('promise fulfilled')
        setBoats(response.data)
        console.log("react app useEffect loading data from express", response.data)
      })
  }, [])

  console.log("boats now set to " , boats)
  console.log("there are " + boats.length + " boats")

  const match = useMatch('/boats/:boat_name')

  const boat = match
    ? boats.find(boat => boat.boat_name === Number(match.params.boat_name))
    : null

  return (
    <div>
      <div>
        {boat}
        <Link style={padding} to={"/"}>home</Link>
        <Link style={padding} to={"/boats"}>boats</Link>
        <Link style={padding} to={"/away"}>away</Link>
      </div>
      <Routes>
        <Route path="/api/boats/:boat_name" element={<Boat boat={boat} />} />
        <Route path="/boats" element={<Boats boats={boats}/>} />
        <Route path="/" element={<Home />} />
        <Route path="/away" element={<Away />} />
      </Routes>
    </div>
  )
}
export default App;
