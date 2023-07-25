import { MainLayout } from './components/layout/MainLayout';
import { Apps } from './components/modules/index/Apps';
import { Contacts } from './components/modules/index/Contacts';
import { Features } from './components/modules/index/Features';
import { Forms } from './components/modules/index/Forms';
import { Hero } from './components/modules/index/Hero';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Apps />
      <Contacts />
      <Forms />
    </MainLayout>
  );
}
