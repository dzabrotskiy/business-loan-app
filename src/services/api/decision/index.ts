import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@services/api';
import { Application } from 'types/application';
import { Decision } from 'types/decision';

export function useGetDecisionMutation() {
  return useMutation(async (application: Application) => {
    const { data } = await axiosInstance.post<Decision>(
      '/api/loan/decision',
      application,
    );

    return data;
  });
}
