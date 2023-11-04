import type {Meta, StoryObj} from '@storybook/react-native';
import Error, {type ErrorProps} from './Error';

const ErrorMeta: Meta<ErrorProps> = {
  title: 'Error',
  component: Error,
};

export default ErrorMeta;

export const Basic: StoryObj<ErrorProps> = {};

export const WithText: StoryObj<ErrorProps> = {
  args: {
    error: 'Error!',
  },
};
