import { FlowLayout } from '../components/FlowLayout'
import '../FlowCaseStudies.css'

const flowImg = (path) => `https://flow.db.com/${path}`

const images = {
  paypal: flowImg(
    'contentAsset/image/3208639c-8015-445f-961b-e43efbb5cd50/fileAsset/filter/Resize,Jpeg/resize_w/1280/19f0ae47-d0d5-484c-a933-0a2bad8ed65c.jpg'
  ),
  guinea: flowImg(
    'contentAsset/image/0acd20f2-bafe-4823-89f9-0ad7202a21b1/fileAsset/filter/Resize,Jpeg/resize_w/1280/82cecc8f-8985-4a9d-a645-d5cef8314791l.jpg'
  ),
  darEsSalaam: flowImg(
    'contentAsset/image/92d60604-bbe7-404b-b31e-7ea1484730d3/fileAsset/filter/Resize,Jpeg/resize_w/1280/c1b706dd-8e48-40c7-b43b-e7ab6514367el.jpg'
  ),
  digest: flowImg(
    'contentAsset/image/4f802bd7-ab16-4c03-8f7e-682e4ed9a57e/fileAsset/filter/Resize,Jpeg/resize_w/1280/71f9874d-e66e-4ee4-9c84-41f480cb6b5f.jpg'
  ),
  abb: flowImg(
    'contentAsset/image/fe69e4c8-bf9b-4e9d-b9fd-2b45c8989726/fileAsset/filter/Resize,Jpeg/resize_w/1280/c00203ad-2a41-45f6-8316-08546c7c7298l.jpg'
  ),
  allseas: flowImg(
    'contentAsset/image/8c291f57-7e1d-4bfe-87a3-64cc0de27087/fileAsset/filter/Resize,Jpeg/resize_w/1280/e273faa4-cca3-4cf8-9a69-72ae3e3d8465l.jpg'
  ),
  firstPacific: flowImg(
    'contentAsset/image/92e98b79-a4da-4b72-977b-db133dd90efb/fileAsset/filter/Resize,Jpeg/resize_w/1280/1970721a-b782-4e02-9068-70a9a2bb1694l.jpg'
  ),
  ctaBg: flowImg(
    'contentAsset/raw-data/1e42ea67-9bd8-4e18-b7fc-709db278e2f9/fileAsset?language_id=1'
  ),
  embedding: flowImg(
    'contentAsset/image/0d69f084-4e68-44ab-9dcc-ad2751982976/fileAsset/filter/Resize,Jpeg/resize_w/1280/1ce77682-798e-40b9-9e6f-fea0f90fdf51l.jpg'
  ),
  siemens: flowImg(
    'contentAsset/image/3efe7010-e5bb-4033-bc53-192e292e5853/fileAsset/filter/Resize,Jpeg/resize_w/1280/d79c6b6d-c8e1-4f5b-8c07-5fd00cdf5e1el.jpg'
  ),
  henkel: flowImg(
    'contentAsset/image/49b61a39-764e-43ca-97b5-0293fbd8b5ac/fileAsset/filter/Resize,Jpeg/resize_w/1280/c4068846-61ad-4260-b6aa-2f6fc22d9337l.jpg'
  ),
  jsw: flowImg(
    'contentAsset/image/5b2761e5-4a86-4da0-9afa-af99f8aaa5bb/fileAsset/filter/Resize,Jpeg/resize_w/1280/23183fbe-e041-4667-bcfc-b933b8584321l.jpg'
  ),
  bayer: flowImg(
    'contentAsset/image/e4567843-fbbe-4f78-a491-a367ca8b55aa/fileAsset/filter/Resize,Jpeg/resize_w/1280/e6cb93e5-f9fb-4596-a503-97c8774d29cbl.jpg'
  ),
  hutchmed: flowImg(
    'contentAsset/image/ef47e37b-8f50-46ab-9461-381bc0cc7a26/fileAsset/filter/Resize,Jpeg/resize_w/1280/6fd2aff9-f113-42f0-b804-7e481072637dl.jpg'
  ),
  brazil: flowImg(
    'contentAsset/image/c5cd095f-1315-4b73-b543-453551733cf4/fileAsset/filter/Resize,Jpeg/resize_w/1280/b5108e40-a355-45e6-be60-e6ced6247796l.jpg'
  ),
  celanese: flowImg(
    'contentAsset/image/b0dda2d8-fe56-42ba-860c-13faf7f2781a/fileAsset/filter/Resize,Jpeg/resize_w/1280/e1cbea1b-0cee-435e-9174-352cd447c73cl.jpg'
  ),
  westAfrica: flowImg(
    'contentAsset/image/986375be-554f-437c-af0f-497b1b1b02ac/fileAsset/filter/Resize,Jpeg/resize_w/1280/5a53e4ca-4a1c-430c-9724-bb95175bc520l.jpg'
  ),
}

const mostRead = [
  {
    tags: 'flow case studies, Sustainable finance',
    title: 'Salzgitter AG: transitioning to green steel',
    href: '#',
  },
  {
    tags: 'flow case studies, Cash management',
    title: 'Treasury forward',
    href: '#',
  },
  {
    tags: 'flow case studies, Cash management, Technology',
    title: 'How BioNTech masters real-time treasury',
    href: '#',
  },
  {
    tags: 'flow case studies, Cash management',
    title: 'Stabilus: Setting up business in India',
    href: '#',
  },
  {
    tags: 'flow case studies, Trust and agency services',
    title: "AstraZeneca and tomorrow's therapeutics",
    href: '#',
  },
]

const row3Cards = [
  {
    image: images.abb,
    category: 'flow case studies, Cash management',
    title: "Fewer accounts, faster payments: ABB's path to a more efficient treasury",
    text: "Supporting ABB's purpose of enabling sustainability and resource efficiency also requires internal functions to operate with greater efficiency. ABB's Corporate Treasury team, for instance, is using virtual bank accounts to run a leaner and more efficient operation. flow's Will Monroe finds out more",
    href: '#',
  },
  {
    image: images.allseas,
    category: 'flow case studies, Cash management',
    title: 'Allseas: Pioneering offshore construction',
    text: "When Dutch-Swiss global offshore energy contractor Allseas expanded operations into Brazil, its treasury team faced new challenges around onshore/offshore conversion, funding alignment and documentation frameworks. flow's Clarissa Dann reports on how Deutsche Bank helped to provide an integrated solution",
    href: '#',
  },
  {
    image: images.firstPacific,
    category: 'Trust and Securities Services, flow case studies',
    title: 'First Pacific: maximising long-term value for investors',
    text: "Headquartered in Hong Kong SAR, First Pacific is one of Asia's leading investment holding companies. How does it keep its own investors engaged and loyal? flow's Will Monroe talked to John W Ryan, Group Chief Investor Relations Officer, to find out",
    href: '#',
  },
]

const gridCards = [
  {
    image: images.embedding,
    category: 'Cash management, flow case studies',
    title: 'Embedding the future of finance',
    text: "Cash flow visibility and supplier engagement are among the benefits that result when financial services are embedded into non-financial platforms. flow's Clarissa Dann examines corporate appetite for embedded finance and shares how Deutsche Bank has combined the innovation and agility of a start-up with the safety of a Tier-1 European bank to make this available to clients",
    href: '#',
  },
  {
    image: images.siemens,
    category: 'flow case studies, Cash Management',
    title: 'Siemens Treasury: leading innovation in real-time payments',
    text: "Siemens' belief in the potential of new technology is reflected in the company's continued Corporate Treasury evolution. Heiko Nix, Siemens' Global Head of Cash Management and Payments, updates treasury journalist Graham Buck on the ongoing journey",
    href: '#',
  },
  {
    image: images.henkel,
    category: 'flow case studies, Cash management',
    title: 'Henkel China: a Shanghai powerhouse',
    text: "The sealants-to-shampoos multinational is steadily expanding its products portfolio in Asia Pacific and digitalisation of payments is sharpening its customer service. Henkel China's Regional Treasurer APAC, Sophie Yang, tells flow's Will Monroe that innovation is central to driving growth",
    href: '#',
  },
  {
    image: images.jsw,
    category: 'flow case studies, Cash management',
    title: 'JSW One Platforms: it started with steel',
    text: "Over four decades, India's JSW Group has grown from a steel re-rolling mill near Mumbai to a major conglomerate with interests spanning energy, infrastructure, cement, paint and e-commerce. Treasury journalist Graham Buck charts the company's progress",
    href: '#',
  },
  {
    image: images.bayer,
    category: 'flow case studies, Cash management',
    title: 'From groundbreaking pharma to breaking new ground',
    text: "Bayer AG, the life sciences multinational, has shaken up its traditional structure with a global initiative. The company's Corporate Treasury team tells Graham Buck how the spirit of agility and innovation powered an in-house bank project with Deutsche Bank",
    href: '#',
  },
  {
    image: images.hutchmed,
    category: 'flow case studies, Trust and agency services',
    title: 'A biopharmaceutical organic growth story',
    text: "HUTCHMED's cutting-edge work helps reduce the toxicity of cancer drugs while increasing their efficacy. flow's Clarissa Dann finds out how this innovative company is delivering progress for patients and financial self-sufficiency for shareholders",
    href: '#',
  },
  {
    image: images.brazil,
    category: 'flow case studies, Cash management, Trade finance and lending',
    title: "Brazil's gateway to global trade",
    text: "How can Brazilian businesses finance cross-border trade in a volatile global landscape? Drawing on the example of Banco do Brasil – the country's second-largest bank – flow explores the role that correspondent banking plays in enabling these transactions",
    href: '#',
  },
  {
    image: images.celanese,
    category: 'flow case studies, Cash management',
    title: 'How Celanese uses virtual accounts to streamline its cash',
    text: "US-based specialty materials and chemicals company Celanese is rebuilding its global liquidity structure. Treasury specialists Hugo Rivera and Peter Szucs tell flow's Desirée Buchholz why virtual accounts play a key role in this project – and what lessons they have learned from peers",
    href: '#',
  },
  {
    image: images.westAfrica,
    category: 'Trade finance, flow case studies',
    title: 'Building essential infrastructure in West Africa',
    text: "As West African countries have built their economies, it has often been a lack of infrastructure that has held them back. flow's Clarissa Dann looks at the trading history of Nigeria and Cameroon and shares case studies of how export finance has enabled improved electricity supplies and a vital road",
    href: '#',
  },
]

const moreArticles = [
  {
    meta: 'flow case studies | March 12, 2025',
    title: "Inside PayPal's treasury transformation",
    excerpt:
      "Moving money is in PayPal's DNA – which presents specific challenges for the treasury department. PayPal's Group Treasurer Can Balcioglu tells flow's Desirée Buchholz how his team modernised treasury infrastructure…",
  },
  {
    meta: 'flow case studies | February 28, 2025',
    title: "Guinea's wealth creation manifesto",
    excerpt:
      "flow's Clarissa Dann reports on how The Republic of Guinea's government chose the UK Export Finance and Deutsche Bank partnership to develop the Koloma Administrative City…",
  },
  {
    meta: 'flow case studies | February 14, 2025',
    title: "Financing Dar es Salaam's new bus network",
    excerpt:
      "As bus rapid transit (BRT) systems in Africa continue to expand in response to increased urbanisation, flow's Clarissa Dann profiles the roll-out in Tanzania's Dar es Salaam…",
  },
  {
    meta: 'flow case studies | January 30, 2025',
    title: "Fewer accounts, faster payments: ABB's path to a more efficient treasury",
    excerpt:
      "Supporting ABB's purpose of enabling sustainability and resource efficiency also requires internal functions to operate with greater efficiency…",
  },
  {
    meta: 'flow case studies | January 15, 2025',
    title: 'Allseas: Pioneering offshore construction',
    excerpt:
      'When Dutch-Swiss global offshore energy contractor Allseas expanded operations into Brazil, its treasury team faced new challenges around onshore/offshore conversion…',
  },
  {
    meta: 'flow case studies | December 20, 2024',
    title: 'First Pacific: maximising long-term value for investors',
    excerpt:
      "Headquartered in Hong Kong SAR, First Pacific is one of Asia's leading investment holding companies. How does it keep its own investors engaged and loyal?",
  },
  {
    meta: 'flow case studies | December 5, 2024',
    title: 'Embedding the future of finance',
    excerpt:
      'Cash flow visibility and supplier engagement are among the benefits that result when financial services are embedded into non-financial platforms…',
  },
  {
    meta: 'flow case studies | November 18, 2024',
    title: 'Siemens Treasury: leading innovation in real-time payments',
    excerpt:
      "Siemens' belief in the potential of new technology is reflected in the company's continued Corporate Treasury evolution…",
  },
]

function FlowEm() {
  return <em>flow</em>
}

function renderCategory(category) {
  return category.split(/,\s*/).map((part, i) => {
    const lower = part.toLowerCase()
    if (lower === 'flow case studies' || lower === 'flow') {
      return (
        <span key={`${part}-${i}`}>
          {i > 0 ? ', ' : ''}
          <FlowEm /> case studies
        </span>
      )
    }
    return (
      <span key={`${part}-${i}`}>
        {i > 0 ? ', ' : ''}
        {part}
      </span>
    )
  })
}

function CaseStudyCard({ image, category, title, text, href, cta = 'More' }) {
  return (
    <article className="fcs-card">
      <a href={href} className="fcs-card-media">
        <img src={image} alt="" loading="lazy" />
      </a>
      <div className="fcs-card-body">
        <h3>{renderCategory(category)}</h3>
        <h2>
          <a href={href}>{title}</a>
        </h2>
        <p>{text}</p>
        <a href={href} className="fcs-btn fcs-btn-primary">
          {cta}
        </a>
      </div>
    </article>
  )
}

export default function FlowCaseStudiesPage() {
  return (
    <FlowLayout activeNav="Case studies">
      <div className="cms-content-wrapper">
        <nav className="fcs-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/corporates">Corporates</a>
          <span>/</span>
          <a href="/flow/case-studies">
            <FlowEm />
          </a>
          <span>/</span>
          Case studies
        </nav>

        <section className="fcs-page-title">
          <h1>
            <FlowEm /> case studies
          </h1>
        </section>
      </div>

      <section className="fcs-hero-section">
        <div className="cms-content-wrapper">
          <div className="fcs-hero">
            <div className="fcs-hero-media">
              <img src={images.paypal} alt="PayPal App image" />
            </div>
            <div className="fcs-hero-content">
              <h3>
                <FlowEm /> case studies, Cash management
              </h3>
              <h2>
                <a href="#">Inside PayPal&apos;s treasury transformation</a>
              </h2>
              <p>
                Moving money is in PayPal&apos;s DNA – which presents specific challenges for the
                treasury department. PayPal&apos;s Group Treasurer Can Balcioglu tells{' '}
                <FlowEm />
                &apos;s Desirée Buchholz how his team modernised treasury infrastructure, applied AI
                and explored stablecoins
              </p>
              <a href="#" className="fcs-btn fcs-btn-primary">
                Read the case study
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper fcs-row-with-sidebar">
          <div className="fcs-cards-stack">
            <CaseStudyCard
              image={images.guinea}
              category="flow case studies, Trade finance and lending"
              title="Guinea's wealth creation manifesto"
              text="flow's Clarissa Dann reports on how The Republic of Guinea's government chose the UK Export Finance and Deutsche Bank partnership to develop the Koloma Administrative City to house multiple ministries under one roof, improving efficiency and transparency and delivering long-term cost savings to the treasury"
              href="#"
            />
            <CaseStudyCard
              image={images.darEsSalaam}
              category="flow case studies, Trade finance and lending"
              title="Financing Dar es Salaam's new bus network"
              text="As bus rapid transit (BRT) systems in Africa continue to expand in response to increased urbanisation, flow's Clarissa Dann profiles the roll-out in Tanzania's Dar es Salaam and spotlights how a trade finance partnership with a local bank using a letter of credit got the wheels turning"
              href="#"
            />
          </div>

          <aside className="fcs-sidebar">
            <div className="fcs-most-read">
              <h2>Most read</h2>
              {mostRead.map((item) => (
                <div key={item.title} className="fcs-most-read-item">
                  <FlowEm /> {item.tags.replace(/^flow\s*/i, '')}
                  <a href={item.href}>{item.title}</a>
                </div>
              ))}
            </div>

            <div className="fcs-digest-card">
              <img src={images.digest} alt="" />
              <div className="fcs-digest-card-content">
                <h3>Stay up-to-date with</h3>
                <h2>
                  <a href="#">
                    <FlowEm /> digest
                  </a>
                </h2>
                <p>Choose your preferred banking topics and we will send you updated emails based on your selection</p>
                <a href="#" className="fcs-btn fcs-btn-primary">
                  Sign-up
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper fcs-grid-3">
          {row3Cards.map((card) => (
            <CaseStudyCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper">
          <div className="fcs-cta-banner">
            <img className="fcs-cta-banner-bg" src={images.ctaBg} alt="" />
            <div className="fcs-cta-banner-overlay" />
            <div className="fcs-cta-banner-content">
              <h3>
                <FlowEm /> digest
              </h3>
              <h2>
                <a href="#">Go beyond the headlines</a>
              </h2>
              <p>
                <FlowEm /> digest delivers actionable insights to help you stay ahead of emerging
                trends and drive business success
              </p>
              <a href="#" className="fcs-btn fcs-btn-white">
                Sign up for insights
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cms-content-wrapper fcs-grid-3">
          {gridCards.map((card) => (
            <CaseStudyCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="fcs-more-articles">
        <div className="cms-content-wrapper">
          <h1>More articles</h1>
          <div className="fcs-articles-grid">
            {moreArticles.map((article) => (
              <article key={article.title} className="fcs-article-entry">
                <p className="fcs-article-meta">{article.meta}</p>
                <h3>
                  <a href="#">{article.title}</a>
                </h3>
                <p>{article.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="fcs-load-more">
            <button type="button" className="fcs-btn fcs-btn-primary">
              Load More
            </button>
          </div>
        </div>
      </section>
    </FlowLayout>
  )
}
