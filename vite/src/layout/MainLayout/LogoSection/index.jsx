import { Link as RouterLink } from 'react-router-dom';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection() {
  return (
    <a href={DASHBOARD_PATH} aria-label="theme-logo" style={{ textDecoration: 'none' }}>
      <Logo />
    </a>
  );
}
