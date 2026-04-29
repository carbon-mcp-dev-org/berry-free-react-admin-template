import { useEffect, useState } from 'react';

// carbon
import { Grid, Column } from '@carbon/react';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';

import { gridSpacing } from 'store/constant';

// assets
import { ShoppingBag } from '@carbon/icons-react';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid fullWidth>
      <Column lg={16} md={8} sm={4}>
        <Grid fullWidth style={{ marginBottom: 'var(--cds-spacing-05)' }}>
          <Column lg={5} md={4} sm={4}>
            <EarningCard isLoading={isLoading} />
          </Column>
          <Column lg={5} md={4} sm={4}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Column>
          <Column lg={6} md={8} sm={4}>
            <Grid fullWidth>
              <Column lg={8} md={4} sm={2}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Column>
              <Column lg={8} md={4} sm={2}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <ShoppingBag size={24} />
                  }}
                />
              </Column>
            </Grid>
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4}>
        <Grid fullWidth>
          <Column lg={12} md={8} sm={4}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Column>
          <Column lg={4} md={8} sm={4}>
            <PopularCard isLoading={isLoading} />
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}