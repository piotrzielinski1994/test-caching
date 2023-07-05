import { useQuery } from '@tanstack/react-query';
import { TrackingLink } from '../tracking-links.types';

export default function useGetTrackingLink({ id }: { id?: TrackingLink['id'] }) {
  return useQuery({
    queryKey: ['tracking-links', { id }],
    queryFn: function (): Promise<TrackingLink> {
      return fetch(`/api/tracking-links/${id}`).then((res) => res.json());
    },
    enabled: !!id,
    refetchInterval: (trackingLink) => {
      if (!!trackingLink?.url) return false;
      return 1000;
    },
  });
}
