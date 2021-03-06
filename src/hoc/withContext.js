import React from 'react';
import PageContext from 'context';

const withContext = Component => {
  return function(props) {
    return (
      <PageContext.Consumer>
        {context => <Component {...props} pagetype={context} />}
      </PageContext.Consumer>
    );
  };
};

export default withContext;
