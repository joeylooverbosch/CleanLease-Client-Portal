import AccountOverzicht from '@/components/account-overzicht';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function MeldingDetailPage() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto p-4">
        <AccountOverzicht />
      </main>
      <Footer />
    </>
  );
}
