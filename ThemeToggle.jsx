import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
  document.body.classList.toggle('dark', dark);
   }, [dark]);


  return (
    <div className="theme-toggle">
      <button onClick={() => setDark(!dark)}>
        {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeToggle;
