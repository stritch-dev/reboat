import {Boat} from './Boat'
import {SimpleBoat} from "./SimpleBoat";


function randomNumber(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Boats = ({boats}) => {
 let details = false

 if (details) {
 return (
   boats.map(item => <Boat key={randomNumber(1, 1000809999999999)} boat_name={item.boat_name} boat_type={item.boat_type}
                           maker={"Empacher"} year_built={randomNumber(1924, 2022)} condition={"Good"}/>)
 )} else {
  return boats.map(item => <SimpleBoat key={randomNumber(1, 1000809999999999)} boat_name={item.boat_name} boat_type={item.boat_type} />)
  }
}
