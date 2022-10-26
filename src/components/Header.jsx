import ThemeToggle from './ThemeToggle'

const Header = ({ theme, setTheme, toggleTheme }) => {
  return (
    <header className='header'><ThemeToggle theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} /></header>
  )
}

export default Header