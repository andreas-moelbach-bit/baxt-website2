export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="nav">
          <div className="logo">BAXT</div>
          <div className="links">
            <a href="#produkter">Produkter</a>
            <a href="#merkevarer">Merkevarer</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </div>

        <div className="heroContent">
          <p className="tag">Lett å like</p>
          <h1>Norges ledende leverandør av bakervarer</h1>
          <p>
            Vi leverer smakfulle bakervarer, sterke merkevarer og inspirerende
            produkter til dagligvare, servering og storhusholdning.
          </p>
          <div className="buttons">
            <a href="#produkter" className="primary">Se produkter</a>
            <a href="#kontakt" className="secondary">Kontakt oss</a>
          </div>
        </div>
      </section>

      <section id="produkter" className="section">
        <p className="eyebrow">Produktområder</p>
        <h2>Bakervarer for hverdag, helg og sesong</h2>

        <div className="cards">
          <div className="card big">
            <h3>Lefser og tradisjonsbakst</h3>
            <p>Norske smaker med sterke merkevarer og høy gjenkjøpsverdi.</p>
          </div>

          <div className="card">
            <h3>Kaker og søtbakst</h3>
            <p>Muffins, donuts, kaker og porsjonsprodukter.</p>
          </div>

          <div className="card">
            <h3>Brød og bakeoff</h3>
            <p>Praktiske løsninger for butikk, café og servering.</p>
          </div>
        </div>
      </section>

      <section id="merkevarer" className="brandsSection">
        <p className="eyebrow">Merkevarer</p>
        <h2>Sterke navn i hyllene</h2>

        <div className="brands">
          {[
            "Berthas",
            "Vestlandslefsa",
            "Bakeverket",
            "Aunt Mabel’s",
            "Dan Cake",
            "Almondy"
          ].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </section>

      <section className="split">
        <div>
          <p className="eyebrow">Servering</p>
          <h2>Produkter som gjør det enklere å lykkes</h2>
        </div>

        <p>
          Baxt tilbyr et bredt sortiment for café, kiosk, kantine,
          bensinstasjon og storhusholdning.
        </p>
      </section>

      <section id="kontakt" className="contact">
        <h2>Vil du vite mer?</h2>
        <p>Ta kontakt med Baxt AS.</p>
        <p>Telefon: +47 33 13 27 80</p>
        <p>Adresse: Hegdalringen 27, 3261 Larvik</p>
        <a href="mailto:post@baxt.no" className="primary">post@baxt.no</a>
      </section>
    </main>
  );
}
