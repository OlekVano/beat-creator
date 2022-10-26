const ThemeToggle = ({ theme, setTheme, toggleTheme }) => {
  return (
    <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      <img src={`${theme === 'dark' ? 'moon.png' : 'sun.png'}`}/>
    </div>
  )
}

export default ThemeToggle