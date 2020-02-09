import React from 'react';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import withContext from 'hoc/withContext';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
  </>
);

export default withContext(UserPageTemplate);
