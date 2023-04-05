import { useTheme } from 'next-themes';
import { useEffect } from 'react';


const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme === 'darken') {
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <div
        className="form-check form-switch mode-switch cursor-pointer  me-3 me-lg-4 ms-auto mb-0 d-inline-block position-relative"
        data-bs-toggle="mode"
      >
        <input
          className="form-check-input cursor-pointer "
          onChange={(e) => {
            if (e.target.checked) {
              setTheme('darken');
            } else {
              setTheme('light');
            }
          }}
          type="checkbox"
          id="theme-mode"
        />
        <label
          className="form-check-label position-absolute start-0 cursor-pointer"
          htmlFor="theme-mode"
        >
          <i className="sun"></i>
        </label>
        <label
          className="form-check-label  cursor-pointer "
          aria-label="dark-theme"
          title="dark"
          htmlFor="theme-mode"
        >
          <i className="moon"></i>
        </label>
      </div>
    </>
  );
};

export default ThemeToggler;
