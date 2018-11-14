export const Colors = {
  black: "#000000",
  blue: "#29ADFF",
  brown: "#AB5236",
  darkBlue: "#102853",
  darkGreen: "#008751",
  darkGrey: "#5F574F",
  darkPurple: "#7E2553",
  green: "#00E436",
  indigo: "#83769C",
  lightGrey: "#C2C3C7",
  orange: "#FFA300",
  peach: "#FFCCAA",
  pink: "#FF77AB",
  red: "#FF0040",
  white: "#FFF1E8",
  yellow: "#FFEC27"
};

export function RandomColor(): string {
  const dice = Math.floor(16 * Math.random());
  const values = Object.keys(Colors).map(key => Colors[key]);
  if (dice < values.length) {
    return values[dice];
  }

  return Colors.white;
}
