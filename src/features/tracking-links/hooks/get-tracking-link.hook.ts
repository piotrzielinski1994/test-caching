import { useQuery, useQueryClient } from '@tanstack/react-query';
import { TrackingLink } from '../tracking-links.types';

export default function useGetTrackingLink({ id }: { id?: TrackingLink['id'] }) {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['tracking-links', { id }],
    queryFn: function (): Promise<TrackingLink> {
      return fetch(`/api/tracking-links/${id}`).then((res) => res.json());
    },
    enabled: !!id,
    refetchInterval: function (trackingLink) {
      if (!!trackingLink?.url) return false;
      return 1000;
    },
    onSuccess: function (trackingLink) {
      queryClient.setQueryData<TrackingLink[]>(['tracking-links'], (currentTrackingLinks = []) => {
        return currentTrackingLinks.map((it) => {
          if (it.id !== trackingLink.id) return it;
          return trackingLink;
        });
      });
    },
  });
}
