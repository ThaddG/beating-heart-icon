// index.d.ts
import React from 'react';

export interface BeatingHeartIconProps {
  size?: number;
  color?: string;
  filled?: boolean;
  animationSpeed?: number;
}

export const BeatingHeartIcon: React.FC<BeatingHeartIconProps>;
