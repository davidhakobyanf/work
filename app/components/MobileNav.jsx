'use client';

import { useEffect, useState } from 'react';

export default function MobileNav({ items, resume }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={open ? 'burger is-open' : 'burger'} aria-hidden="true"><span /><span /><span /></span>
      </button>
      <div id="mobile-menu" className={open ? 'mobile-menu is-open' : 'mobile-menu'} hidden={!open}>
        <nav aria-label="Mobile navigation">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{item.num}</span>{item.label}
            </a>
          ))}
          <a className="button primary" href={resume} onClick={() => setOpen(false)}>Resume ↗</a>
        </nav>
      </div>
    </div>
  );
}
