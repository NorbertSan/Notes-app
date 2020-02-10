import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/MainTheme';
import { withRouter } from 'react-router-dom';
import PageContext from 'context';

class MainTemplate extends React.Component {
  state = {
    pageContext: 'note',
  };

  componentDidMount() {
    this.setPageType();
  }

  componentDidUpdate() {
    this.setPageType();
  }

  setPageType() {
    const pageTypes = ['note', 'twitter', 'article'];
    const {
      location: { pathname },
    } = this.props;
    const [currentPage] = pageTypes.filter(item => pathname.includes(item));
    if (this.state.pageContext !== currentPage) {
      this.setState({ pageContext: currentPage });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <PageContext.Provider value={this.state.pageContext}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </>
    );
  }
}

export default withRouter(MainTemplate);
