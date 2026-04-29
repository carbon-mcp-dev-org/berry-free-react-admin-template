import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// carbon
import { Breadcrumb, BreadcrumbItem, Tile } from '@carbon/react';
import { Home, ChevronRight } from '@carbon/icons-react';

// project imports
import navigation from 'menu-items';

// ==============================|| BREADCRUMBS TITLE ||============================== //

function BTitle({ title }) {
  return (
    <div>
      <h4 className="cds--heading-04" style={{ fontWeight: 500 }}>
        {title}
      </h4>
    </div>
  );
}

export default function Breadcrumbs({
  card,
  custom = false,
  divider = false,
  heading,
  icon = true,
  icons,
  links,
  maxItems,
  rightAlign = true,
  separator = ChevronRight,
  title = true,
  titleBottom,
  sx,
  ...others
}) {
  const location = useLocation();
  const [main, setMain] = useState();
  const [item, setItem] = useState();

  let customLocation = location.pathname;

  useEffect(() => {
    navigation?.items?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        if (menu?.url && menu.url === customLocation) {
          setMain(menu);
          setItem(menu);
        } else {
          getCollapse(menu);
        }
      }
      return false;
    });
  });

  const getCollapse = (menu) => {
    if (!custom && menu.children) {
      menu.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
          if (collapse.url === customLocation) {
            setMain(collapse);
            setItem(collapse);
          }
        } else if (collapse.type && collapse.type === 'item') {
          if (customLocation === collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  let breadcrumbContent = <div />;
  let itemTitle = '';

  if (main && main.type === 'collapse') {
    const mainContent = (
      <BreadcrumbItem>
        {main.url ? (
          <Link to={main.url}>{main.title}</Link>
        ) : (
          <span>{main.title}</span>
        )}
      </BreadcrumbItem>
    );

    if (!custom && main && main.type === 'collapse' && main.breadcrumbs === true) {
      breadcrumbContent = (
        <Tile style={card === false ? { marginBottom: 'var(--cds-spacing-06)', background: 'transparent', ...sx } : { marginBottom: 'var(--cds-spacing-06)', ...sx }} {...others}>
          <div style={{ padding: card === false ? 0 : 'var(--cds-spacing-05)' }}>
            <div style={{ display: 'flex', flexDirection: rightAlign ? 'row' : 'column', justifyContent: rightAlign ? 'space-between' : 'flex-start', alignItems: rightAlign ? 'center' : 'flex-start', gap: 'var(--cds-spacing-03)' }}>
              {title && !titleBottom && <BTitle title={main.title} />}
              <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                  <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-02)' }}>
                    {icon && <Home size={16} />}
                    Dashboard
                  </Link>
                </BreadcrumbItem>
                {mainContent}
              </Breadcrumb>
              {title && titleBottom && <BTitle title={main.title} />}
            </div>
          </div>
          {card === false && divider !== false && <hr style={{ border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)', marginTop: 'var(--cds-spacing-05)' }} />}
        </Tile>
      );
    }
  }

  if ((item && item.type === 'item') || (item?.type === 'group' && item?.url) || custom) {
    itemTitle = item?.title;

    const itemContent = (
      <BreadcrumbItem isCurrentPage>
        {itemTitle}
      </BreadcrumbItem>
    );

    let tempContent = (
      <Breadcrumb noTrailingSlash>
        <BreadcrumbItem>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-02)' }}>
            {icon && <Home size={16} />}
            Dashboard
          </Link>
        </BreadcrumbItem>
        {main && (
          <BreadcrumbItem>
            {main.url ? (
              <Link to={main.url}>{main.title}</Link>
            ) : (
              <span>{main.title}</span>
            )}
          </BreadcrumbItem>
        )}
        {itemContent}
      </Breadcrumb>
    );

    if (custom && links && links?.length > 0) {
      tempContent = (
        <Breadcrumb noTrailingSlash>
          {links?.map((link, index) => (
            <BreadcrumbItem key={index} isCurrentPage={index === links.length - 1}>
              {link.to ? (
                <Link to={link.to}>{link.title}</Link>
              ) : (
                <span>{link.title}</span>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      );
    }

    if (item?.breadcrumbs !== false || custom) {
      breadcrumbContent = (
        <Tile style={card === false ? { marginBottom: 'var(--cds-spacing-06)', background: 'transparent', ...sx } : { marginBottom: 'var(--cds-spacing-06)', ...sx }} {...others}>
          <div style={{ padding: card === false ? 0 : 'var(--cds-spacing-05)' }}>
            <div style={{ display: 'flex', flexDirection: rightAlign ? 'row' : 'column', justifyContent: rightAlign ? 'space-between' : 'flex-start', alignItems: rightAlign ? 'center' : 'flex-start', gap: 'var(--cds-spacing-03)' }}>
              {title && !titleBottom && <BTitle title={custom ? heading : item?.title} />}
              <div>{tempContent}</div>
              {title && titleBottom && <BTitle title={custom ? heading : item?.title} />}
            </div>
          </div>
          {card === false && divider !== false && <hr style={{ border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)', marginTop: 'var(--cds-spacing-05)' }} />}
        </Tile>
      );
    }
  }

  return breadcrumbContent;
}

BTitle.propTypes = { title: PropTypes.string };

Breadcrumbs.propTypes = {
  card: PropTypes.bool,
  custom: PropTypes.bool,
  divider: PropTypes.bool,
  heading: PropTypes.string,
  icon: PropTypes.bool,
  icons: PropTypes.bool,
  links: PropTypes.array,
  maxItems: PropTypes.number,
  rightAlign: PropTypes.bool,
  separator: PropTypes.any,
  title: PropTypes.bool,
  titleBottom: PropTypes.bool,
  sx: PropTypes.any,
  others: PropTypes.any
};