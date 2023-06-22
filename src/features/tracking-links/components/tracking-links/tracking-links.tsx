import useAllTrackingLinks from '@/features/tracking-links/hooks/use-all-tracking-links.hook';

export default function TrackingLinks() {
  const trackingLinks = useAllTrackingLinks();

  if (trackingLinks.isLoading) return;
  if (trackingLinks.isError) return;

  return (
    <ul>
      {trackingLinks.data.map((trackingLink) => {
        return (
          <li key={trackingLink.id}>
            <strong>{trackingLink.name}</strong>
            <span>{trackingLink.url}</span>
          </li>
        );
      })}
    </ul>
  );
}
