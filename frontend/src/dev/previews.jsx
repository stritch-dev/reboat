import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {AddBoatForm} from "../components/AddBoat";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/AddBoatForm">
        <AddBoatForm/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;