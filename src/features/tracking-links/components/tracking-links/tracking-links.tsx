'use client';

import useGetAllTrackingLinks from '@/features/tracking-links/hooks/get-all-tracking-links.hook';

export default function TrackingLinks() {
  const trackingLinks = useGetAllTrackingLinks();

  if (trackingLinks.isLoading) {
    return <p>Loading...</p>;
  }

  if (trackingLinks.isError) {
    return <p>Error</p>;
  }

  if (trackingLinks.data.length === 0) {
    return <p>No data</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {trackingLinks.data.map((trackingLink) => {
          return (
            <tr key={trackingLink.id}>
              <td>{trackingLink.id}</td>
              <td>{trackingLink.name}</td>
              <td>{trackingLink.url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
