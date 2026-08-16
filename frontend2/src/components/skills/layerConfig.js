// Data only — no rendering logic here. Add/remove/reorder skills freely.
// Order matters: this is the visual stacking order, top to bottom — the hierarchy of
// how things actually get built, from applied AI work down to CS fundamentals.
//
// `color` is this layer's single accent — used for its skill pills' glow/border and for
// the upward gradient under each section. Every layer uses the site's own theme cyan
// (#0ef) directly, so the Skills section always matches the rest of the site exactly.

const THEME = '#0ef';

export const layers = [
    {
        id: 'observability',
        title: 'OBSERVABILITY & DEVOPS',
        skills: [
            'Docker',
            'Kubernetes',
            'Grafana',
            'Prometheus',
            'Loki',
            'Langfuse',
        ],
        color: THEME,
    },
    {
        id: 'intelligence',
        title: 'INTELLIGENCE',
        skills: [
            'LLMs',
            'RAG',
            'Agentic AI',
            'Multi-Agents',
            'LangGraph',
            'LangChain',
            'Fine-tuning',
            'Context Engineering',
            'Generative AI',
        ],
        color: THEME,
    },
    {
        id: 'scalability',
        title: 'SCALABILITY',
        skills: [
            'Node.js',
            'Express.js',
            'FastAPI',
            'REST APIs',
            'Nginx',
            'Redis',
            'Microservices',
            'Distributed Systems',
            'System Design',
        ],
        color: THEME,
    },
    {
        id: 'data',
        title: 'DATA',
        // Redis intentionally omitted here — it already lives under Scalability.
        skills: [
            'MongoDB',
            'SQL',
            'MySQL',
            'PostgreSQL',
            'Vector Databases',
            'Chroma',
            'Qdrant',
            'Database Design',
            'Data Pipelines',
        ],
        color: THEME,
    },
    {
        id: 'interfaces',
        title: 'INTERFACES',
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'ShadCN UI',
            'Redux',
            'Zustand',
            'React Query',
            'Responsive Design',
        ],
        color: THEME,
    },
    {
        id: 'foundation',
        title: 'FOUNDATION',
        skills: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Operating Systems',
            'Computer Networks',
            'DBMS',
            'Software Architecture',
            'Neural Networks',
            'CNNs',
            'RNNs',
            'Attention Mechanism',
            'Transformers',
            'LSTM / GRU',
            'PyTorch',
        ],
        color: THEME,
    },
]
