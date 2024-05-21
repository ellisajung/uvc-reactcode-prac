import { useState, useEffect } from 'react'

export function StyleBakery() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeName = theme === "dark" ? "dark" : "light";
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <div className="style-bakery">
      <p className="scss">CSS-in-CSS (.scss)</p>
      <ul>
        <li><p className="bread-mocha">모카빵</p></li>
        <li><p className="bread-salt">소금빵</p></li>
        <li><p className="bread-cream">크림빵</p></li>
      </ul>
      <ul>
        <li><p className="cafe-mocha">모카빵</p></li>
        <li><p className="cafe-salt">소금빵</p></li>
        <li><p className="cafe-cream">크림빵</p></li>
      </ul>
      <ul className="bread">
        <li><p className="mocha">모카빵</p></li>
        <li><p className="salt">소금빵</p></li>
        <li><p className="cream">크림빵</p></li>
      </ul>
      <div className="coffee-1">americano</div>
      <div className="coffee-2">chocolatte</div>
      <div className="coffee-3">espresso</div>
      <p className="theme">현재 테마 컬러</p>
      <div onClick={toggleTheme} className={themeName}>
        테마 변경 클릭 (현재 테마 : {themeName})
      </div>
    </div>
  )
}