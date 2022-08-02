import { useDispatch, useSelector } from 'react-redux';

import { Box, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import {
  SelectImage,
  AutocompleteContainer,
  Typography,
} from '../utils/styles';

import { addMember } from '../redux/actions/members';

import { MemberInterface } from '../interfaces';

interface Props {
  setShowAddInput: (showAddInput: boolean) => void;
}
function AddAutocomplete(props: Props) {
  const dispatch: any = useDispatch();

  const { data, selectedData } = useSelector(
    (state: any) => state.membersReducer,
  );

  const allSelectedUsernames = selectedData.map(
    ({ username }: any) => username,
  );
  const filteredData = data.filter(
    ({ username }: any) => !allSelectedUsernames.includes(username),
  );

  return (
    <AutocompleteContainer>
      <Autocomplete
        onChange={(_, value: any) => {
          dispatch(addMember(value));
          props.setShowAddInput(false);
        }}
        options={filteredData?.map(
          (option: MemberInterface) => option.username,
        )}
        filterOptions={(options): any => options}
        getOptionLabel={(username: string) => username}
        renderInput={(params) => (
          <TextField {...params} placeholder="Please select a client" />
        )}
        renderOption={(username) => (
          <>
            <SelectImage
              src="https://res.cloudinary.com/nabil-mediouni/image/upload/v1659384185/avatar-default.png"
              alt=""
            />
            <Box ml={1.25}>
              <Typography>{username}</Typography>
            </Box>
          </>
        )}
        noOptionsText="Team member not found."
        fullWidth
      />
    </AutocompleteContainer>
  );
}

export default AddAutocomplete;
