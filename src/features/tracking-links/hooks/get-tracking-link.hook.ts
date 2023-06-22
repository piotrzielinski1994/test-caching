import { useQuery } from '@tanstack/react-query';
import { TrackingLink } from '../tracking-links.types';

export default function useGetTrackingLink({
  id,
  isEnabled,
}: {
  id?: TrackingLink['id'];
  isEnabled?: boolean;
}) {
  return useQuery({
    queryKey: ['tracking-links', { id }],
    queryFn: function (): Promise<TrackingLink[]> {
      return fetch(`/api/tracking-links/${id}`).then((res) => res.json());
    },
    enabled: isEnabled,
    refetchInterval: isEnabled && 1000,
  });
}
