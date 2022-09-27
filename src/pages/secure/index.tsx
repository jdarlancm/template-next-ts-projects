import { serverSideRequireAuthentication } from '@utils/serverSideRequireAuthentication';
import { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<h1>this content is secure... you not see!</h1>
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps =
	serverSideRequireAuthentication(async (_ctx) => {
		return {
			props: {},
		};
	});
