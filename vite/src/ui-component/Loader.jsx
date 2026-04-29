// carbon
import { Loading } from '@carbon/react';

// ==============================|| LOADER ||============================== //

export default function Loader() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 1301, width: '100%' }}>
      <Loading withOverlay={false} small />
    </div>
  );
}