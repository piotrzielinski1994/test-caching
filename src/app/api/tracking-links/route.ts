import TrackingLinksService from '@/features/tracking-links/tracking-links.service';
import { NextResponse } from 'next/server';

const asd: number[] = [];

export async function GET(request: Request) {
  const trackingLinks = TrackingLinksService.getAll();
  return NextResponse.json({
    data: trackingLinks,
  });
}

export async function POST(request: Request) {
  const trackingLink = TrackingLinksService.create({
    name: 'Asd',
  });

  return NextResponse.json({
    data: trackingLink,
  });
}
