import React from 'react';
import SocialCard from './SocialCard';
import renderer from 'react-test-renderer';

it('renders properly', () => {
  const socialCard = renderer.create(<SocialCard/>);
  expect(socialCard).toMatchSnapshot();
});