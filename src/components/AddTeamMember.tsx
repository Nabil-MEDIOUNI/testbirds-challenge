import { useState } from 'react';

import { Add } from '@material-ui/icons';

import {
  ImageContainer,
  ListItemContainer,
  ListItemTypography,
} from '../utils/styles';

import AddAutocomplete from './AddAutocomplete';

function AddTeamMember() {
  const [showAddInput, setShowAddInput] = useState(false);

  return (
    <>
      {!showAddInput && (
        <ListItemContainer onClick={() => setShowAddInput(true)}>
          <ImageContainer>
            <Add />
          </ImageContainer>
          <ListItemTypography>Add team member to this test</ListItemTypography>
        </ListItemContainer>
      )}
      {showAddInput && <AddAutocomplete setShowAddInput={setShowAddInput} />}
    </>
  );
}

export default AddTeamMember;
