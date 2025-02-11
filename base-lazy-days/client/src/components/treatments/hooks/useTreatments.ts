import { useQuery, useQueryClient } from 'react-query';

import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');

  return data;
}

// export function useTreatments(): Treatment[] {
//   const fallback = [];
//   // fallback als default-value
//   const { data = fallback } = useQuery(queryKeys.treatments, getTreatments, {
//     staleTime: 600000, // 10 minutes
//     cacheTime: 900000, // 15 minutes ( doesn't make sense for stateTime to exceed (>) cacheTime)
//     refetchOnMount: false,
//     refetchOnWindowFocus: false,
//     refetchOnReconnect: false,
//   });
//   return data;
// }
export function useTreatments(): Treatment[] {
  const fallback = [];
  // fallback als default-value
  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments);
  return data;
}

// export function usePrefetchTreatments(): void {
//   const queryClient = useQueryClient();
//   queryClient.prefetchQuery(queryKeys.treatments, getTreatments, {
//     staleTime: 600000, // 10 minutes
//     cacheTime: 900000, // 15 minutes ( doesn't make sense for stateTime to exceed (>) cacheTime)
//   });
// }
export function usePrefetchTreatments(): void {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.treatments, getTreatments);
}
