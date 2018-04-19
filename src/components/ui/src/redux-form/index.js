import { Field } from 'redux-form';
import createInputs from './createInputs';
import createInputCreator from './createInputCreator';

const {
  Input,
  Select,
  Switch
} = createInputs(createInputCreator(Field));

export {
  Input,
  Select,
  Switch
};
