import {Colors, Spacing} from 'material-ui/lib/styles/';
import {ColorManipulator} from 'material-ui/lib/utils/';

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  sizes : { header : 64 },
  palette: {
    primary1Color: '#cf4646',
    primary2Color: Colors.red700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
  },
};
