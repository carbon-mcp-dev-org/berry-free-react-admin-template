import { useState } from 'react';
import { Link } from 'react-router-dom';

// carbon
import { Button, Checkbox, TextInput, PasswordInput, Grid, Column } from '@carbon/react';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ===============================|| JWT - LOGIN ||=============================== //

export default function AuthLogin() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <TextInput
        id="email-login"
        labelText="Email Address / Username"
        type="email"
        defaultValue="info@codedthemes.com"
        name="email"
        style={{ marginBottom: 'var(--cds-spacing-05)' }}
      />

      <PasswordInput
        id="password-login"
        labelText="Password"
        defaultValue="123456"
        name="password"
        style={{ marginBottom: 'var(--cds-spacing-05)' }}
      />

      <Grid fullWidth style={{ marginBottom: 'var(--cds-spacing-05)' }}>
        <Column sm={4} md={4} lg={8}>
          <Checkbox
            id="keep-logged-in"
            labelText="Keep me logged in"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
        </Column>
        <Column sm={4} md={4} lg={8} style={{ textAlign: 'right' }}>
          <Link to="#!" className="cds--link" style={{ textDecoration: 'none' }}>
            Forgot Password?
          </Link>
        </Column>
      </Grid>

      <div style={{ marginTop: 'var(--cds-spacing-05)' }}>
        <AnimateButton>
          <Button kind="primary" size="lg" type="submit" style={{ width: '100%' }}>
            Sign In
          </Button>
        </AnimateButton>
      </div>
    </>
  );
}