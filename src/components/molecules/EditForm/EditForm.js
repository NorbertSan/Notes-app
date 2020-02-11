import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { editItem as editItemAction } from 'actions';
import { Formik, Form } from 'formik';
import { Redirect } from 'react-router-dom';

const StyledForm = styled(Form)`
  box-shadow: 0 2px 5px ${({ theme }) => theme.grey300};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;

const StyledTextarea = styled(Input)`
  resize: none;
  height: 150px;
`;

class EditForm extends React.Component {
  state = {
    ...this.props.item,
  };

  render() {
    const { pagetype, item, editItem } = this.props;
    return (
      <>
        <Formik
          initialValues={{
            title: this.state.title,
            articleUrl: this.state.articleUrl,
            twitterName: this.state.twitterName,
            description: this.state.description,
          }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            return errors;
          }}
          onSubmit={values => {
            editItem(pagetype, this.state.id, values);
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
            <StyledForm onSubmit={handleSubmit}>
              <Heading>{`Edit your ${pagetype}`}</Heading>
              <Input
                placeholder="title"
                name="title"
                type="text"
                value={values.title}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {pagetype === 'article' && (
                <Input
                  placeholder="article url"
                  name="articleUrl"
                  type="text"
                  id="articleUrl"
                  value={values.articleUrl}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              )}
              {pagetype == 'twitter' && (
                <Input
                  placeholder="account name"
                  name="twitterName"
                  id="twitterName"
                  type="text"
                  value={values.twitterName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              )}
              <StyledTextarea
                placeholder="description"
                as="textarea"
                type="text"
                name="description"
                id="description"
                value={values.description}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Button type="submit" secondary>
                Save changes
              </Button>
            </StyledForm>
          )}
        </Formik>
      </>
    );
  }
}

const mapDispatchToState = dispatch => ({
  editItem: (itemtype, id, content) =>
    dispatch(editItemAction(itemtype, id, content)),
});

export default connect(null, mapDispatchToState)(withContext(EditForm));
