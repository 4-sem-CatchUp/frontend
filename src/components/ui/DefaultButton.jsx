import React from 'react';

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

export default function DefaultButton({ icon, text }) {
  return (
    <button type="button" class="">
      {text}
      {icon}
    </button>
  );
}
