import { Decision } from 'types/decision';

import { Typography } from '@mui/material';

type Props = {
  decision: Decision | undefined;
};

export function Result({ decision }: Props) {
  if (!decision) return null;

  return (
    <div>
      <Typography>Status: {decision?.status}</Typography>
      {decision?.preAssessment && (
        <Typography>Status: {decision.preAssessment}</Typography>
      )}
    </div>
  );
}
