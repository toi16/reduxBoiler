import React from 'react';
import { Switch as BaseSwitch, View } from 'react-native';
import styled from 'styled-components';
import defaultTheme from './Theme';

const Switch = styled(BaseSwitch)`
`;

Switch.propTypes = BaseSwitch.propTypes;

Switch.defaultProps = Object.assign({}, BaseSwitch.defaultProps, {
  theme: defaultTheme,
  componentName: 'Switch',
});

export { Switch };
