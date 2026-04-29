// Carbon Design System
import { useTheme } from @carbon/react;
import { Menu } from @carbon/icons-react;

// project imports
import LogoSection from ../LogoSection;
import SearchSection from ./SearchSection;
import ProfileSection from ./ProfileSection;
import NotificationSection from ./NotificationSection;

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

export default function Header() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {/* logo & toggler button */}
      <div style={{ width: '228px', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'block', flexGrow: 1 }}>
          <LogoSection />
        </div>
        <button
          onClick={() => handlerDrawerOpen(!drawerOpen)}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all .2s ease-in-out',
            backgroundColor: 'var(--cds-layer-accent)',
            color: 'var(--cds-text-primary)'
          }}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* header search */}
      <SearchSection />
      <div style={{ flexGrow: 1 }} />

      {/* notification */}
      <NotificationSection />

      {/* profile */}
      <ProfileSection />
    </div>
  );
}
