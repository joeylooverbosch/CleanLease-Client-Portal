import MeldingDetail from '@/components/melding-detail';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function MeldingDetailPage() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto p-4">
        <MeldingDetail />
      </main>
      <Footer />
    </>
  );
}
