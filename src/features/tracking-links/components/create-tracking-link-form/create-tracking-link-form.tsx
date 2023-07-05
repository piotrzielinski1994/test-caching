'use client';

import { FormEvent, useRef } from 'react';
import useCreateTrackingLink from '@/features/tracking-links/hooks/create-tracking-link.hook';
import useGetTrackingLink from '@/features/tracking-links/hooks/get-tracking-link.hook';

export default function CreateTrackingLinkForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const createTrackingLink = useCreateTrackingLink();
  const trackingLink = useGetTrackingLink({
    id: createTrackingLink.data?.id,
  });
  const isPolling = Boolean(trackingLink.data && !trackingLink.data.url);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nameInput.current) return;

    createTrackingLink.mutate(nameInput.current.value);
  }

  if (isPolling) {
    return 'Polling...';
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={nameInput} />
      <button>{trackingLink.isFetching ? 'Loading...' : 'Create'}</button>
    </form>
  );
}
