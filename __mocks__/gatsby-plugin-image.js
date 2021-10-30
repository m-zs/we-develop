const React = require('react');
const gatsbyImage = jest.requireActual('gatsby-plugin-image');

const mockImage = ({ imgClassName, ...props }) =>
  React.createElement('img', {
    ...props,
    className: imgClassName,
  });

module.exports = {
  ...gatsbyImage,
  GatsbyImage: jest.fn().mockImplementation(mockImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
  getImage: jest.fn(),
};
