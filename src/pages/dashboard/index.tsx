import ContactsList from "./components/ContactsList";
import { DashboardContainer } from "./style";

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <header>
        <h1>Meus contatos</h1>
        
      </header>

      <main>
        <ContactsList />
      </main>
    </DashboardContainer>
  );
}
