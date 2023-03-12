import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

import { Analytics } from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange
    >
            <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  )
} 

export default MyApp
