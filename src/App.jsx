import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contato from "./sections/Contato";
import Header from "./sections/Header";
import Orcamento from "./sections/Orcamento";
import Produtos from "./sections/Produtos";

function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Header />
      </div>
      <main>
        <Produtos />
        <Orcamento />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
