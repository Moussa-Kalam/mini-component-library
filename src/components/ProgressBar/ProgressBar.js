/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import VisuallyHidden from '../VisuallyHidden'
import { COLORS } from '../../constants'

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar ${size}`)
  }

  return <Wrapper role="progressbar"
                  aria-valuenow={value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{
                    '--padding': styles.padding + 'px',
                    '--borderRadius': styles.borderRadius + 'px',

                  }}>
    <VisuallyHidden>{value}%</VisuallyHidden>

    <BarWrapper>
      <Bar
        style={{ '--width': value + '%', '--height': styles.height + 'px' }}/>
    </BarWrapper>
  </Wrapper>
}

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
    padding: var(--padding)
`

const BarWrapper = styled.div`
    border-radius: var(--borderRadius);
    overflow: hidden; /* Hides the corner of the progress when it nears 100% */
`

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background-color: ${COLORS.primary};
    border-radius: 4px 0 0 4px;

`

export default ProgressBar
