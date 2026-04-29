import { Link } from 'react-router-dom';

// carbon
import { Grid, Column } from '@carbon/react';

// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';

import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import AuthLogin from '../auth-forms/AuthLogin';

// ================================|| AUTH3 - LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper1>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 68px)' }}>
          <div style={{ margin: 'var(--cds-spacing-05)', marginBottom: 0 }}>
            <AuthCardWrapper>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--cds-spacing-05)' }}>
                <div style={{ marginBottom: 'var(--cds-spacing-06)' }}>
                  <Link to="#" aria-label="logo">
                    <Logo />
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--cds-spacing-03)' }}>
                  <h2 className="cds--heading-04" style={{ color: 'var(--cds-text-secondary)' }}>
                    Hi, Welcome Back
                  </h2>
                  <p className="cds--body-01" style={{ fontSize: '16px', textAlign: 'center' }}>
                    Enter your credentials to continue
                  </p>
                </div>
                <div style={{ width: '100%' }}>
                  <AuthLogin />
                </div>
                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Link to="/pages/register" className="cds--link" style={{ textDecoration: 'none' }}>
                    Don&apos;t have an account?
                  </Link>
                </div>
              </div>
            </AuthCardWrapper>
          </div>
        </div>
        <div style={{ padding: 'var(--cds-spacing-06)', margin: 'var(--cds-spacing-06) 0' }}>
          <AuthFooter />
        </div>
      </div>
    </AuthWrapper1>
  );
}