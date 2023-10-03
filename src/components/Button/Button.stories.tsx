import Button, {ButtonProps} from './Button';
import {Alert} from 'react-native';
import {Meta, StoryObj} from '@storybook/react-native';

const ButtonMeta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'on pressed'},
  },
  args: {
    text: 'Button',
    onPress: () => Alert.alert('Button pressed'),
  },
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonProps> = {};
