import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// carbon
import { Content, Header as CarbonHeader } from '@carbon/react';

// project imports
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import Loader from 'ui-component/Loader';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';

import useConfig from 'hooks/useConfig';
import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

// ==============================|| MAIN LAYOUT ||============================== //

export default function MainLayout() {
  const {
    state: { borderRadius, miniDrawer }
  } = useConfig();
  const { menuMaster, menuMasterLoading } = useGetMenuMaster();
  const drawerOpen = menuMaster?.isDashboardDrawerOpened;

  useEffect(() => {
    handlerDrawerOpen(!miniDrawer);
  }, [miniDrawer]);

  if (menuMasterLoading) return <Loader />;

  return (
    <div style={{ display: 'flex' }}>
      {/* header */}
      <CarbonHeader aria-label="Berry Admin">
        <Header />
      </CarbonHeader>

      {/* menu / drawer */}
      <Sidebar />

      {/* main content */}
      <Content style={{ minHeight: 'calc(100vh - 128px)', display: 'flex', flexDirection: 'column' }}>
        {/* breadcrumb */}
        <Breadcrumbs />
        <Outlet />
        <Footer />
      </Content>
      <Customization />
    </div>
  );
}