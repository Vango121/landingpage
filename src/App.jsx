import { motion } from 'framer-motion'

const brandNames = ['RentFlow', 'LeaseHub', 'Tenanto', 'Propello', 'HomeFlow', 'Rentlane', 'Keynest', 'Properly', 'Nestflow', 'Tenantly']

const valueCards = [
  {
    title: 'Nie kończ relacji na przekazaniu kluczy',
    text: 'Po wynajęciu mieszkania właściciel dostaje od agencji portal z umową, protokołem, terminami i miejscem na sprawy lokatora.',
    tone: 'from-accent/14 to-white',
  },
  {
    title: 'Daj właścicielowi powód, żeby wrócił',
    text: 'Agencja zostaje w pamięci klienta jako firma, która pomogła nie tylko wynająć mieszkanie, ale też dobrze poukładać kolejne kroki.',
    tone: 'from-ocean/14 to-white',
  },
  {
    title: 'Ułatw właścicielowi ogarnianie najmu',
    text: 'Dokumenty, terminy płatności i zgłoszenia są pod ręką, nawet jeśli agencja nie prowadzi mieszkania na co dzień.',
    tone: 'from-blush/14 to-white',
  },
  {
    title: 'Wyróżnij swoją usługę',
    text: 'Zamiast kończyć współpracę na plikach wysłanych mailem, agencja przekazuje właścicielowi proste narzędzie do dalszej obsługi najmu.',
    tone: 'from-ink/8 to-white',
  },
]

const steps = [
  ['01', 'Agent dodaje mieszkanie po wynajęciu', 'Agencja zapisuje lokal, właściciela, lokatora, umowę i protokół przekazania.'],
  ['02', 'Właściciel dostaje dostęp od agencji', 'Klient odbiera mieszkanie razem z narzędziem do trzymania dokumentów, płatności i zgłoszeń w jednym miejscu.'],
  ['03', 'Właściciel prowadzi najem samodzielnie', 'Lokator może zgłaszać sprawy, a właściciel ma całą historię bez szukania plików i wiadomości.'],
]

const featureCards = [
  ['Dokumenty najmu', 'Umowa, aneksy, załączniki i pliki przekazane właścicielowi po wynajęciu mieszkania.', 'D'],
  ['Protokoły zdawczo-odbiorcze', 'Zdjęcia, checklisty, podpisy i PDF z przekazania albo odbioru lokalu.', 'P'],
  ['Historia płatności', 'Właściciel może śledzić czynsz, kaucję i terminy płatności bez arkuszy i notatek.', 'H'],
  ['Zgłoszenia usterek', 'Lokator zgłasza problem z opisem i zdjęciem, a właściciel od razu widzi, co trzeba załatwić.', 'U'],
  ['Kontakt właściciel-lokator', 'Jedno miejsce na podstawową komunikację po zakończeniu pracy agencji.', 'K'],
  ['Powiadomienia', 'Przypomnienia o płatnościach, dokumentach, protokołach i nowych zgłoszeniach.', 'N'],
]

const audienceCards = [
  ['Agencje pośredniczące w wynajmie', 'Dla zespołów, które znajdują lokatora, robią przekazanie mieszkania i chcą zostawić właścicielowi coś więcej niż komplet PDF-ów.'],
  ['Agencje bez działu zarządzania najmem', 'Dla firm, które nie prowadzą mieszkania po transakcji, ale chcą dać klientowi praktyczne narzędzie na później.'],
  ['Właściciele mieszkań', 'Dla klientów agencji, którzy później sami pilnują dokumentów, płatności, kontaktu z lokatorem i usterek.'],
]

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-ink">
      <Header />
      <main>
        <Hero />
        <WhyAgencies />
        <HowItWorks />
        <Features />
        <TodayVsRentFlow />
        <Audience />
        <SocialProof />
        <Waitlist />
        <FAQ />
        <BrandNames />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 px-4 py-3 shadow-soft">
        <a href="#" className="flex items-center gap-2" aria-label="RentFlow home">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-bold text-white">R</span>
          <span className="font-semibold tracking-tight">RentFlow</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-ink/70 md:flex">
          <a href="#why" className="hover:text-ink">Dlaczego</a>
          <a href="#how" className="hover:text-ink">Jak to działa</a>
          <a href="#features" className="hover:text-ink">Funkcje</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </div>
        <a href="#waitlist" className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition hover:bg-accent">
          Zostaw kontakt
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="noise relative px-4 pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
            Zwiększ jakość obsługi właścicieli nieruchomości
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68 md:text-xl">
            RentFlow zamiast chaosu maili, PDF-ów i WhatsAppa — dla każdego klienta Twojej agencji.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#waitlist" className="rounded-full bg-accent px-6 py-3 text-center font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink">
              Jestem zainteresowany
            </a>
            <a href="#how" className="rounded-full border border-line bg-white px-6 py-3 text-center font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink">
              Zobacz, jak to działa
            </a>
          </div>
        </motion.div>
        <PhoneShowcase />
      </div>
    </section>
  )
}

function PhoneShowcase() {
  const cards = [
    ['Umowa najmu.pdf', 'Przekazana przez agencję', 'PDF', 'bg-accent/10 text-accent'],
    ['Protokół przekazania', 'Zdjęcia i podpisy gotowe', 'PDF', 'bg-ocean/10 text-ocean'],
    ['Czynsz za maj', 'Do oznaczenia przez właściciela', 'Termin', 'bg-accent/10 text-accent'],
    ['Usterka: zlew w kuchni', 'Zgłoszona przez lokatora', 'Nowe', 'bg-blush/10 text-blush'],
    ['Kontakt do lokatora', 'Jan Nowak', 'Lokator', 'bg-ink/8 text-ink'],
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative mx-auto w-full max-w-[25rem]"
    >
      <div className="absolute -left-8 top-16 h-24 w-24 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute -right-8 bottom-12 h-32 w-32 rounded-full bg-ocean/20 blur-3xl" />
      <div className="phone-frame relative min-h-[37rem] overflow-hidden shadow-phone">
        <div className="mx-auto mt-3 h-6 w-24 rounded-full bg-ink" />
        <div className="p-5">
          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-xs text-ink/45">Panel właściciela</p>
              <h3 className="text-2xl font-semibold">Wilcza 42, Warszawa</h3>
            </div>
            <div className="grid h-11 w-11 place-items-center rounded-full bg-accent/12 text-sm font-bold text-accent">WN</div>
          </div>
          <div className="mt-6 rounded-[1.5rem] bg-ink p-5 text-white">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/60">Portal od agencji</p>
              <span className="rounded-full bg-white/12 px-3 py-1 text-xs">po przekazaniu</span>
            </div>
            <p className="mt-5 text-3xl font-semibold leading-tight">Najem pod kontrolą</p>
            <p className="mt-2 text-sm leading-6 text-white/58">Właściciel ma dokumenty, terminy i zgłoszenia lokatora w jednym miejscu.</p>
          </div>
          <div className="mt-5 space-y-3">
            {cards.map((card, index) => (
              <motion.div
                key={card[0]}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3.2, delay: index * 0.18, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-2xl border border-line bg-white p-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mist text-sm font-semibold text-accent">{card[0][0]}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{card[0]}</p>
                    <p className="truncate text-sm text-ink/50">{card[1]}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${card[3]}`}>{card[2]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function WhyAgencies() {
  return (
    <section id="why" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Dlaczego agencje tego potrzebują?" title="Bo pośrednictwo zwykle kończy się na umowie, a dobra relacja z właścicielem może trwać dużo dłużej." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {valueCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-[2rem] border border-line bg-gradient-to-br ${card.tone} p-7 shadow-soft md:p-8`}
            >
              <span className="mb-10 grid h-11 w-11 place-items-center rounded-2xl bg-white text-sm font-semibold text-accent shadow-sm">0{index + 1}</span>
              <h3 className="text-2xl font-semibold tracking-tight">{card.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-ink/64">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="px-4 py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-soft md:p-10">
        <SectionIntro eyebrow="Jak to działa" title="Agencja przygotowuje portal przy przekazaniu mieszkania. Właściciel korzysta z niego później samodzielnie." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map(([number, title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-3xl border border-line bg-mist p-5"
            >
              <div className="mb-8 flex h-16 items-center rounded-2xl bg-white px-4 shadow-sm">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-semibold text-white">{number}</span>
                <div className="ml-3 h-2 flex-1 rounded-full bg-line">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${42 + index * 24}%` }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-ink/62">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section id="features" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Co znajdziesz w aplikacji" title="To nie jest CRM dla agentów. To portal, który właściciel dostaje po wynajęciu mieszkania." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map(([title, text, icon], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04 }}
              className="rounded-3xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="mb-8 grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-sm font-semibold text-accent">{icon}</span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-ink/62">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TodayVsRentFlow() {
  const today = ['agencja wysyła właścicielowi umowę i protokół mailem', 'po przekazaniu mieszkania kontakt zwykle się urywa', 'właściciel sam pilnuje czynszu w arkuszu albo notatkach', 'lokator pisze o usterkach na WhatsAppie', 'przy kolejnym wynajmie dokumenty trzeba zbierać od nowa']
  const rentflow = ['właściciel dostaje od agencji gotowy portal', 'agencja zostawia po sobie praktyczne narzędzie', 'czynsz, kaucja i terminy mają jasny status', 'zgłoszenie lokatora ma opis, zdjęcia i historię', 'przy kolejnym wynajmie wszystko startuje z gotowych danych']

  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        <ComparisonCard title="Dzisiaj" items={today} mark="x" muted />
        <ComparisonCard title="Z RentFlow" items={rentflow} mark="+" />
      </div>
    </section>
  )
}

function ComparisonCard({ title, items, mark, muted = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-[2rem] border p-7 shadow-soft md:p-8 ${muted ? 'border-line bg-white' : 'border-accent/20 bg-ink text-white'}`}
    >
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-7 space-y-3">
        {items.map((item) => (
          <div key={item} className={`flex items-center gap-3 rounded-2xl p-4 ${muted ? 'bg-mist text-ink/68' : 'bg-white/8 text-white/86'}`}>
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-semibold ${muted ? 'bg-blush/12 text-blush' : 'bg-accent text-white'}`}>{mark}</span>
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

function Audience() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow="Dla kogo" title="Dla agencji, które chcą podnieść standard usługi bez wchodzenia w zarządzanie najmem." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {audienceCards.map(([title, text], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-line bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold text-accent">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-ink/62">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['24+', 'agencje zainteresowane narzędziem po wynajęciu mieszkania'],
            ['180+', 'mieszkań omawianych w rozmowach pilotażowych'],
            ['Lead', 'rozmawiamy z agencjami o potrzebach właścicieli po wynajęciu'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <p className="text-4xl font-semibold tracking-tight">{value}</p>
              <p className="mt-2 text-ink/58">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-3xl border border-line bg-white p-6 shadow-sm">
          <p className="text-lg leading-8 text-ink/72">
            "Po wynajęciu mieszkania zwykle oddajemy właścicielowi pliki i na tym kończy się nasza rola. Gdyby klient dostał od nas jeszcze proste narzędzie do dalszej obsługi, łatwiej byłoby wrócić przy kolejnym najmie."
          </p>
          <p className="mt-4 text-sm font-semibold text-ink/55">Placeholder opinii agencji testującej</p>
        </div>
      </div>
    </section>
  )
}

function Waitlist() {
  return (
    <section id="waitlist" className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-white p-6 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Kontakt</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Sprawdź, czy RentFlow ma sens dla Twojej agencji.</h2>
          <p className="mt-4 leading-7 text-ink/62">
            Zostaw kontakt, jeśli chcesz zobaczyć kierunek produktu i porozmawiać o tym, jak takie narzędzie mogłoby działać u Ciebie po wynajęciu mieszkania.
          </p>
        </div>
        <form className="grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <Input label="Email" type="email" />
          <Input label="Nazwa agencji" />
          <Input label="Liczba mieszkań wynajmowanych miesięcznie" type="number" />
          <Input label="Telefon lub LinkedIn" />
          <button className="mt-2 rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-accent">
            Jestem zainteresowany
          </button>
        </form>
      </div>
    </section>
  )
}

function Input({ label, type = 'text' }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink/64">
      {label}
      <input
        type={type}
        className="h-12 rounded-2xl border border-line bg-white px-4 text-base text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10"
        required
      />
    </label>
  )
}

function FAQ() {
  const items = [
    ['Czy to jest system do zarządzania najmem?', 'Nie. RentFlow ma pomóc agencji przekazać właścicielowi narzędzie do dalszej, samodzielnej obsługi najmu po znalezieniu lokatora i przekazaniu mieszkania.'],
    ['Czy aplikacja będzie działać na Androidzie i iOS?', 'Tak. Projektujemy ją jako prosty widok mobilny dla właściciela i opcjonalnie dla lokatora.'],
    ['Czy właściciel musi coś instalować?', 'Chcemy sprawdzić dwa warianty: aplikację mobilną i lekki dostęp przez link. Ważne, żeby właściciel szybko zobaczył swoje mieszkanie i dokumenty.'],
    ['Czy będzie white-label?', 'Rozważamy branding agencji, bo właściciel ma dostać narzędzie od agencji, a nie anonimowy system.'],
    ['Ile to będzie kosztować?', 'Cena będzie zależeć od liczby przekazywanych mieszkań i zakresu funkcji. Sprawdzamy też, czy agencje wolą doliczać portal do usługi wynajmu, czy oferować go jako dodatek.'],
  ]

  return (
    <section id="faq" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionIntro eyebrow="FAQ" title="Najczęstsze pytania od agencji zainteresowanych RentFlow." center />
        <div className="mt-8 divide-y divide-line rounded-3xl border border-line bg-white px-5 shadow-sm">
          {items.map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">
                {question}
                <span className="text-2xl font-light text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-7 text-ink/62">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandNames() {
  return (
    <section className="px-4 pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/45">Sugestie nazw produktu</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {brandNames.map((name) => (
            <span key={name} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink/70">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-white px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">RentFlow</p>
          <p className="mt-1 text-sm text-ink/55">kontakt@rentflow.pl</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-ink/60">
          <a href="mailto:kontakt@rentflow.pl" className="hover:text-ink">Kontakt</a>
          <a href="https://www.linkedin.com" className="hover:text-ink">LinkedIn</a>
          <a href="#privacy" className="hover:text-ink">Polityka prywatności</a>
          <a href="#waitlist" className="hover:text-ink">Formularz kontaktowy</a>
        </div>
      </div>
    </footer>
  )
}

function SectionIntro({ eyebrow, title, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
    </div>
  )
}

export default App
