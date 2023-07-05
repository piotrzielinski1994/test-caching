import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TrackingLink } from '@/features/tracking-links/tracking-links.types';

export default function useCreateTrackingLink() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: function (name: TrackingLink['name']): Promise<TrackingLink> {
      return fetch('/api/tracking-links', {
        method: 'post',
        body: JSON.stringify({ name }),
      }).then((res) => res.json());
    },
    onSuccess: function (trackingLink: TrackingLink) {
      queryClient.setQueryData(['tracking-links', { id: trackingLink.id }], trackingLink);
      queryClient.setQueryData<TrackingLink[]>(['tracking-links'], (currentTrackingLinks = []) => {
        return [...currentTrackingLinks, trackingLink];
      });
    },
  });
}
