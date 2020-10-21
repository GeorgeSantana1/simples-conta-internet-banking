import React from 'react'

import { ShimmerEffectBackground } from './styles'

interface Props {
  width: number | string;
  height: number | string
}

const ShimmerSkeleton: React.FC<Props> = ({ width, height }) => {
  return (
    <ShimmerEffectBackground width={width} height={height} />
  )
}

export default ShimmerSkeleton
