import React from 'react';

// src/components/Truncate.jsx
export default function Truncate({ children, length = 0, title }) {
  const s = String(children ?? '');
  const short = s.length > length ? s.slice(0, length - 1) + '…' : s;
  return <span title={title ?? s}>{short}</span>;
}
