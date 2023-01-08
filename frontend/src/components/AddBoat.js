import axios from "axios";
import {useState} from "react";

export const AddBoatForm = () => {
  // state persists when re-rending
  // here newBoat is the state value returned by useState()
  // here setNewBoat is the update function returned by useState()
  // here the initialState is an empty object
  // although initialState does not have to be an object
  const [newBoat, setNewBoat] = useState({})

  // With Hooks, you use state and other React feature without classes
  // Hooks are functions that "allow the reuse of stateful logic"
  // Rules of Hooks
  // Only Call Hooks
  //   from react components so that they have access to props(i.e. state variables)
  //   from top level before any return
  //   from custom hooks
  // Hooks do not stop browser from updating screen whereas componentDidMount() and componentDidUpdate() do black
  // Do Not Call Hooks
  //   in loops
  //   in conditionals
  //   in nested functions
  // Hooks do not work in classes

  const postNewBoat = () => {
    if (newBoat.boat_name && newBoat.boat_type) {
      axios
        .post("http://localhost:3001/api/boats", newBoat)
        .then(() => {
        })
    }
  }

  // these side effects like "postNewBoat" are called after rendering
  // useEffect "serves the same function as
  //   componentDidMount
  //   componentDidUpdate
  //   componentWillUnmount
  // useEffect runs AFTER every render (including the first)
  // render == update the DOM
  // useEffect(() => postNewBoat, []);

  const handleSubmit = e => {
    e.preventDefault()
    postNewBoat()
    setNewBoat(newBoat)
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
      <form onSubmit={handleSubmit}>
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