// Default theme. A single theme is added and exported as Theme. If in the future the To-do list needs a different design, a new Theme can be added besides defaultTheme.
const defaultTheme = {
  fontFamily: '"Open Sans", Calibri, Helvetica, Tahoma, sans-serif',

  fontSizes: {
    paragraph: '12px',

    headerOne: '22px',
    headerTwo: '18px',
    headerThree: '16px',
    headerFour: '14px',

    headerMobile: {
      headerOne: '18px',
      headerTwo: '16px',
      headerThree: '14px',
      headerFour: '12px'
    }
  },

  fontWeights: {
    normal: 300,
    bold: 600
  },

  fontColor: {
    one: '#333333',
    two: '#ffffff',
    three: '#555555',
    four: '#aaaaaa'
  },

  identityColors: {
    one: '#77cc6d',
    two: '#2ac4ea',
    three: '#f6653c',
    four: '#dddddd',
    five: '#eeeeee'
  },

  gutters: {
    tiny: '5px',
    small: '10px',
    medium: '15px',
    large: '20px',
    extraLarge: '25px'
  }
}

export { defaultTheme as theme }
