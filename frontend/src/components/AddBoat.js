import axios from "axios";
import {useEffect, useState} from "react";




export const AddBoatForm = () => {

  useEffect(() =>   effect()  , []);

  const [newBoat, setNewBoat] = useState({})

const effect = () => {
  console.log("posting with effect...")
  axios
    .post("http://localhost:3001/api/boats", {"boat_name": "frost-cold", "boat_type": "gallop"})
    .then(() => {
      console.log("in axios then")
    })
  console.log("after axios post")
}

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
    console.log("boatObject", boatObject)

    axios
      .post("http://localhost:3001/api/boats", boatObject)
      .then(() => {
        console.log("in axios post")
        setNewBoat('')
      })
    console.log("after axios")

  }





  const handleBoatNameChange = event => {
    console.log("- handleBoatNameChange")
    event.preventDefault()
    newBoat.boat_name = event.target.value
    setNewBoat(newBoat)
    console.log(" boat name", newBoat.boat_name)
    console.log("+ handleBoatNameChange")
  }

  const handleBoatTypeChange = event => {
    console.log("+ handleBoatTypeChange")
    event.preventDefault()
    newBoat.boat_type = event.target.value
    setNewBoat(newBoat)
    console.log(" boat type", newBoat.boat_type)
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

        <input id="inputBs.atType"
               type="text"
               value={newBoat.boat_type}
               onChange={handleBoatTypeChange}
        />
        <input type="submit" value="Add"/>
      </form>
    </>

  )
}