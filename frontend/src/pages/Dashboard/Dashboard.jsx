import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-center">
        <h1 className="dashboard-greeting">
          Halo, {user.name || 'Admin'}! <span className="wave" role="img" aria-label="wave">👋</span>
        </h1>
        <p className="dashboard-role">Login sebagai <strong>{user.role || '—'}</strong></p>
        <button id="logout-btn" className="logout-btn" onClick={handleLogout}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Keluar
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
