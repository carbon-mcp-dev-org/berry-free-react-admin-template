import PropTypes from 'prop-types';

// carbon
import { Tile } from '@carbon/react';

// ==============================|| MAIN CARD ||============================== //

export default function MainCard({
  border = false,
  boxShadow,
  children,
  content = true,
  contentClass = '',
  contentSX = {},
  headerSX = {},
  darkTitle,
  secondary,
  shadow,
  sx = {},
  title,
  ref,
  ...others
}) {
  return (
    <Tile
      ref={ref}
      {...others}
      style={{
        border: border ? '1px solid var(--cds-border-subtle-01)' : 'none',
        ...sx
      }}
    >
      {/* card header and action */}
      {title && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--cds-spacing-05)', ...headerSX }}>
          {darkTitle ? (
            <h3 className="cds--heading-03">{title}</h3>
          ) : (
            <h4 className="cds--heading-02">{title}</h4>
          )}
          {secondary && <div>{secondary}</div>}
        </div>
      )}

      {/* content & header divider */}
      {title && <hr style={{ border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)', margin: '0 0 var(--cds-spacing-05) 0' }} />}

      {/* card content */}
      {content && (
        <div style={contentSX} className={contentClass}>
          {children}
        </div>
      )}
      {!content && children}
    </Tile>
  );
}

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  headerSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.any,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ref: PropTypes.object,
  others: PropTypes.any
};