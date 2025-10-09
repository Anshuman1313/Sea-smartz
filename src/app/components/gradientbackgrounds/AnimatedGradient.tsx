// AnimatedGradientBackground.jsx
import React from 'react';
import './AnimatedGradientBackground.css'; // Alternatively, use inline styles

interface AnimatedGradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedGradientBackground = ({ children, className = '', style = {} }:AnimatedGradientBackgroundProps) => (
  <div className={`animated-gradient-bg ${className}`} style={style}>
    {children}
  </div>
);

export default AnimatedGradientBackground;
