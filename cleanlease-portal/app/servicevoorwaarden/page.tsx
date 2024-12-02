import ServiceVoorwaarden from '@/components/servicevoorwaarden';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ServiceVoorwaardenPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <ServiceVoorwaarden />
      </main>
      <Footer />
    </>
  );
}