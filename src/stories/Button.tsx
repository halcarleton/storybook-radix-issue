import React from 'react';
import { Button as RadixButton } from '@radix-ui/themes'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
}: ButtonProps) => {
  const variant = primary ? 'solid' : 'outline';
  const sizeMap = {small: '1', medium: '2', large: '3'};
  const sizeNumber = sizeMap[size] as ('1' | '2' | '3');

  return (
    <RadixButton variant={variant} size={sizeNumber}>
      {label}
    </RadixButton>
  );
};
