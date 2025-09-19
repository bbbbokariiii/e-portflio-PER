import './Navigation.css'

const Navigation = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'cover-letter', label: 'Cover Letter' },
    { id: 'resume', label: 'Resume' },
    { id: 'reflection1', label: 'Reflection 1' },
    { id: 'reflection2', label: 'Reflection 2' },
    { id: 'references', label: 'References' }
  ]

  return (
    <nav className="portfolio-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Mifrah Raiz</h2>
          <span>Software Engineering Student</span>
        </div>
        
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => onNavigate(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation