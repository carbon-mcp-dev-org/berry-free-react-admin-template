import PropTypes from 'prop-types';

// project imports
import useConfig from 'hooks/useConfig';

// ==============================|| CARBON THEME - MAIN ||============================== //

export default function ThemeCustomization({ children }) {
  const {
    state: { borderRadius, fontFamily, outlinedFilled, presetColor }
  } = useConfig();

  // Carbon Design System handles theming via SCSS variables and CSS custom properties
  // Configuration state preserved for potential future customization needs

  return <>{children}</>;
}

ThemeCustomization.propTypes = { children: PropTypes.node };