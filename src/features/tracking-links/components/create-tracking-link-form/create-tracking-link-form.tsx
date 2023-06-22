'use client';

import { FormEvent, useRef, useState } from 'react';
import useCreateTrackingLink from '@/features/tracking-links/hooks/create-tracking-link.hook';
import useGetTrackingLink from '@/features/tracking-links/hooks/get-tracking-link.hook';

export default function CreateTrackingLinkForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const createTrackingLink = useCreateTrackingLink();
  const trackingLink = useGetTrackingLink({
    isEnabled: false,
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nameInput.current) return;

    createTrackingLink.mutate(nameInput.current.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={nameInput} />
      <button>Create</button>
    </form>
  );
}
