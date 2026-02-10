import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.startsWith('/en') ? 'en' : 'pl';

  const response = NextResponse.next();
  response.headers.set('x-locale', locale);
  response.headers.set('x-pathname', pathname);
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|media|brands|catalog|preview|robots\\.txt|public).*)',
  ],
};
