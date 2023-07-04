import { Poppins } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Vos',
  description: 'Web developpnent and design',
  keywords:
    'web development, web design, web developer, web designer, front-end, front end, front-end developer, front-end designer, front end developer, front end designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
