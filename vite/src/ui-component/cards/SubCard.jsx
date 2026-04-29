import PropTypes from 'prop-types';

// carbon
import { Tile } from '@carbon/react';

// ==============================|| CUSTOM SUB CARD ||============================== //

export default function SubCard({
  children,
  className,
  content = true,
  contentClass,
  darkTitle,
  secondary,
  sx = {},
  contentSX = {},
  footerSX = {},
  title,
  actions,
  ...others
}) {
  return (
    <Tile
      style={{
        border: '1px solid var(--cds-border-subtle-01)',
        ...sx
      }}
      {...others}
    >
      {/* card header and action */}
      {title && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--cds-spacing-05)' }}>
          {darkTitle ? (
            <h4 className="cds--heading-04">{title}</h4>
          ) : (
            <h5 className="cds--heading-02">{title}</h5>
          )}
          {secondary && <div>{secondary}</div>}
        </div>
      )}

      {/* content & header divider */}
      {title && <hr style={{ border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)', margin: 0 }} />}

      {/* card content */}
      {content && (
        <div style={{ padding: 'var(--cds-spacing-05)', ...contentSX }} className={contentClass || ''}>
          {children}
        </div>
      )}
      {!content && children}

      {/* actions & footer divider */}
      {actions && <hr style={{ border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)', margin: 0 }} />}

      {actions && <div style={{ padding: 'var(--cds-spacing-05)', ...footerSX }}>{actions}</div>}
    </Tile>
  );
}

SubCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.any]),
  className: PropTypes.string,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  sx: PropTypes.object,
  contentSX: PropTypes.object,
  footerSX: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  actions: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  others: PropTypes.any
};