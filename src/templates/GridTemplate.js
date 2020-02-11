import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { searchItems as searchItemsAction } from 'actions';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 35px;
  position: relative;
`;

const StyleInput = styled(Input)`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  z-index: 100;
`;

const StyledForm = styled.form`
  position: relative;
  top: -100px;
`;

class GridTemplate extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.searchItemsAction(this.props.pagetype, '');
    }, 0);
  }
  render() {
    const { children, pagetype, value, searchItemsAction } = this.props;
    return (
      <>
        <StyledForm>
          <StyleInput
            placeholder={`search ${pagetype}`}
            search
            onChange={e => searchItemsAction(pagetype, e.target.value)}
            value={value}
          />
        </StyledForm>
        <GridWrapper>{children}</GridWrapper>;
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchItemsAction: (pagetype, value) =>
    dispatch(searchItemsAction(pagetype, value)),
});

export default connect(null, mapDispatchToProps)(withContext(GridTemplate));
