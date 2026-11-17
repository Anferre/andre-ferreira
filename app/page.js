import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";

const focos = [
  {
    titulo: "Inteligência Artificial",
    texto:
      "IA como copiloto sênior de engenharia: prever falhas, auditar acessos e apoiar decisões de arquitetura.",
  },
  {
    titulo: "Cibersegurança",
    texto:
      "Segurança desde o desenho da infraestrutura, para que a escala da IA não se torne uma vulnerabilidade.",
  },
  {
    titulo: "Governança & FinOps",
    texto:
      "Custos, acessos e riscos sob controle, com ambientes financeiramente sustentáveis e auditáveis.",
  },
];

const experiencias = [
  {
    cargo: "Cloud / DevOps Engineer",
    tag: "Atual",
    texto:
      "Unir a solidez da infraestrutura tradicional à agilidade das arquiteturas nativas de nuvem, com foco em automação e confiabilidade.",
  },
  {
    cargo: "Operações de NOC",
    tag: "Mais de uma década",
    texto:
      "Atuação em centros de operações de rede e infraestrutura crítica nas Forças Armadas e no setor de Telecom. Aprendizado prático sobre resiliência e resposta a incidentes.",
  },
];

const formacao = [
  {
    curso: "Ciência da Computação",
    instituicao: "Universidade Federal Fluminense (UFF)",
    status: "Cursando",
  },
  {
    curso: "MBA",
    instituicao: "London School of Economics (LSE)",
    status: "Cursando",
  },
];

const projetos = [
  {
    nome: "Sentinela FinOps",
    categoria: "IA & Segurança",
    texto:
      "Auditor inteligente integrado à API do Gemini. Avalia a arquitetura do usuário, alerta sobre riscos financeiros (como armadilhas de NAT Gateways) e gera scripts de teardown para blindar o ambiente. Com fallback local para garantir resiliência.",
  },
  {
    nome: "Calculadora de Sobrevivência na Nuvem",
    categoria: "FinOps",
    texto:
      "Ferramenta criada como Embaixador Estudantil do Google para combater o bill shock, o susto com faturas inesperadas, de estudantes que estão começando na nuvem.",
  },
  {
    nome: "Infraestrutura para IA Generativa",
    categoria: "Cloud & MLOps",
    texto:
      "Laboratórios práticos no Google Cloud com GKE e GPUs, com deploys automatizados de LLMs via NVIDIA NIM e Helm.",
  },
  {
    nome: "Jenkinsbot",
    categoria: "DevOps & IA",
    texto:
      "Agente conversacional corporativo integrando DevOps e IA, desenvolvido com Amazon Q Developer.",
  },
  {
    nome: "Segurança e Escalabilidade em Sharding Blockchain",
    categoria: "Pesquisa científica",
    texto:
      "Artigo em coautoria, publicado e apresentado no SBSeg 2021 (Simpósio Brasileiro de Segurança da Informação e de Sistemas Computacionais), sobre consenso distribuído e criptografia.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-drift absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-moss/20 blur-3xl" />
          <div className="animate-drift absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-moss-dark/20 blur-3xl [animation-delay:-7s]" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-moss-light">
              Cloud & DevOps Engineer
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
              André de Oliveira <span className="text-moss">Ferreira</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">
              Resiliência de quem opera infraestrutura crítica. Visão de quem constrói na nuvem.
              Foco na intersecção entre IA, cibersegurança e governança.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-full bg-moss px-7 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-moss-light"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-moss hover:text-moss-light"
              >
                Entrar em contato
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Sobre mim</h2>
            <div className="mt-2 h-1 w-16 bg-moss" />
          </Reveal>
          <Reveal delay={150} className="space-y-5 text-neutral-400 leading-relaxed">
            <p>
              Sou um engenheiro forjado na linha de frente das operações críticas. Com mais de uma
              década de atuação em NOC, nas Forças Armadas e em Telecom, aprendi na prática o peso
              real da palavra resiliência.
            </p>
            <p>
              Hoje atuo como Cloud/DevOps Engineer e curso Ciência da Computação na UFF e um MBA na
              LSE. Minha missão é unir a solidez da infraestrutura tradicional à agilidade das
              arquiteturas nativas de nuvem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Foco */}
      <section id="foco" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Na fronteira entre <span className="text-moss-light">IA</span> e{" "}
              <span className="text-moss-light">Cibersegurança</span>
            </h2>
            <p className="mt-4 max-w-3xl text-neutral-400 leading-relaxed">
              A capacidade da IA de escalar e automatizar a níveis sem precedentes exige a mesma
              urgência em segurança e governança para que essa escala não se torne uma vulnerabilidade.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focos.map((foco, i) => (
              <Reveal key={foco.titulo} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-moss/50">
                  <div className="mb-6 h-10 w-10 rounded-lg bg-moss/15 transition-colors group-hover:bg-moss/30" />
                  <h3 className="text-xl font-semibold text-white">{foco.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{foco.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência e formação */}
      <section id="experiencia" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Experiência</h2>
              <div className="mt-2 h-1 w-16 bg-moss" />
            </Reveal>
            <div className="mt-12 space-y-10 border-l border-white/10 pl-8">
              {experiencias.map((exp, i) => (
                <Reveal key={exp.cargo} delay={i * 120}>
                  <div className="relative">
                    <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-moss" />
                    <span className="text-xs font-medium uppercase tracking-widest text-moss-light">
                      {exp.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-white">{exp.cargo}</h3>
                    <p className="mt-3 text-neutral-400 leading-relaxed">{exp.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Formação</h2>
              <div className="mt-2 h-1 w-16 bg-moss" />
            </Reveal>
            <div className="mt-12 space-y-6">
              {formacao.map((f, i) => (
                <Reveal key={f.curso} delay={i * 120}>
                  <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-white">{f.curso}</h3>
                      <span className="rounded-full bg-moss/15 px-3 py-1 text-xs text-moss-light">
                        {f.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">{f.instituicao}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Projetos e pesquisa</h2>
            <div className="mt-2 h-1 w-16 bg-moss" />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projetos.map((p, i) => (
              <Reveal key={p.nome} delay={(i % 2) * 120}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-moss/50 hover:shadow-[0_0_40px_-12px_rgba(138,154,91,0.35)]">
                  <span className="text-xs font-medium uppercase tracking-widest text-moss-light">
                    {p.categoria}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{p.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{p.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Além do código */}
      <section id="alem" className="scroll-mt-20 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Além do código</h2>
            <div className="mt-2 h-1 w-16 bg-moss" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-8">
                <h3 className="text-xl font-semibold text-white">Corrida</h3>
                <p className="mt-3 text-neutral-400 leading-relaxed">
                  Pratico corridas, incluindo meia maratona. A disciplina de treino é a mesma que levo
                  para a engenharia: constância, métricas e resistência.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-8">
                <h3 className="text-xl font-semibold text-white">Música clássica</h3>
                <p className="mt-3 text-neutral-400 leading-relaxed">
                  Um hábito que me ajuda a desacelerar e a encontrar foco, longe das telas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="scroll-mt-20 px-6 py-28">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-moss/30 bg-gradient-to-b from-moss/10 to-transparent p-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Vamos conversar?</h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Aberto a conversas sobre DevOps, cloud, IA aplicada à infraestrutura e segurança.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:anferreira@id.uff.br"
              className="rounded-full bg-moss px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-moss-light"
            >
              anferreira@id.uff.br
            </a>
            <a
              href="https://github.com/Anferre"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-moss hover:text-moss-light"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} André de Oliveira Ferreira
      </footer>
    </>
  );
}
