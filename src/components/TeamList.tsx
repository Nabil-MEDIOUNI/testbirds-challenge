import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, CircularProgress } from '@material-ui/core';

import { PeopleAltOutlined } from '@material-ui/icons';

import AddTeamMember from '../components/AddTeamMember';
import SingleMemberCard from '../components/SingleMemberCard';

import { getMembers } from '../redux/actions/members';
import { MemberInterface } from '../interfaces/index';

import {
  TeamContainer,
  HeaderContainer,
  TeamListTitle,
  ErrorMessage,
} from '../utils/styles';

interface Props {
  setShowMaximumView: (showMaximumView: boolean) => void;
  showMaximumView: boolean;
}

function TeamList(props: Props) {
  const dispatch: any = useDispatch();
  const { selectedData, loading, error } = useSelector(
    (state: any) => state.membersReducer,
  );

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  useEffect(() => {
    if (selectedData.length > 5) props.setShowMaximumView(true);
    if (selectedData.length <= 5) props.setShowMaximumView(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedData]);

  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="error">
        <ErrorMessage>Error Occured!</ErrorMessage>
      </Box>
    );
  }

  return (
    <>
      <HeaderContainer>
        <TeamListTitle>Your team for this test</TeamListTitle>
        <Button>
          <Box mr={1}>Team page</Box>
          <PeopleAltOutlined />
        </Button>
      </HeaderContainer>
      <TeamContainer>
        <AddTeamMember />
        {selectedData
          .slice(props.showMaximumView ? selectedData.length - 5 : 0)
          .map((client: MemberInterface) => (
            <SingleMemberCard
              key={client.id}
              id={client.id}
              username={client.username}
              role={client.role}
              picture={client.picture}
            />
          ))}
      </TeamContainer>
    </>
  );
}

export default TeamList;
