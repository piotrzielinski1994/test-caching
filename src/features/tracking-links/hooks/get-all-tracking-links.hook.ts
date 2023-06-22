import { useQuery } from '@tanstack/react-query';
import { TrackingLink } from '../tracking-links.types';

export default function useGetAllTrackingLinks() {
  return useQuery({
    queryKey: ['tracking-links'],
    queryFn: function (): Promise<TrackingLink[]> {
      return fetch('/api/tracking-links').then((res) => res.json());
    },
  });
}
