import React from 'react';
import { storiesOf } from '@storybook/react';
import BulbIcon from 'assets/icons/bulb.svg';
import CancelIcon from 'assets/icons/cancel.svg';
import EditIcon from 'assets/icons/edit.svg';
import LinkIcon from 'assets/icons/link.svg';
import PlusIcon from 'assets/icons/plus.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import ButtonIcon from './ButtonIcon';

storiesOf('Atoms/ButtonIcon', module)
  .add('Plus', () => <ButtonIcon icon={PlusIcon} />)
  .add('Logout', () => <ButtonIcon icon={LogoutIcon} />)
  .add('EditIcon', () => <ButtonIcon icon={EditIcon} />)
  .add('CancelIcon', () => <ButtonIcon icon={CancelIcon} />)
  .add('BulbIcon', () => <ButtonIcon icon={BulbIcon} />)
  .add('LinkIcon', () => <ButtonIcon icon={LinkIcon} />);
