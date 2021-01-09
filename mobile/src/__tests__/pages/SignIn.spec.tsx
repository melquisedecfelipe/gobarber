import React from 'react';
import { render } from '@testing-library/react-native';

import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn Page', () => {
  it('should contains email/password inputs', async () => {
    const { getAllByPlaceholderText } = render(<SignIn />);

    expect(getAllByPlaceholderText('E-mail')).toBeTruthy();
    expect(getAllByPlaceholderText('Senha')).toBeTruthy();
  });
});
