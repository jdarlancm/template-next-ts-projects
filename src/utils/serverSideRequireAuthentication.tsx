import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
//import { parseCookies } from 'nookies';

function serverSideRequireAuthentication(gssp: GetServerSideProps) {
	return async (ctx: GetServerSidePropsContext) => {
		/*
      Realiza a protecao da rota Server side
			Utlizar na chamada do SeverSideProps de paginas proteginas

      export const getServerSideProps : GetServerSideProps = serverSideRequireAuthentication(async _ctx => {
				return {
					props: {}
				};
			});
    */

		//Implementar conforme a sua conifguracao de autenticação
		//const { ['nome-token']: token } = parseCookies(ctx);
		const token = null;

		if (!token) {
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			};
		}

		return await gssp(ctx);
	};
}

export { serverSideRequireAuthentication };
