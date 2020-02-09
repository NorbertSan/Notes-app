import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Atoms/Input', module)
  .add('Default', () => <Input placeholder="title" />)
  .add('Search', () => <Input placeholder="search" />);
