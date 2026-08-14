export type NavItem = { label: string; to: string };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How We Work", to: "/how-we-work" },
  { label: "Capabilities", to: "/technology" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export type ServiceSlug = "loan-origination" | "collections" | "data-infrastructure";

export type Service = {
  slug: ServiceSlug;
  index: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  outcome: string;
  ctaLabel: string;
  capabilities: { title: string; body: string }[];
  problem: { heading: string; body: string; points: string[] };
  approach: { title: string; body: string }[];
  flow: { label: string; note: string }[];
  outcomes: { title: string; body: string }[];
  delivery: string;
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "loan-origination",
    index: "01",
    name: "Loan Origination System Services",
    shortName: "LOS Services",
    tagline: "Lending workflows, designed and digitised end to end.",
    summary:
      "Technology services that help lending organisations design, digitise, integrate, and improve loan-origination workflows.",
    outcome: "Move an application from intake to decision on one dependable, visible workflow.",
    ctaLabel: "Discuss your LOS requirement",
    capabilities: [
      {
        title: "Workflow design",
        body: "Map existing lending stages, approval paths, and exceptions, then translate them into a configurable digital process.",
      },
      {
        title: "Application processing",
        body: "Structured intake, stage progression, queue handling, and clear ownership at every step of the file.",
      },
      {
        title: "Verification & KYC flows",
        body: "Checklist-driven verification steps with recorded status, so nothing advances on an incomplete file.",
      },
      {
        title: "Document handling",
        body: "Collection, categorisation, versioning, and retrieval of the documents a lending file depends on.",
      },
      {
        title: "Integrations",
        body: "Connect the origination flow to the internal and external systems it needs to complete a decision.",
      },
      {
        title: "Dashboards & visibility",
        body: "Operational views for pipeline, ageing, bottlenecks, and stage-level throughput.",
      },
      {
        title: "Configurable processes",
        body: "Rules, stages, and fields that can be adjusted as lending policy and products change.",
      },
    ],
    problem: {
      heading: "Origination breaks where systems don't meet.",
      body: "Most lending teams do not have a technology problem in one place — they have handoffs that lose context. Applications arrive through several channels, verification lives in spreadsheets, documents sit in email, and status is reconstructed by asking people.",
      points: [
        "Application status is unclear until someone chases it",
        "Verification and document steps run outside the system of record",
        "Policy changes require rework instead of configuration",
        "Reporting is assembled manually, after the fact",
      ],
    },
    approach: [
      {
        title: "Start from the operating reality",
        body: "We document how origination actually runs today — including the workarounds — before proposing a target workflow.",
      },
      {
        title: "Design the process, then the screens",
        body: "Stages, ownership, states, and exceptions are defined first. Interfaces follow the process rather than dictating it.",
      },
      {
        title: "Build for change",
        body: "Lending policy moves. We implement stages, checklists, and rules as configuration so teams are not blocked on a release.",
      },
      {
        title: "Integrate deliberately",
        body: "Each connection is scoped with its failure behaviour, retry expectation, and audit trail defined up front.",
      },
    ],
    flow: [
      { label: "Application", note: "Structured intake" },
      { label: "Verification", note: "Checks & KYC steps" },
      { label: "Documents", note: "Collected & versioned" },
      { label: "Processing", note: "Stages & decisioning support" },
      { label: "Integration", note: "Connected systems" },
      { label: "Visibility", note: "Pipeline dashboards" },
    ],
    outcomes: [
      {
        title: "One place to see the file",
        body: "Stage, owner, pending items, and history in a single view instead of four systems.",
      },
      {
        title: "Fewer manual handoffs",
        body: "Steps advance through the workflow rather than through follow-up messages.",
      },
      {
        title: "Policy changes without rebuilds",
        body: "Configurable stages and checklists absorb product and policy adjustments.",
      },
      {
        title: "Reporting as a by-product",
        body: "Because the process runs in the system, operational reporting comes from real activity.",
      },
    ],
    delivery:
      "LOS engagements follow the standard Evnorix delivery process — discovery, design, build, integration, testing, and support — sequenced so that a working origination slice is reviewable early rather than at the end.",
    faqs: [
      {
        q: "Do you replace our existing lending system?",
        a: "Not by default. We work with what exists. Depending on the requirement we digitise specific stages, build workflow around a current system, or deliver a full origination workflow — the scope is decided in discovery.",
      },
      {
        q: "Can the workflow match our credit policy?",
        a: "Yes. Stages, checklists, mandatory fields, and approval paths are implemented as configuration so they can reflect your policy and be adjusted as it evolves.",
      },
      {
        q: "How are integrations handled?",
        a: "Each integration is scoped individually: what data moves, in which direction, how failures behave, and what gets recorded for audit. We do not assume a connection is available until it is confirmed.",
      },
      {
        q: "What do you need from our team?",
        a: "Access to the people who run origination day to day, the current process documentation, and a decision-maker for scope. Discovery is collaborative rather than a hand-off.",
      },
    ],
  },
  {
    slug: "collections",
    index: "02",
    name: "Collections Services",
    shortName: "Collections",
    tagline: "Collections operations with visibility from allocation to payment.",
    summary:
      "Technology and workflow services that help teams manage collections operations, follow-ups, field activity, and collection visibility.",
    outcome: "Know what was assigned, what was attempted, and what actually changed.",
    ctaLabel: "Improve collection operations",
    capabilities: [
      {
        title: "Collection workflows",
        body: "Define allocation rules, follow-up cycles, escalation paths, and closure conditions as an operating workflow.",
      },
      {
        title: "Task management",
        body: "Assignment, prioritisation, due handling, and reassignment with a clear record of ownership.",
      },
      {
        title: "Field operations",
        body: "Support for on-ground activity — visit capture, outcome recording, and structured feedback from the field.",
      },
      {
        title: "Payment follow-up",
        body: "Promise-to-pay tracking, follow-up scheduling, and status progression tied to the account.",
      },
      {
        title: "Status visibility",
        body: "Account-level and portfolio-level views of where each case stands and what happens next.",
      },
      {
        title: "Analytics & reporting",
        body: "Activity, coverage, and outcome reporting drawn from the operational record rather than manual returns.",
      },
    ],
    problem: {
      heading: "Effort is spent; evidence of it isn't captured.",
      body: "Collections teams rarely lack activity. What is missing is a reliable operational record — allocations tracked in spreadsheets, follow-ups logged inconsistently, field outcomes reported verbally, and portfolio status that is always a day behind.",
      points: [
        "Allocation and re-allocation happen outside the system",
        "Follow-up history is incomplete or duplicated",
        "Field activity is difficult to verify or measure",
        "Management reporting is compiled manually each cycle",
      ],
    },
    approach: [
      {
        title: "Model the operating cycle",
        body: "We define the real collections cycle — allocation, contact, promise, field, payment, closure — and where accountability sits at each point.",
      },
      {
        title: "Capture at the point of work",
        body: "Outcomes are recorded where the work happens, including in the field, so reporting reflects activity instead of recollection.",
      },
      {
        title: "Make status the source of truth",
        body: "Every account carries a current state with history, so escalation and review are based on the record.",
      },
      {
        title: "Report from operations",
        body: "Coverage, attempt, and outcome views are generated from the same data operations teams work in.",
      },
    ],
    flow: [
      { label: "Accounts", note: "Portfolio intake" },
      { label: "Allocation", note: "Rules & ownership" },
      { label: "Follow-up", note: "Contact cycles" },
      { label: "Field activity", note: "Visit outcomes" },
      { label: "Payment status", note: "Promise to settlement" },
      { label: "Reporting", note: "Coverage & outcomes" },
    ],
    outcomes: [
      {
        title: "Traceable activity",
        body: "Every allocation, attempt, and outcome is recorded against the account.",
      },
      {
        title: "Fewer blind spots in the field",
        body: "On-ground activity becomes part of the operational record, not a separate report.",
      },
      {
        title: "Faster escalation decisions",
        body: "Cases that need attention surface from status rather than from review meetings.",
      },
      {
        title: "Reporting without a reporting cycle",
        body: "Portfolio views reflect the current state of work as it happens.",
      },
    ],
    delivery:
      "Collections engagements typically begin with one portfolio segment or one team, prove the operating workflow in real use, and expand once the process and reporting are validated.",
    faqs: [
      {
        q: "Can this work alongside our existing loan management system?",
        a: "Yes. Collections workflow is frequently delivered as an operational layer that reads from and writes back to the systems already holding account data. The integration boundary is defined in discovery.",
      },
      {
        q: "Do field teams need constant connectivity?",
        a: "Field capture requirements — including intermittent connectivity handling — are scoped as part of the engagement. We define the expected behaviour explicitly rather than assuming ideal conditions.",
      },
      {
        q: "How are allocation rules defined?",
        a: "Allocation logic is implemented as configurable rules based on your segmentation, so cycles can change without redevelopment.",
      },
      {
        q: "Can we start with a single team?",
        a: "That is the usual approach. A contained pilot validates the workflow, the data quality, and the reporting before wider rollout.",
      },
    ],
  },
  {
    slug: "data-infrastructure",
    index: "03",
    name: "Database Repositories & Data Mirroring",
    shortName: "Data Infrastructure",
    tagline: "Repositories, synchronisation, and mirroring built for continuity.",
    summary:
      "Reliable data infrastructure services for repository management, synchronisation, replication and mirroring, and operational continuity.",
    outcome: "Data that is where it should be, in a known state, with a record of how it got there.",
    ctaLabel: "Discuss your data infrastructure",
    capabilities: [
      {
        title: "Data replication",
        body: "Structured replication between source and target repositories with defined scope and direction.",
      },
      {
        title: "Controlled synchronisation",
        body: "Scheduled or event-driven synchronisation with explicit conflict and ordering behaviour.",
      },
      {
        title: "Backup & continuity thinking",
        body: "Continuity treated as a design input — what must survive, how quickly it must return, and who verifies it.",
      },
      {
        title: "Monitoring",
        body: "Visibility into synchronisation state, lag, and failure conditions rather than silent pipelines.",
      },
      {
        title: "Auditability",
        body: "A traceable record of what moved, when, and under which process.",
      },
      {
        title: "Secure data handling",
        body: "Access boundaries, least-privilege movement paths, and responsible handling of sensitive records.",
      },
    ],
    problem: {
      heading: "Copies of data are easy. Trustworthy copies are not.",
      body: "Reporting databases drift from production. A nightly job fails quietly and nobody notices until a number looks wrong. Recovery expectations exist as an assumption rather than a tested procedure. The problem is rarely storage — it is knowing the state of the data.",
      points: [
        "Synchronisation failures are discovered downstream",
        "No clear record of what moved and when",
        "Reporting loads compete with operational systems",
        "Continuity assumptions have never been exercised",
      ],
    },
    approach: [
      {
        title: "Define the data contract",
        body: "Scope, direction, freshness expectation, and ownership are agreed before anything is built.",
      },
      {
        title: "Separate operational and analytical load",
        body: "Mirrored repositories let reporting and downstream consumers work without pressuring production systems.",
      },
      {
        title: "Instrument before scaling",
        body: "Monitoring and alerting on lag and failure are part of the first delivery, not a later phase.",
      },
      {
        title: "Make continuity a procedure",
        body: "Recovery steps are documented and rehearsed so continuity is an operational capability, not a hope.",
      },
    ],
    flow: [
      { label: "Source", note: "Systems of record" },
      { label: "Repository", note: "Structured storage" },
      { label: "Synchronisation", note: "Controlled movement" },
      { label: "Mirroring", note: "Replicated targets" },
      { label: "Monitoring", note: "Lag & failure signals" },
      { label: "Continuity", note: "Recoverable operations" },
    ],
    outcomes: [
      {
        title: "Known data state",
        body: "Teams can answer what is current, what is lagging, and what failed.",
      },
      {
        title: "Protected production systems",
        body: "Downstream reporting runs against mirrors instead of operational databases.",
      },
      {
        title: "Traceable movement",
        body: "Synchronisation activity is recorded and reviewable.",
      },
      {
        title: "Practised continuity",
        body: "Recovery is a defined procedure with named owners and verified steps.",
      },
    ],
    delivery:
      "Data engagements begin with a mapping of sources, consumers, and freshness requirements, then deliver one instrumented synchronisation path before extending to the wider estate.",
    faqs: [
      {
        q: "Do you provide hosting or infrastructure?",
        a: "We provide the engineering services around your data estate — repository design, synchronisation, mirroring, monitoring, and continuity procedure. Hosting decisions stay with you and we work within them.",
      },
      {
        q: "How is sensitive data handled?",
        a: "Access boundaries and movement paths are defined with least privilege, and handling requirements are agreed in writing during discovery. We do not make compliance claims on your behalf.",
      },
      {
        q: "What does mirroring give us over backups?",
        a: "Backups protect against loss. Mirroring additionally gives usable, current copies for reporting, downstream systems, and continuity — with monitoring on the state of each copy.",
      },
      {
        q: "Can this be delivered incrementally?",
        a: "Yes. The typical first delivery is a single fully monitored synchronisation path, which establishes the pattern applied to the remaining sources.",
      },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    body: "Understand business requirements, operational reality, constraints, and the problem worth solving first.",
    detail: ["Stakeholder sessions", "Current-state mapping", "Scope definition"],
  },
  {
    step: "02",
    title: "Design",
    body: "Define workflows, system architecture, data movement, and the user and system needs behind them.",
    detail: ["Workflow modelling", "Architecture outline", "Interface design"],
  },
  {
    step: "03",
    title: "Build",
    body: "Develop dependable technology in reviewable increments, with quality expectations agreed up front.",
    detail: ["Incremental delivery", "Code review", "Working demos"],
  },
  {
    step: "04",
    title: "Integration",
    body: "Connect systems, services, and data paths — including the failure behaviour of each connection.",
    detail: ["Interface contracts", "Data flows", "Failure handling"],
  },
  {
    step: "05",
    title: "Testing",
    body: "Validate functionality, reliability, and operational readiness against the way the business will use it.",
    detail: ["Functional testing", "Operational scenarios", "User validation"],
  },
  {
    step: "06",
    title: "Support",
    body: "Continue improving and supporting the solution as operations, policy, and volume change.",
    detail: ["Issue resolution", "Enhancements", "Knowledge transfer"],
  },
];

export const CAPABILITY_THEMES = [
  {
    id: "architecture",
    label: "Architecture thinking",
    body: "Systems designed around real business workflows and operational requirements rather than around a preferred stack. We define states, ownership, and boundaries before implementation.",
    points: [
      "Workflow-first system design",
      "Explicit state and ownership models",
      "Clear service boundaries",
      "Documented decisions",
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    body: "Connecting business systems and services into dependable workflows, with each interface scoped for direction, data, failure behaviour, and audit trail.",
    points: [
      "Interface contracts",
      "Directional data flow",
      "Failure and retry behaviour",
      "Traceable exchange records",
    ],
  },
  {
    id: "data",
    label: "Data",
    body: "Repositories, synchronisation, replication, monitoring, and operational continuity — treated as an engineering discipline rather than a scheduled job.",
    points: [
      "Repository design",
      "Controlled synchronisation",
      "Mirroring and replication",
      "Lag and failure monitoring",
    ],
  },
  {
    id: "security",
    label: "Security & reliability",
    body: "Responsible data handling, auditability, and controlled operations. We describe what we implement and avoid claims we cannot evidence.",
    points: [
      "Least-privilege access design",
      "Auditable operations",
      "Reliability expectations agreed up front",
      "Controlled change process",
    ],
  },
  {
    id: "scalability",
    label: "Scalability",
    body: "Foundations that evolve with business requirements — configurable processes, modular delivery, and room to extend without a rebuild.",
    points: [
      "Configuration over hard-coding",
      "Modular delivery",
      "Extensible data models",
      "Incremental rollout",
    ],
  },
];

export const VALUE_PILLARS = [
  {
    n: "01",
    title: "Better workflow visibility",
    body: "Operational status becomes something the business can see, not something it has to assemble.",
  },
  {
    n: "02",
    title: "More dependable operations",
    body: "Defined states, recorded activity, and known failure behaviour reduce the surprises.",
  },
  {
    n: "03",
    title: "Connected systems and data",
    body: "Workflows and repositories stay in step, so decisions use the same picture.",
  },
  {
    n: "04",
    title: "Scalable delivery foundations",
    body: "Configurable processes and modular architecture absorb the next requirement.",
  },
];

export const CULTURE = [
  {
    title: "Collaboration over hierarchy",
    body: "Communication stays open between team members and leadership. Ideas are considered on merit, regardless of role or level of experience.",
  },
  {
    title: "Mutual respect",
    body: "Every team member's ideas, opinions, time, and contributions are valued — including when they disagree with the prevailing view.",
  },
  {
    title: "Problem solving without blame",
    body: "When something goes wrong we focus on understanding the issue, agreeing a fix, and improving the process rather than assigning fault.",
  },
  {
    title: "Continuous learning",
    body: "We learn from successes and mistakes alike, and treat constructive feedback as a normal part of doing good work.",
  },
];

export const ETHICS = [
  { title: "Integrity", body: "Honest, responsible, and transparent in work and communication." },
  { title: "Accountability", body: "Ownership of responsibilities and commitment to delivery." },
  { title: "Teamwork", body: "Supporting colleagues and sharing knowledge toward common goals." },
  { title: "Open communication", body: "Speaking up, asking questions, and giving constructive feedback." },
  { title: "Professionalism", body: "Quality, discipline, punctuality, and a positive working attitude." },
  { title: "Confidentiality", body: "Company, client, and project information handled responsibly." },
];
