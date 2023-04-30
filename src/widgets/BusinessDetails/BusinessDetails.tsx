import { useBusinessesQuery } from '@services/api/businesses';
import { useProvidersQuery } from '@services/api/providers';
import type { Application } from 'types/application';

import { Autocomplete, FormControl, Stack, TextField } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';

export function BusinessDetails() {
  const { data: businesses } = useBusinessesQuery();
  const { data: providers } = useProvidersQuery();

  const { control } = useFormContext<Application>();

  const { field: business } = useController({
    control,
    name: 'business',
  });

  const { field: provider } = useController({
    control,
    name: 'provider',
  });

  const { field: amount } = useController({
    control,
    name: 'amount',
  });

  if (!businesses || !providers) return null;

  return (
    <FormControl fullWidth={true}>
      <Stack spacing={4}>
        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Business" />}
          options={businesses}
          getOptionLabel={(option) => option.name}
          onChange={(_, value) => business.onChange(value)}
          value={business.value}
        />

        <Autocomplete
          renderInput={(params) => <TextField {...params} label="Provider" />}
          options={providers}
          getOptionLabel={(option) => option.name}
          onChange={(_, value) => provider.onChange(value)}
          value={provider.value}
        />

        <TextField
          label="Amount"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => amount.onChange(e.target.value)}
          value={amount.value}
        />
      </Stack>
    </FormControl>
  );
}
