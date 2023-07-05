import CreateTrackingLinkForm from '@/features/tracking-links/components/create-tracking-link-form/create-tracking-link-form';
import TrackingLinks from '@/features/tracking-links/components/tracking-links/tracking-links';

export default function HomePage() {
  return (
    <main>
      <h1>HomePage</h1>
      <TrackingLinks />
      <CreateTrackingLinkForm />
    </main>
  );
}
