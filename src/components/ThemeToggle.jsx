const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      <img alt={theme==='dark' ? 'sun' : 'moon'} src={`${theme === 'dark' ? 'moon.png' : 'sun.png'}`}/>
    </div>
  )
}

export default ThemeToggle