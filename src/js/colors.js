import constants from './constants';

export default (numberOfColors) => {
  const newColors = [];
  for (let i=0; i<numberOfColors; i++) {
    newColors.push(randomHexColor());
  }
  return newColors;
}

const randomHexColor = () => {
  const colorCodeComponents = ['#'];
  for (let i=0; i<6; i++) {
    colorCodeComponents.push(constants.HEX_VALUES.charAt(Math.floor(Math.random() * 16)));
  }
  return colorCodeComponents.join('');
};
