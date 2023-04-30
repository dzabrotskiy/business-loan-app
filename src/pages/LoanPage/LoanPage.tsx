import { steps } from '@constants/steps';
import { BusinessDetails } from '@widgets/BusinessDetails';
import type { Application } from 'types/application';
import { Review } from '@widgets/Review';
import { useGetDecisionMutation } from '@services/api/decision';
import { Result } from '@widgets/Result';

import { useCallback, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Box,
  Button,
} from '@mui/material';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

export function LoanPage() {
  const applicationForm = useForm<Application>();

  const application = useWatch({ control: applicationForm.control });

  const [activeStep, setActiveStep] = useState<number>(0);

  const getDecisionMutation = useGetDecisionMutation();

  const onStepChange = useCallback(
    (step: 'next' | 'prev') => {
      return () => {
        if (activeStep + 1 === 2) {
          getDecisionMutation.mutate(application as Application, {
            onSuccess() {
              setActiveStep(2);
            },
            onError() {
              setActiveStep(2);
            },
          });
        } else {
          setActiveStep((prev) => (step === 'next' ? prev + 1 : prev - 1));
        }
      };
    },
    [activeStep],
  );

  return (
    <FormProvider {...applicationForm}>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            Business Loan
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map(({ label, key }) => (
              <Step key={key}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && <BusinessDetails />}
          {activeStep === 1 && <Review />}
          {activeStep === 2 && <Result decision={getDecisionMutation.data} />}

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {activeStep !== 0 && activeStep !== 2 && (
              <Button onClick={onStepChange('prev')} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}
            {activeStep !== steps.length - 1 && (
              <Button
                variant="contained"
                onClick={onStepChange('next')}
                sx={{ mt: 3, ml: 1 }}
              >
                Next
              </Button>
            )}
          </Box>
        </Paper>
      </Container>
    </FormProvider>
  );
}
