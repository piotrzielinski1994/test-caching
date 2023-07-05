import { NextRequest, NextResponse } from 'next/server';
import TrackingLinksService from './tracking-links.service';
import wait from '@/utils/wait';

export default abstract class TrackingLinksController {
  static async getAll(request: NextRequest) {
    await wait();
    const trackingLinks = TrackingLinksService.getAll();
    return NextResponse.json(trackingLinks);
  }

  static async getOne(request: NextRequest, context: any) {
    await wait();
    const id = Number(context.params.id);
    const trackingLink = TrackingLinksService.getOne(id);

    if (!trackingLink) {
      NextResponse.json(null, { status: 404 });
    }

    return NextResponse.json(trackingLink);
  }

  static async create(request: NextRequest) {
    await wait();
    const body = await request.json();
    const trackingLink = TrackingLinksService.create(body);
    return NextResponse.json(trackingLink);
  }
}
