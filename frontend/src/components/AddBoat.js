import axios from "axios";
import {useEffect, useState} from "react";

export const AddBoatForm = () => {
  const [newBoat, setNewBoat] = useState({})

  const effect = () => {
    console.log(" top of effect newBoat is ", newBoat);
    if (newBoat.boat_name && newBoat.boat_type) {
      axios
        .post("http://localhost:3001/api/boats", newBoat)
        .then(() => {
          console.log(" after axios posted newBoat ", newBoat)
        })
    }
  }

  useEffect(() => effect(), []);

  const addBoat = event => {
    const boatName = event.target.boat_name
    const boatType = event.target.boat_type
    console.log("event ", event)
    console.log("event.value ", event.value)
    console.log("boat_name ", boatName)
    console.log("boat_type ", boatType)
    const boatObject = {
      "boat_name": newBoat.boat_name,
      "boat_type": newBoat.boat_type
    }
    setNewBoat(boatObject)
  }


  const handleBoatNameChange = event => {
    console.log("- handleBoatNameChange")
    event.preventDefault()
    newBoat.boat_name = event.target.value
    setNewBoat(newBoat)
    console.log(" newBoat ", newBoat)
    console.log("+ handleBoatNameChange")
  }

  const handleBoatTypeChange = event => {
    console.log("+ handleBoatTypeChange")
    event.preventDefault()
    newBoat.boat_type = event.target.value
    setNewBoat(newBoat)
    console.log(" newBoat ", newBoat)
    console.log("- handleBoatTypeChange")
  }
  return (

    <>
      <h1>Add a Boat to the Fleet</h1>
      name: {newBoat.boat_name}
      type {newBoat.boat_type}
      <form onSubmit={addBoat}>
        <input id="inputBoatName"
               type="text"
               value={newBoat.boat_name}
               onChange={handleBoatNameChange}
        />

        <input id="inputBoatType"
               type="text"
               value={newBoat.boat_type}
               onChange={handleBoatTypeChange}
        />
        <input type="submit" value="Add"/>
      </form>
    </>

  )
}