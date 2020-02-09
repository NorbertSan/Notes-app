import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Atoms/Paragraph', module).add('Default', () => (
  <Paragraph>Default paragraph</Paragraph>
));
