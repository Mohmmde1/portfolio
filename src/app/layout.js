import {Inter} from 'next/font/google';
import './globals.css';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter ({subsets: ['latin']});

export const metadata = {
  title: 'Machine Learning Expert | Software Engineer | Full Stack Developer',
  description: 'I am a Machine Learning Expert, Software Engineer, and Full Stack Developer. I have a passion for building software and machine learning models that solve real-world problems. I am a lifelong learner and I am always looking for new challenges and opportunities to grow.',
  image: '/user.svg',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-[100dvh]">

            <Header />
            {children}
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
