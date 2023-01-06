import {useEffect, useState} from 'react'

import axios from 'axios'
import {Boats} from "./components/Boats"
import {Boat} from "./components/Boat"
import {Link, Route, Routes, useMatch} from "react-router-dom"
import {AddBoatForm} from "./components/AddBoat";

const padding = {padding: 5}

// const Home = () => (<div><h2>Boats</h2></div>)

const App = () => {
  const serverUrl = 'http://localhost:3001/api/boats'
  const [boats, setBoats] = useState([])

  useEffect(() => {
    axios
      .get(serverUrl)
      .then(response => {
        setBoats(response.data)
      })
  }, [])

  const match = useMatch('/boats/:boat_name')
  const matchedBoat = match
    ? boats.find(boat => boat.boat_name === Number(match.params.boat_name))
    : null

  return (
    <div>
      <div>
        {matchedBoat}
       <Link style={padding} to={"/"}>Home</Link>
        <Link style={padding} to={"/boats"}>Fleet</Link>
        <Link style={padding} to={"/add"}>Add a Boat</Link>
      </div>
      <Routes>
        <Route path="/boats/:boat_name" element={<Boat boat={matchedBoat}/>}/>
        <Route path="/boats" element={<Boats boats={boats}/>}/>
        <Route path="/" element={<AddBoatForm/>}/>
        <Route path="/add" element={<AddBoatForm/>}/>
      </Routes>
    </div>
  )
}
export default App;
