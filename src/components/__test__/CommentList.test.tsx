import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { it } from '@jest/globals';

import CommentList from '../CommentList';
import { Provider } from 'react-redux';
import { mockStore } from '../../../__mocks__/redux-store';
import { NavigationContainer } from '@react-navigation/native';

function setup() {
  const component = render(
    <Provider store={mockStore}>
      <NavigationContainer>
        <CommentList parrentCommentId={1} />
      </NavigationContainer>
    </Provider>
  );
  return component;
}

describe('Testing CommentList component', () => {
  it('should render correctly', () => {
    const tree = setup().toJSON();
    expect(tree).toMatchSnapshot()
  });

})

