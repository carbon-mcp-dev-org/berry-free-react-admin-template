// carbon
import { HeaderName, HeaderGlobalBar, HeaderGlobalAction } from '@carbon/react';
import { Menu } from '@carbon/icons-react';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

export default function Header() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  return (
    <>
      {/* logo & toggler button */}
      <div style={{ width: 228, display: 'flex', alignItems: 'center' }}>
        <HeaderName prefix="">
          <LogoSection />
        </HeaderName>
        <HeaderGlobalAction
          aria-label="Toggle menu"
          onClick={() => handlerDrawerOpen(!drawerOpen)}
        >
          <Menu size={20} />
        </HeaderGlobalAction>
      </div>

      {/* header search */}
      <SearchSection />
      <div style={{ flexGrow: 1 }} />

      {/* notification & profile */}
      <HeaderGlobalBar>
        <NotificationSection />
        <ProfileSection />
      </HeaderGlobalBar>
    </>
  );
}