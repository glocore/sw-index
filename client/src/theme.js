import { css } from 'styled-components'

const palette = {
  pageBackground: '#282C34',
  primary: '#FFD700',
}

const padding = {
  vertical: {
    main: '10px',
    level0: '5px',
    level1: '10px',
    level3: '15px',
  },
  horizontal: {
    page: '20px',
    main: '10px',
    level0: '5px',
    level1: '10px',
    level3: '15px',
    level4: '20px',
  }
}

const mediaSizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

const fontSize = {
  main: '1rem',
  huge: '3rem',
  large: '2rem',
  fine: '0.75rem',
}

const media = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})


export default {
  palette,
  padding,
  mediaSizes,
  media,
  fontSize,
}