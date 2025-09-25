import React from 'react';
import type { ReactNode } from 'react';

/**
 * DefaultButton component
 *
 * Reusable styled button.
 * Props:
 * - text: string label displayed inside the button
 * - icon: optional icon element displayed next to the text
 *
 * Styling:
 * - Tailwind classes for size, colors, hover/focus states, and dark mode
 * - Full-width layout with rounded corners and bold heading font
 */
interface DefaultButtonProps {
  id?: string;
  icon?: ReactNode;
  text?: string;
  className?: string;
  type?: any;
}

/**
 * Renders a button displaying text followed by an icon.
 *
 * @param icon - Optional node rendered after the text inside the button
 * @param text - Optional label rendered before the icon inside the button
 * @returns A JSX `button` element containing `text` followed by `icon`
 */
export default function DefaultButton({ icon, text, id, className, type = "button" }: DefaultButtonProps) {
  return (
    <button type={type} className={className} id={id}>
      {text}
      {icon}
    </button>
  );
}
