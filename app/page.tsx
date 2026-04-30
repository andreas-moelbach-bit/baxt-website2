export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="logo">BAXT AS</div>
        <nav>
          <a href="#produkter">Produkter</a>
          <a href="#merkevarer">Merkevarer</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero">
        <p className="tag">Lett å like</p>
        <h1>Norges ledende leverandør av bakervarer</h1>
        <p>
          Baxt AS leverer et bredt utvalg bakervarer til dagligvare,
          servering og storhusholdning.
        </p>
        <a className="button" href="#kontakt">Kontakt oss</a>
      </section>

      <section id="produkter" className="section">
        <h2>Produktområder</h2>
        <div className="grid">
          <div className="card">
            <h3>Lefser og tradisjonsbakst</h3>
            <p>Norske baketradisjoner med sterke merkevarer.</p>
          </div>
          <div className="card">
            <h3>Kaker og søtbakst</h3>
            <p>Kaker, muffins, donuts og andre fristelser.</p>
          </div>
          <div className="card">
            <h3>Brød og bakeoff</h3>
            <p>Praktiske løsninger for butikk og servering.</p>
          </div>
        </div>
      </section>

      <section id="merkevarer" className="section beige">
        <h2>Utvalgte merkevarer</h2>
        <div className="brands">
          <span>Berthas</span>
          <span>Vestlandslefsa</span>
          <span>Bakeverket</span>
          <span>Aunt Mabel’s</span>
          <span>Dan Cake</span>
          <span>Almondy</span>
        </div>
      </section>

      <section id="kontakt" className="section dark">
        <h2>Kontakt Baxt</h2>
        <p>E-post: post@baxt.no</p>
        <p>Telefon: +47 33 13 27 80</p>
        <p>Adresse: Hegdalringen 27, 3261 Larvik</p>
      </section>
    </main>
  );
}
