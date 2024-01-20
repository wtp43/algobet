'use client';

import { Welcome } from '../components/Welcome/Welcome';

import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { MetaData } from 'next';

// export const metadata: Metadata = {
//   title: 'algobet',
//   description: 'data visualization for nba stats',
// };

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
