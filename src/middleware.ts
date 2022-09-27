// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	//TODO pode ser feito um condicional para acesso a rotas especificas.
	//Achar uma forma de levar para a pasta middleware
	//Adicionar as rotas protegidas em config
	//E colocar no condicional o redirecionamento
	//ex.: if( !isAuthenticated) redirect "/"
	//Essa protecao é a Client Side
	return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
	matcher: ['/secure/:path*'],
};
