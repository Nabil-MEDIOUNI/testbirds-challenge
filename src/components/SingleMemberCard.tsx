import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Box, Tooltip } from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { delteMember } from '../redux/actions/members';

import { MemberInterface } from '../interfaces/index';

import {
  ImageContainer,
  MemberCardContainer,
  ClientNameTypography,
  SelectImage,
  RoleTypography,
  ClearImageContainer,
} from '../utils/styles';

function SingleMemberCard({ id, role, username, picture }: MemberInterface) {
  const dispatch: any = useDispatch();

  const [showClearButton, setshowClearButton] = useState(false);

  function getCardImage() {
    if (showClearButton) {
      return (
        <Tooltip title="Remove user" placement="top" arrow>
          <ClearImageContainer onClick={() => dispatch(delteMember(username))}>
            <Clear />
          </ClearImageContainer>
        </Tooltip>
      );
    }

    return <SelectImage src={picture} alt="" />;
  }

  return (
    <MemberCardContainer>
      <ImageContainer
        onMouseEnter={() => setshowClearButton(true)}
        onMouseLeave={() => setshowClearButton(false)}
      >
        {getCardImage()}
      </ImageContainer>
      <Box>
        <RoleTypography>{role}</RoleTypography>
        <ClientNameTypography>{username}</ClientNameTypography>
      </Box>
    </MemberCardContainer>
  );
}

export default SingleMemberCard;
