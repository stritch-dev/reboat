import {SimpleBoat} from "./SimpleBoat"

export const Boat = ({boat_name, boat_type, maker, year_built, condition }) => {
    return (
      <>
        <SimpleBoat boat_name={boat_name} boat_type={boat_type} />
        {maker} {year_built} <br/>
        {condition}<br/>
      </>
    )
}