import React from 'react';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import { Formik, Form, resetForm } from 'formik';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button/Button';
import { addItem as addItemAction } from 'actions';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 550px;
  top: 0;
  right: 0;
  position: fixed;
  border-left: 5px solid ${({ color, theme }) => theme[color]};
  padding: 100px 50px;
  box-shadow: 0 0 10px ${({ color, theme }) => theme[color]};
  background-color: #fff;
  z-index: 999;
  transform: translateX(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform ease-in-out 0.3s;
`;
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 300px;
`;

const StyledTextarea = styled(Input)`
  border-radius: 10px;
  width: 100%;
  resize: none;
  height: 150px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
const StyledInput = styled(Input)`
  width: 75%;
`;

const StyledButton = styled(Button)`
  background-color: ${({ color, theme }) => theme[color]};
`;

const descriptions = {
  note: 'Add new note',
  twitter: 'Add your favourite twitter account',
  article: 'Add new interesting article',
};

class AddCard extends React.Component {
  state = {
    itemType: this.props.pagetype,
  };

  componentDidMount = () => {
    this.setState({ itemType: this.props.pagetype });
  };
  componentDidUpdate = () => {
    if (this.state.itemType !== this.props.pagetype) {
      this.setState({ itemType: this.props.pagetype });
    }
  };

  render() {
    const { pagetype, isVisible, addItem, closePanelFn } = this.props;
    return (
      <StyledWrapper color={this.state.itemType} isVisible={isVisible}>
        <StyledHeading>{descriptions[this.state.itemType]}</StyledHeading>
        <Formik
          initialValues={{
            title: '',
            articleUrl: '',
            twitterName: '',
            description: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            setTimeout(() => closePanelFn(), 700);
            resetForm();
            addItem(pagetype, values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
            isSubmitting,
          }) => (
            <StyledForm onSubmit={handleSubmit} autoComplete="off">
              <StyledInput
                placeholder="title"
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
              {this.state.itemType === 'twitter' && (
                <StyledInput
                  placeholder="twitter account name"
                  type="text"
                  name="twitterName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitterName}
                />
              )}

              {this.state.itemType === 'article' && (
                <StyledInput
                  placeholder="article link"
                  type="text"
                  name="articleUrl"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleUrl}
                />
              )}

              <StyledTextarea
                as="textarea"
                placeholder="description"
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              <StyledButton type="submit" color={this.state.itemType}>
                Add {this.state.itemType}
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </StyledWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: (pagetype, content) => dispatch(addItemAction(pagetype, content)),
});

export default connect(null, mapDispatchToProps)(withContext(AddCard));
