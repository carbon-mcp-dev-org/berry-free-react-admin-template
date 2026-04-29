import PropTypes from 'prop-types';
import { memo } from 'react';

// Carbon Design System
import { ProgressBar, Tile } from '@carbon/react';
import { Table } from '@carbon/icons-react';

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--cds-text-primary)' }}>
          Progress
        </span>
        <span style={{ fontSize: '14px', color: 'var(--cds-text-primary)' }}>{`${Math.round(value)}%`}</span>
      </div>
      <ProgressBar
        label="progress of theme"
        value={value}
        max={100}
        {...others}
      />
    </div>
  );
}

// ==============================|| SIDEBAR - MENU CARD ||============================== //

function MenuCard() {
  return (
    <Tile
      style={{
        backgroundColor: 'var(--cds-layer-accent)',
        marginBottom: '22px',
        overflow: 'hidden',
        position: 'relative',
        padding: '16px'
      }}
    >
      <div style={{ paddingBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: 'var(--cds-layer)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cds-icon-primary)'
            }}
          >
            <Table size={32} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--cds-text-primary)' }}>
              Get Extra Space
            </div>
            <div style={{ fontSize: '12px', color: 'var(--cds-text-secondary)' }}>28/23 GB</div>
          </div>
        </div>
      </div>
      <LinearProgressWithLabel value={80} />
    </Tile>
  );
}

export default memo(MenuCard);

LinearProgressWithLabel.propTypes = { value: PropTypes.number, others: PropTypes.any };
