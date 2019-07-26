// Constants
const backgroundColor = '#161925';
const foregroundColor = '#C3C7D1';
const activeTabBg = '#161925';
const g1 = '#5800E2';
const g2 = '#FF00E6'

// Colors
const RED = '#ed254e';
const GREEN = '#71f79f';
const YELLOW = '#f9dc5c';
const BLUE = '#7cb7ff';
const MAGENTA = '#c74ded';
const CYAN = '#00c1e4';
const LIGHT_GRAY = '#F2EFEA';
const DARK_GRAY = '#555753';

const ACTIVE_TAB = '#ED3A53';

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: CYAN,
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = MAGENTA;
const borderColor = backgroundColor;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: ${backgroundColor} !important;
      }
      .splitpane_divider {
        background-color: rgba(130, 128, 184, 0.5) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        background:
        linear-gradient(to right, ${g1}, ${g2})
        left 
        bottom
        ${activeTabBg}    
        no-repeat !important; 
        background-size: 100% 3px!important;
        border: 0 !important;
        border-image: none !important;
        text-shadow: 0px 0px 4px #C50ED2;
      }
    `
  })
}