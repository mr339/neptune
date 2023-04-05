import { NextResponse } from 'next/server';

export default function middleware(req) {
  let verify = req.cookies.get('isLoggedIn')?.value;
  let url = req.nextUrl.pathname;

  const redirectToLogin = NextResponse.redirect(
    new URL('/auth/login', req.url)
  );

  if (!verify && !url.startsWith('/auth')) {
    return redirectToLogin;
  } else if (verify && url.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*', '/contact'],
};
