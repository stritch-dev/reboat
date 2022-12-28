import {Boat} from './Boat'

export const Boats = ({boats}) => {

 return (
   boats.map(item => <Boat boat_name={item.boat_name} boat_type={item.boat_type}/> )
 )
}