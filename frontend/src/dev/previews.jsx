import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {AddBoatForm} from "../components/AddBoat";
import App from "../App";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/AddBoatForm">
        <AddBoatForm/>
      </ComponentPreview>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;