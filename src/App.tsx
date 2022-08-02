import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Box, CircularProgress } from '@material-ui/core';

import { ArrowBackIos } from '@material-ui/icons';

import { getMembers } from './redux/actions/members';

import {
  TeamListContainer,
  Typography,
  ShowAllContainer,
  ErrorMessage,
} from './utils/styles';
import TeamList from './components/TeamList';

function App() {
  const dispatch: any = useDispatch();
  const { selectedData, loading, error } = useSelector(
    (state: any) => state.membersReducer,
  );

  const [showMaximumView, setShowMaximumView] = useState(false);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  useEffect(() => {
    if (selectedData.length > 5) setShowMaximumView(true);
    if (selectedData.length <= 5) setShowMaximumView(false);
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
    <TeamListContainer>
      <TeamList
        setShowMaximumView={setShowMaximumView}
        showMaximumView={showMaximumView}
      />
      {showMaximumView && (
        <ShowAllContainer onClick={() => setShowMaximumView(false)}>
          <Typography>SHOW ALL</Typography>
          <ArrowBackIos className="arrowDown" />
        </ShowAllContainer>
      )}
    </TeamListContainer>
  );
}

export default App;
