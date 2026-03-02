import './App.css'

const videoPicks = [
  {
    title: 'Construction, Remodeling, Home',
    category: 'Remodeling',
    source: 'Pixabay',
    link: 'https://pixabay.com/videos/construction-remodeling-home-7376/',
  },
  {
    title: 'Construction Worker Mixing White Powder',
    category: 'Remodeling',
    source: 'Pexels',
    link: 'https://www.pexels.com/video/construction-worker-mixing-white-powder-6473936/',
  },
  {
    title: 'Roof, Roofing, Construction',
    category: 'Roofing',
    source: 'Pixabay',
    link: 'https://pixabay.com/videos/roof-roofing-construction-214662/',
  },
  {
    title: 'Aerial View of Construction Workers on Roof',
    category: 'Roofing',
    source: 'Pexels',
    link: 'https://www.pexels.com/video/aerial-view-of-construction-workers-on-roof-34017007/',
  },
  {
    title: 'Skilled Workers Constructing a Wooden Frame House',
    category: 'Framing',
    source: 'Pexels',
    link: 'https://www.pexels.com/video/skilled-workers-constructing-a-wooden-frame-house-31025072/',
  },
  {
    title: 'Wooden Structure Under Construction in Nature Setting',
    category: 'Framing',
    source: 'Pexels',
    link: 'https://www.pexels.com/video/wooden-structure-under-construction-in-nature-setting-34196004/',
  },
]

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Local Construction Company</p>
        <h1>Remodeling, Roofing and Framing</h1>
        <p className="lead">
          We deliver practical upgrades, dependable roof work, and strong
          structural framing for homes and small commercial projects.
        </p>
        <div className="service-list">
          <span>Remodeling</span>
          <span>Roofing</span>
          <span>Framing</span>
        </div>
      </header>

      <section className="section">
        <h2>Free Video Picks</h2>
        <p className="section-copy">
          Curated stock footage you can use in this website. Always recheck the
          license page before publishing final marketing materials.
        </p>

        <div className="video-grid">
          {videoPicks.map((video) => (
            <article className="video-card" key={video.link}>
              <p className="video-meta">
                {video.category} · {video.source}
              </p>
              <h3>{video.title}</h3>
              <a href={video.link} target="_blank" rel="noreferrer">
                Open video
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section licenses">
        <h2>License Pages</h2>
        <ul>
          <li>
            <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">
              Pexels License
            </a>
          </li>
          <li>
            <a
              href="https://pixabay.com/service/license-summary/"
              target="_blank"
              rel="noreferrer"
            >
              Pixabay Content License Summary
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
