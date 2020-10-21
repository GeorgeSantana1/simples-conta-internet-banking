import styled from 'styled-components'

export const ShimmerEffectBackground = styled.div<{ width: number | string, height: number | string }>`
  background-image: linear-gradient(-90deg, #e7edf1 0%, #f8f8f8 50%, #e7edf1 100%);
  background-size: 400% 400%;
  width: ${props => props.width};
  height: ${props => props.height};
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -130% 0%;
    }
  }

  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%)
  }
`