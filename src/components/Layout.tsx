import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
	children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
