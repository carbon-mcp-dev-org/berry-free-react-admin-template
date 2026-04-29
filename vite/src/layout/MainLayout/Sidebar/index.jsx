import { memo, useMemo } from 'react';

// project imports
import MenuCard from './MenuCard';
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';
import MiniDrawerStyled from './MiniDrawerStyled';

import useConfig from 'hooks/useConfig';
import { drawerWidth } from 'store/constant';
import SimpleBar from 'ui-component/third-party/SimpleBar';

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
      <div style={{ display: 'flex', padding: '16px' }}>
        <LogoSection />
      </div>
    ),
    []
  );

  const drawer = useMemo(() => {
    const drawerContent = (
      <>
        <MenuCard />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '12px', padding: '4px 8px', backgroundColor: 'var(--cds-layer-accent)', borderRadius: '4px' }}>
            {import.meta.env.VITE_APP_VERSION}
          </span>
        </div>
      </>
    );

    let drawerSX = { paddingLeft: '0px', paddingRight: '0px', marginTop: '20px' };
    if (drawerOpen) drawerSX = { paddingLeft: '16px', paddingRight: '16px', marginTop: '0px' };

    return (
      <>
        <div style={drawerSX}>
          <MenuList />
          {drawerOpen && drawerContent}
        </div>
      </>
    );
  }, [drawerOpen]);

  return (
    <nav style={{ flexShrink: 0, width: drawerWidth }} aria-label="mailbox folders">
      {miniDrawer && drawerOpen ? (
        <div
          style={{
            position: 'fixed',
            left: drawerOpen ? 0 : -drawerWidth,
            top: '88px',
            width: drawerWidth,
            height: 'calc(100vh - 88px)',
            backgroundColor: 'var(--cds-layer)',
            borderRight: '1px solid var(--cds-border-subtle)',
            transition: 'left 0.3s ease',
            zIndex: 1099
          }}
        >
          {drawer}
        </div>
      ) : (
        <MiniDrawerStyled variant="permanent" open={drawerOpen}>
          {logo}
          {drawer}
        </MiniDrawerStyled>
      )}
    </nav>
  );
}

export default memo(Sidebar);
