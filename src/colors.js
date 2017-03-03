const color_strong = 'var(--color-strong)';
const color_background = 'var(--color-background)';
const color_important = 'var(--color-important)';
const color_disabled = 'var(--color-disabled)';
const color_secondary = 'var(--color-secondary)';


export const palette = {
	primary1Color: color_strong,
	// primary2Color: _colors.cyan700,
	// primary3Color: _colors.grey400,
	// accent1Color: _colors.pinkA200,
	// accent2Color: color_disabled,
	// accent3Color: _colors.grey500,
	textColor: color_strong,
	// secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
	// alternateTextColor: tan,
	canvasColor: color_background,
	borderColor: color_important,
	disabledColor: color_disabled
	// pickerHeaderColor: _colors.cyan500,
	// clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	// shadowColor: _colors.fullBlack
};
export const checkbox = {
	boxColor: palette.primary1Color,
	checkedColor: palette.primary1Color
};
export const textField = {
	// textColor: palette.textColor,
	floatingLabelColor: color_important
	// disabledTextColor: color_disabled,
	// errorColor: _colors.red500,
	// focusColor: palette.primary1Color,
	// backgroundColor: 'transparent',
	// borderColor: palette.borderColor
};
export const raisedButton = {
	color: color_strong,
	textColor: color_disabled,
	// primaryColor: palette.primary1Color,
	// primaryTextColor: palette.alternateTextColor,
	// secondaryColor: palette.accent1Color,
	// secondaryTextColor: palette.alternateTextColor,
	disabledColor: color_disabled,
	disabledTextColor: color_background
	// fontSize: _typography2.default.fontStyleButtonFontSize,
	// fontWeight: _typography2.default.fontWeightMedium
};

export const table = {
	backgroundColor: 'rgba(167, 176, 130, 0.7)'
};
export const tableFooter = {
	// borderColor: palette.borderColor,
	// textColor: palette.accent3Color
};
export const tableHeader = {
	// borderColor: palette.borderColor
};
export const tableHeaderColumn = {
	// textColor: palette.accent3Color,
	// height: 56,
	// spacing: 24
};
export const tableRow = {
	// hoverColor: palette.accent2Color,
	// stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
	selectedColor: 'rgba(232, 168, 100, 0.6)',
	// textColor: palette.textColor,
	// borderColor: color_strong
};
