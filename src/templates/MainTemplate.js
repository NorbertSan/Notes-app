import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/MainTheme';
import { withRouter } from 'react-router-dom';

class MainTemplate extends React.Component {
  state = {
    pageContext: 'note',
  };

  componentDidMount() {
    this.setPageType();
  }

  setPageType() {
    const pageTypes = ['note', 'twitter', 'article'];
    const {
      location: { pathname },
    } = this.props;
    const [currentPage] = pageTypes.filter(item => pathname.includes(item));
    this.setState({ pageContext: currentPage });
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </>
    );
  }
}

export default withRouter(MainTemplate);
