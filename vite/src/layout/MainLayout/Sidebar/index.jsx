import { memo, useMemo } from 'react';

// carbon
import { SideNav, SideNavItems, Tag } from '@carbon/react';

// project imports
import MenuCard from './MenuCard';
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';

import useConfig from 'hooks/useConfig';
import { drawerWidth } from 'store/constant';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| SIDEBAR DRAWER ||============================== //

function Sidebar() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster.isDashboardDrawerOpened;

  const {
    state: { miniDrawer }
  } = useConfig();

  const logo = useMemo(
    () => (
      <div style={{ display: 'flex', padding: 'var(--cds-spacing-05)' }}>
        <LogoSection />
      </div>
    ),
    []
  );

  const drawer = useMemo(() => {
    const drawerContent = (
      <>
        <MenuCard />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--cds-spacing-05)' }}>
          <Tag type="gray" size="sm">{import.meta.env.VITE_APP_VERSION}</Tag>
        </div>
      </>
    );

    return (
      <div style={{ height: 'calc(100vh - 90px)', overflowY: 'auto' }}>
        <MenuList />
        {drawerOpen && drawerContent}
      </div>
    );
  }, [drawerOpen]);

  return (
    <SideNav
      aria-label="Side navigation"
      expanded={drawerOpen}
      onOverlayClick={() => handlerDrawerOpen(false)}
      style={{ width: drawerOpen ? drawerWidth : 48 }}
    >
      {logo}
      <SideNavItems>
        {drawer}
      </SideNavItems>
    </SideNav>
  );
}

export default memo(Sidebar);