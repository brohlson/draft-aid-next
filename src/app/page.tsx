import DraftView from "./components/DraftView";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <Header />
      <DraftView />
      <Footer />
    </main>
  );
}
