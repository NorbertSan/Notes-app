import React from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import { Formik, Form } from 'formik';
import withContext from 'hoc/withContext';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 500px;
  top: 0;
  right: 0;
  position: fixed;
  border-left: 2px solid ${({ pagetype, theme }) => theme.note};
  padding: 100px 50px;
  box-shadow: 0 0 10px ${({ theme }) => theme.note};
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
const WrapperRadio = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

const AddCard = ({ pagetype }) => (
  <StyledWrapper>
    <StyledHeading>Add note</StyledHeading>
    <WrapperRadio>
      <label htmlFor="note">
        <input type="radio" name="pagetype" value="note" checked />
        Note
      </label>
      <label htmlFor="article">
        <input type="radio" name="pagetype" value="article" />
        Article
      </label>
      <label htmlFor="twitter">
        <input type="radio" name="pagetype" value="twitter" />
        Twitter
      </label>
    </WrapperRadio>
    <Formik
      initialValues={{
        title: '',
        articleUrl: '',
        twitterName: '',
        content: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
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
          {pagetype === 'twitter' && (
            <StyledInput
              placeholder="twitter account name"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}

          {pagetype === 'article' && (
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
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button>Add Note</Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default withContext(AddCard);
