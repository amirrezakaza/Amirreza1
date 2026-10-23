import type { Locale } from "./config";

export const PROJECT_TYPES = [
  "website",
  "web-application",
  "mobile-application",
  "ai-solution",
  "telegram-bot",
  "custom-software",
  "game-development",
  "ui-ux-design",
  "other",
] as const;

export type ProjectTypeKey = (typeof PROJECT_TYPES)[number];

export interface Dictionary {
  meta: {
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    projectsTitle: string;
    projectsDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    processTitle: string;
    processDescription: string;
    faqTitle: string;
    faqDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  a11y: {
    skipToContent: string;
    mainNav: string;
    mobileMenuOpen: string;
    mobileMenuClose: string;
    switchLanguage: string;
    breadcrumb: string;
  };
  nav: {
    home: string;
    services: string;
    projects: string;
    process: string;
    about: string;
    faq: string;
    contact: string;
    startProject: string;
    langLabelEn: string;
    langLabelFa: string;
    switchToOtherLabel: string;
  };
  hero: {
    eyebrow: string;
    slogan: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: Array<{ label: string; detail: string }>;
    visualTitle: string;
    visualCaption: string;
    visualLayers: Array<{ code: string; name: string; spec: string }>;
  };
  homeServices: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAllServices: string;
    inquireService: string;
  };
  homeProjects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    demoDisclosure: string;
    viewAllProjects: string;
    readCaseView: string;
  };
  whyGazanova: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  homeProcess: {
    eyebrow: string;
    title: string;
    subtitle: string;
    exploreFullProcess: string;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    capabilityNote: string;
    quickJumpLabel: string;
    includesHeading: string;
    problemsHeading: string;
    suitableHeading: string;
    deliverablesHeading: string;
    requestEstimate: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    transparencyBannerTitle: string;
    transparencyBannerBody: string;
    filterAll: string;
    demoBadge: string;
    viewDetails: string;
    techStackLabel: string;
    problemHeading: string;
    solutionHeading: string;
    architectureHeading: string;
    featuresHeading: string;
    backToProjects: string;
    startSimilarProject: string;
    statusLabel: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    missionHeading: string;
    missionBody: string;
    visionHeading: string;
    visionBody: string;
    engineeringHeading: string;
    engineeringIntro: string;
    engineeringPrinciples: Array<{ title: string; body: string }>;
    valuesHeading: string;
    values: Array<{ title: string; body: string }>;
    collaborationHeading: string;
    collaborationBody: string;
    collaborationPoints: string[];
  };
  processPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      stepNumber: string;
      title: string;
      summary: string;
      activities: string[];
      keyOutputs: string;
    }>;
    governanceHeading: string;
    governanceSubtitle: string;
    governancePillars: Array<{
      title: string;
      description: string;
    }>;
  };
  faqPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    stillHaveQuestions: string;
    contactPrompt: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nextStepsTitle: string;
    nextSteps: Array<{ step: string; title: string; detail: string }>;
    verifiedContactTitle: string;
    directFormNote: string;
    privacyTitle: string;
    privacyBody: string;
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      projectTypeLabel: string;
      projectTypePlaceholder: string;
      projectTypes: Record<ProjectTypeKey, string>;
      budgetLabel: string;
      budgetPlaceholder: string;
      budgetOptions: Array<{ value: string; label: string }>;
      timelineLabel: string;
      timelinePlaceholder: string;
      timelineOptions: Array<{ value: string; label: string }>;
      descriptionLabel: string;
      descriptionPlaceholder: string;
      additionalLabel: string;
      additionalPlaceholder: string;
      requiredBadge: string;
      optionalBadge: string;
      privacyConsentNote: string;
      submitButton: string;
      submittingButton: string;
      successTitle: string;
      successMessage: string;
      sendAnotherButton: string;
      errors: {
        fullNameRequired: string;
        fullNameLength: string;
        emailRequired: string;
        emailInvalid: string;
        projectTypeRequired: string;
        descriptionRequired: string;
        descriptionMinLength: string;
        descriptionMaxLength: string;
        fieldTooLong: string;
        duplicateSubmission: string;
        rateLimited: string;
        providerUnavailable: string;
        networkError: string;
        validationFailed: string;
      };
    };
  };
  footer: {
    tagline: string;
    description: string;
    navigationHeading: string;
    capabilitiesHeading: string;
    inquiriesHeading: string;
    inquiriesText: string;
    startConversation: string;
    copyright: string;
    honestyNote: string;
  };
  notFound: {
    code: string;
    title: string;
    description: string;
    backHome: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      homeTitle: "GAZANOVA — Build the Next Generation | Software & AI Studio",
      homeDescription:
        "From ambitious ideas to production-ready software, GAZANOVA designs and engineers custom web platforms, AI solutions, mobile apps, and reliable digital systems.",
      servicesTitle: "Software Engineering & AI Services | GAZANOVA",
      servicesDescription:
        "Explore GAZANOVA's capabilities across custom web applications, AI assistants, Telegram automation, mobile development, APIs, UI/UX design, game development, and maintenance.",
      projectsTitle: "Engineering Portfolio & Reference Demos | GAZANOVA",
      projectsDescription:
        "Review GAZANOVA's architectural demonstrations and technical reference systems across AI workflows, web platforms, automation bots, and interactive software.",
      aboutTitle: "About GAZANOVA — Mission, Engineering Standards & Values",
      aboutDescription:
        "Learn how GAZANOVA approaches software engineering, usability, operational reliability, transparency, and long-term technical collaboration.",
      processTitle: "Development Process & Delivery Workflow | GAZANOVA",
      processDescription:
        "A transparent seven-stage software engineering workflow covering discovery, planning, UX/UI design, development, QA testing, deployment, and ongoing maintenance.",
      faqTitle: "Frequently Asked Questions — Working With GAZANOVA",
      faqDescription:
        "Clear answers on how software projects begin, scoping requirements, quotations, timelines, revisions, confidentiality, technology choices, and remote collaboration.",
      contactTitle: "Start a Project — Request a Software Consultation | GAZANOVA",
      contactDescription:
        "Share your software, web application, or AI project goals with GAZANOVA to discuss technical scope, architecture, and practical next steps.",
    },
    a11y: {
      skipToContent: "Skip to main content",
      mainNav: "Primary navigation",
      mobileMenuOpen: "Open navigation menu",
      mobileMenuClose: "Close navigation menu",
      switchLanguage: "Switch website language",
      breadcrumb: "Breadcrumb",
    },
    nav: {
      home: "Home",
      services: "Services",
      projects: "Work",
      process: "Process",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      startProject: "Start a Project",
      langLabelEn: "EN",
      langLabelFa: "فارسی",
      switchToOtherLabel: "مشاهده به زبان فارسی",
    },
    hero: {
      eyebrow: "GAZANOVA · SOFTWARE ENGINEERING & AI STUDIO",
      slogan: "Build the Next Generation.",
      headline: "We Build Digital Products That Move Businesses Forward.",
      supporting:
        "From ambitious ideas to production-ready software, GAZANOVA transforms complex challenges into elegant digital experiences.",
      primaryCta: "Start a Project",
      secondaryCta: "Explore Our Work",
      pillars: [
        {
          label: "Full-Cycle Engineering",
          detail: "Architecture, UX, backend APIs, AI systems & deployment",
        },
        {
          label: "Structured Delivery",
          detail: "Documented scope, clear milestones & maintainable code",
        },
        {
          label: "Bilingual Collaboration",
          detail: "Seamless remote communication in English & Persian",
        },
      ],
      visualTitle: "PRODUCTION SYSTEM ARCHITECTURE",
      visualCaption:
        "Every GAZANOVA build aligns human-centered interface design with resilient backend engineering and verifiable quality checks.",
      visualLayers: [
        {
          code: "L01 · EXPERIENCE",
          name: "Responsive Web, Mobile & Conversational Interfaces",
          spec: "Accessible UI · RTL/LTR · Performance-tuned",
        },
        {
          code: "L02 · INTELLIGENCE",
          name: "Applied AI Workflows, Retrieval & Automation",
          spec: "LLM Orchestration · Bot Pipelines · Guardrails",
        },
        {
          code: "L03 · CORE SYSTEMS",
          name: "Typed APIs, Domain Logic & Data Integrity",
          spec: "Validation · Auth · Security Headers · Observability",
        },
        {
          code: "L04 · LIFECYCLE",
          name: "Testing, Deployment & Long-Term Maintainability",
          spec: "Automated Checks · Clean Docs · Iterative Upgrades",
        },
      ],
    },
    homeServices: {
      eyebrow: "CAPABILITIES",
      title: "Focused Software & AI Engineering Disciplines",
      subtitle:
        "We design, build, and refine practical digital systems tailored to your operational goals, technical constraints, and users.",
      viewAllServices: "Explore All 10 Services",
      inquireService: "Discuss This Service",
    },
    homeProjects: {
      eyebrow: "SELECTED WORK & ARCHITECTURES",
      title: "Technical Reference Demonstrations",
      subtitle:
        "Explore representative software architectures and interactive systems engineered by GAZANOVA to illustrate our code standards and design thinking.",
      demoDisclosure:
        "Transparency Note: Featured entries below are studio-engineered demonstration architectures clearly labeled as demos until public client case studies are published.",
      viewAllProjects: "View Full Portfolio",
      readCaseView: "Inspect Architecture",
    },
    whyGazanova: {
      eyebrow: "WHY GAZANOVA",
      title: "Engineered for Clarity, Reliability, and Long-Term Value",
      subtitle:
        "Software succeeds when thoughtful product design meets disciplined engineering execution and honest communication.",
      items: [
        {
          title: "Purposeful Innovation",
          description:
            "We apply modern web frameworks and artificial intelligence where they create genuine utility—never adding complexity for trend value.",
        },
        {
          title: "Production-Grade Quality",
          description:
            "Strict type safety, clean modular architecture, input validation, and security practices are built in from day one rather than patched in later.",
        },
        {
          title: "Operational Reliability",
          description:
            "Systems are designed for predictable behavior under real-world network failures, edge cases, and evolving business requirements.",
        },
        {
          title: "Radical Transparency",
          description:
            "Clear scope definitions, realistic milestones, honest technical trade-offs, and direct engineering communication without jargon.",
        },
        {
          title: "Refined User Experience",
          description:
            "Fast, accessible interfaces across desktop and mobile devices—engineered with native precision for both English (LTR) and Persian (RTL) audiences.",
        },
        {
          title: "Long-Term Collaboration",
          description:
            "Readable documentation, maintainable codebases, and structured handover ensure your software continues evolving smoothly after launch.",
        },
      ],
    },
    homeProcess: {
      eyebrow: "HOW WE WORK",
      title: "A Transparent Path From Concept to Production",
      subtitle:
        "Every engagement follows a structured seven-stage workflow designed to eliminate ambiguity and keep progress visible.",
      exploreFullProcess: "Examine Our Full Process",
    },
    ctaBanner: {
      eyebrow: "READY TO BUILD?",
      title: "Turn Your Technical Vision Into Reliable Software.",
      description:
        "Tell us what you are building, the problem you want to solve, or the system you need to modernize. We will review your requirements carefully and outline clear next steps.",
      primaryButton: "Start a Project",
      secondaryButton: "Read Common Questions",
    },
    servicesPage: {
      eyebrow: "SERVICES & CAPABILITIES",
      title: "End-to-End Software Engineering & Applied AI",
      subtitle:
        "From high-conversion business websites and custom SaaS platforms to AI assistants, Telegram automation, and ongoing software stewardship.",
      capabilityNote:
        "Each engagement is scoped specifically around verifiable technical deliverables. Share your objectives so we can evaluate suitability and recommend a practical architecture.",
      quickJumpLabel: "Jump to capability",
      includesHeading: "What It Includes",
      problemsHeading: "Business Problems Solved",
      suitableHeading: "Who It Is Suitable For",
      deliverablesHeading: "Expected Deliverables",
      requestEstimate: "Request Consultation or Estimate",
    },
    projectsPage: {
      eyebrow: "PORTFOLIO & REFERENCE ARCHITECTURES",
      title: "Software Systems & Technical Demonstrations",
      subtitle:
        "An inside look at how GAZANOVA structures modern web applications, AI workflows, automation pipelines, and interactive experiences.",
      transparencyBannerTitle: "Honest Portfolio Disclosure",
      transparencyBannerBody:
        "All entries currently showcased below are internal GAZANOVA demonstration projects and reference architectures built to illustrate our engineering capabilities. We never invent fictional clients, fabricated metrics, or unverified customer claims.",
      filterAll: "All Categories",
      demoBadge: "Demo · Reference Architecture",
      viewDetails: "View Technical Breakdown",
      techStackLabel: "Technology Stack",
      problemHeading: "Problem Being Solved",
      solutionHeading: "Implemented Engineering Solution",
      architectureHeading: "Architecture & Quality Highlights",
      featuresHeading: "Core Functional Capabilities",
      backToProjects: "Back to All Projects",
      startSimilarProject: "Discuss a Similar Custom Project",
      statusLabel: "Project Classification",
    },
    aboutPage: {
      eyebrow: "ABOUT GAZANOVA",
      title: "An Ambitious Studio Dedicated to Dependable Digital Craft.",
      subtitle:
        "GAZANOVA is a software engineering and digital product development studio focused on turning complex ideas into useful, resilient, and well-crafted technology.",
      missionHeading: "Our Mission",
      missionBody:
        "To help founders, organizations, and growing teams transform ambitious product concepts into reliable, user-centered software—without opaque processes, fragile shortcuts, or unnecessary complexity.",
      visionHeading: "Our Vision",
      visionBody:
        "To establish an internationally respected engineering brand recognized for technical integrity, thoughtful human-centered interfaces, and practical applications of artificial intelligence.",
      engineeringHeading: "Our Approach to Software Engineering",
      engineeringIntro:
        "Great software feels effortless on the surface because it is disciplined underneath. Every system we build is guided by four foundational engineering commitments:",
      engineeringPrinciples: [
        {
          title: "Usability & Accessibility First",
          body: "Interfaces should respect the user's time and attention—loading quickly, working predictably on every screen size, supporting keyboard navigation, and honoring language direction naturally.",
        },
        {
          title: "Security & Data Minimization",
          body: "We validate inputs rigorously on both client and server, protect credentials strictly on the backend, collect only necessary data, and design resilient failure boundaries.",
        },
        {
          title: "Maintainable, Clean Codebases",
          body: "Clear module boundaries, strong static typing, sensible dependencies, and practical documentation ensure future engineers can extend the product confidently.",
        },
        {
          title: "Pragmatic AI & Automation",
          body: "When integrating AI models or bots, we emphasize deterministic guardrails, clear fallbacks, cost control, and real operational usefulness over hype.",
        },
      ],
      valuesHeading: "Core Values",
      values: [
        {
          title: "Innovation",
          body: "Exploring better architectural patterns and intelligent tools that genuinely improve product capability.",
        },
        {
          title: "Quality",
          body: "Attention to detail across visual polish, interaction states, edge-case handling, and code structure.",
        },
        {
          title: "Reliability",
          body: "Building software that behaves consistently and earns trust through dependable day-to-day operation.",
        },
        {
          title: "Transparency",
          body: "Communicating openly about scope, technical constraints, progress, and realistic expectations.",
        },
        {
          title: "Excellent User Experience",
          body: "Designing clean, intuitive workflows that reduce cognitive load for end users and administrators alike.",
        },
        {
          title: "Long-Term Collaboration",
          body: "Treating software as a living asset supported through careful planning, clean delivery, and post-launch care.",
        },
      ],
      collaborationHeading: "Collaboration Philosophy",
      collaborationBody:
        "Whether you arrive with a detailed technical specification or an early-stage business challenge, we collaborate as a thoughtful engineering partner. We ask clarifying questions early, document agreed milestones clearly, and share incremental progress so there are no surprises at delivery.",
      collaborationPoints: [
        "Written scope alignment before development begins",
        "Structured milestone reviews with testable builds",
        "Direct communication in English or Persian across remote time zones",
        "Clean source handoff, environment documentation, and optional maintenance support",
      ],
    },
    processPage: {
      eyebrow: "DEVELOPMENT PROCESS",
      title: "Disciplined Execution From Discovery to Long-Term Care",
      subtitle:
        "Clear milestones, documented decisions, and continuous quality checks keep complex software projects predictable and transparent.",
      steps: [
        {
          stepNumber: "01",
          title: "Discovery and Requirements",
          summary:
            "We examine your business objectives, target users, operational bottlenecks, and technical constraints to clarify what actually needs to be built.",
          activities: [
            "Stakeholder objectives & problem-space review",
            "User workflow mapping and functional requirement capture",
            "Technical feasibility, integration & risk evaluation",
          ],
          keyOutputs: "Requirements Summary & Feasibility Notes",
        },
        {
          stepNumber: "02",
          title: "Project Planning",
          summary:
            "We translate goals into a concrete system architecture, technology stack selection, milestone breakdown, and realistic delivery roadmap.",
          activities: [
            "Architecture blueprint & data model planning",
            "Scope definition with explicit inclusions and phase boundaries",
            "Milestone schedule & communication cadence setup",
          ],
          keyOutputs: "Technical Proposal, Scope Specification & Milestone Plan",
        },
        {
          stepNumber: "03",
          title: "UX/UI Design",
          summary:
            "We design clear information hierarchy, user journeys, responsive layouts, and interactive states before locking complex frontend code.",
          activities: [
            "Wireframing core user journeys and edge states",
            "Visual design system tokens, typography & RTL/LTR layout structure",
            "Interactive component specifications & accessibility review",
          ],
          keyOutputs: "UI Design System & Screen Specifications",
        },
        {
          stepNumber: "04",
          title: "Development",
          summary:
            "Clean, modular implementation across frontend interfaces, backend APIs, databases, or AI/automation pipelines with iterative milestone builds.",
          activities: [
            "Type-safe frontend & backend engineering",
            "API integration, authentication & security controls",
            "Regular progress updates & staging previews",
          ],
          keyOutputs: "Production-Structured Source Code & Staging Releases",
        },
        {
          stepNumber: "05",
          title: "Testing and Quality Assurance",
          summary:
            "Systematic verification across devices, screen sizes, validation paths, error states, security boundaries, and performance benchmarks.",
          activities: [
            "Functional, form validation & edge-case verification",
            "Responsive desktop/tablet/mobile & keyboard accessibility testing",
            "Security header, input sanitization & failure-mode checks",
          ],
          keyOutputs: "Verified Release Candidate & QA Checklist",
        },
        {
          stepNumber: "06",
          title: "Deployment",
          summary:
            "Controlled launch onto your production environment with environment configuration, SSL/HTTPS verification, SEO readiness, and operational checks.",
          activities: [
            "Production build, environment variable & domain/TLS setup",
            "Healthcheck, email/API integration & monitoring verification",
            "Documentation & operational handover",
          ],
          keyOutputs: "Live Production System & Deployment Guide",
        },
        {
          stepNumber: "07",
          title: "Maintenance and Improvement",
          summary:
            "Post-launch support to keep dependencies healthy, resolve emerging issues, optimize performance, and ship new capabilities as your business grows.",
          activities: [
            "Security & framework updates",
            "Performance tuning & UX refinements based on real usage",
            "Planned feature iterations & technical advisory",
          ],
          keyOutputs: "Ongoing Stability Updates & Iterative Enhancements",
        },
      ],
      governanceHeading: "How Scope, Milestones & Communication Are Managed",
      governanceSubtitle:
        "Predictable delivery relies on clear operational agreements throughout the project lifecycle.",
      governancePillars: [
        {
          title: "Structured Communication",
          description:
            "Written updates at agreed intervals summarize completed tasks, upcoming priorities, and any decisions needed from your team—preventing misunderstandings.",
        },
        {
          title: "Transparent Scope Control",
          description:
            "Every project starts with a documented baseline scope. When new ideas arise mid-project, we evaluate their impact openly and either schedule them cleanly or adjust milestones with mutual agreement.",
        },
        {
          title: "Verifiable Milestones",
          description:
            "Progress is measured through working builds, reviewable interfaces, and concrete deliverables rather than vague percentage estimates.",
        },
        {
          title: "Clean Ownership & Documentation",
          description:
            "Code structure, environment requirements, and deployment steps are documented clearly so your organization stays in control of its technology.",
        },
      ],
    },
    faqPage: {
      eyebrow: "FREQUENTLY ASKED QUESTIONS",
      title: "Clear Answers Before You Start a Project",
      subtitle:
        "Straightforward explanations about scoping, quotations, timelines, revisions, confidentiality, and remote engineering collaboration.",
      items: [
        {
          question: "How does a new project with GAZANOVA begin?",
          answer:
            "Start by submitting our Project Inquiry Form with an overview of your goals, project category, and any known constraints. We review your submission carefully, follow up to clarify open questions, and schedule a focused discovery conversation or written scoping exchange before preparing a tailored proposal.",
        },
        {
          question: "Do I need a complete technical specification before contacting you?",
          answer:
            "No. While existing documentation, wireframes, or API specs are always helpful, many clients start with a clear business problem or product concept. During the Discovery phase, we help translate your objectives into structured functional and technical requirements.",
        },
        {
          question: "How are estimated timelines determined?",
          answer:
            "Timelines depend on feature complexity, third-party integrations, bilingual or multi-platform requirements, and review cycles. Rather than quoting arbitrary delivery dates upfront, we provide a realistic milestone schedule after reviewing your specific scope.",
        },
        {
          question: "How do budgets and project quotations work?",
          answer:
            "Every software build is quoted individually based on defined scope and deliverables—either as a milestone-based project or a dedicated phased engagement. Sharing an approximate budget range on the inquiry form helps us recommend the most practical architectural approach—for example, starting with a focused MVP versus a multi-module platform.",
        },
        {
          question: "How are design and development revisions handled?",
          answer:
            "Each milestone includes structured review checkpoints so you can inspect layouts and working builds early. Adjustments within the agreed scope are incorporated during those review windows, while new feature requests outside the baseline scope are documented and estimated transparently before implementation.",
        },
        {
          question: "Do you provide ongoing maintenance after launch?",
          answer:
            "Yes. Software benefits from regular dependency updates, security patching, monitoring, and iterative UX improvements. We offer structured post-launch maintenance plans as well as on-demand enhancement phases.",
        },
        {
          question: "Which technologies and stacks do you work with?",
          answer:
            "We select proven, maintainable technologies suited to each product—including modern TypeScript, React, Next.js, Node.js, Python services, relational databases such as PostgreSQL, modern cross-platform mobile stacks, Telegram Bot APIs, and applied LLM/AI integration pipelines.",
        },
        {
          question: "How do you protect confidentiality and intellectual property?",
          answer:
            "All project inquiries and shared materials are treated strictly as confidential. Upon request, we are glad to review and sign a mutual Non-Disclosure Agreement (NDA) prior to exchanging sensitive business details or proprietary code.",
        },
        {
          question: "How does remote collaboration work across different regions?",
          answer:
            "GAZANOVA operates with a remote-first workflow supporting both English and Persian communication. We combine structured written updates, shared staging environments, and scheduled video or voice check-ins aligned with overlapping working hours.",
        },
      ],
      stillHaveQuestions: "Have a specific technical question?",
      contactPrompt: "Reach out through our project inquiry form and we will respond with clear details.",
    },
    contactPage: {
      eyebrow: "START A PROJECT",
      title: "Tell Us What You Want to Build.",
      subtitle:
        "Share your goals, technical challenges, or product idea. We review every inquiry carefully and reply with practical next steps.",
      nextStepsTitle: "What Happens Next",
      nextSteps: [
        {
          step: "01",
          title: "Initial Technical Review",
          detail:
            "We read your project summary, assess technical alignment, and identify key architectural questions.",
        },
        {
          step: "02",
          title: "Discovery & Scope Clarification",
          detail:
            "We follow up via email to clarify requirements, priorities, integrations, and desired milestones.",
        },
        {
          step: "03",
          title: "Structured Proposal",
          detail:
            "Once scope is clear, you receive a transparent breakdown of recommended architecture, deliverables, and phases.",
        },
      ],
      verifiedContactTitle: "Direct Channels",
      directFormNote:
        "Use the secure inquiry form on this page to send structured project details directly to our engineering team.",
      privacyTitle: "Privacy & Data Handling",
      privacyBody:
        "We collect only the information you submit in this form to evaluate your inquiry and communicate with you about a potential project. Your submission is transmitted securely over the server to our configured business inbox and is never sold or shared with third-party marketers.",
      form: {
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "e.g., Alex Morgan",
        emailLabel: "Email Address",
        emailPlaceholder: "you@company.com",
        companyLabel: "Company or Organization",
        companyPlaceholder: "Company, startup, or team name",
        projectTypeLabel: "Project Type",
        projectTypePlaceholder: "Select a project category",
        projectTypes: {
          website: "Website",
          "web-application": "Web Application",
          "mobile-application": "Mobile Application",
          "ai-solution": "AI Solution",
          "telegram-bot": "Telegram Bot",
          "custom-software": "Custom Software",
          "game-development": "Game Development",
          "ui-ux-design": "UI/UX Design",
          other: "Other",
        },
        budgetLabel: "Estimated Budget Range",
        budgetPlaceholder: "Optional — select if known",
        budgetOptions: [
          { value: "undecided", label: "Not yet defined / Need scoping guidance" },
          { value: "mvp-small", label: "Focused MVP or Single-Scope Build" },
          { value: "mid-scale", label: "Mid-Scale Product or Custom Platform" },
          { value: "enterprise-longterm", label: "Comprehensive System / Long-Term Partnership" },
        ],
        timelineLabel: "Preferred Timeline",
        timelinePlaceholder: "Optional — select target timeframe",
        timelineOptions: [
          { value: "flexible", label: "Flexible / Quality-driven schedule" },
          { value: "1-2-months", label: "Within 1–2 months" },
          { value: "2-4-months", label: "2–4 months" },
          { value: "4-plus-months", label: "4+ months / Phased rollout" },
        ],
        descriptionLabel: "Project Description",
        descriptionPlaceholder:
          "Describe what you want to build, the main problem it solves, target users, and any key features...",
        additionalLabel: "Additional Requirements",
        additionalPlaceholder:
          "Optional — preferred tech stack, bilingual needs, existing systems, links, or NDA requirements...",
        requiredBadge: "Required",
        optionalBadge: "Optional",
        privacyConsentNote:
          "By submitting this form, you confirm the details are accurate and consent to GAZANOVA contacting you regarding this project inquiry.",
        submitButton: "Submit Project Inquiry",
        submittingButton: "Sending Inquiry...",
        successTitle: "Inquiry Received Successfully",
        successMessage:
          "Thank you for reaching out to GAZANOVA. Your project details have been delivered to our team. We will review your requirements and follow up at your provided email address.",
        sendAnotherButton: "Submit Another Inquiry",
        errors: {
          fullNameRequired: "Please enter your full name.",
          fullNameLength: "Full name must be between 2 and 100 characters.",
          emailRequired: "Please enter your email address.",
          emailInvalid: "Please enter a valid email address (for example, name@domain.com).",
          projectTypeRequired: "Please select a project type.",
          descriptionRequired: "Please describe your project goals and requirements.",
          descriptionMinLength: "Please provide at least 25 characters so we can understand your project.",
          descriptionMaxLength: "Project description must be 4,000 characters or fewer.",
          fieldTooLong: "This field exceeds the maximum allowed length.",
          duplicateSubmission:
            "This exact inquiry was just submitted recently. No action is needed—we already received it.",
          rateLimited:
            "Too many requests were sent in a short period. Please wait a few minutes before trying again.",
          providerUnavailable:
            "Our email delivery service is currently not configured or temporarily unreachable. Your message could not be sent yet—please try again later.",
          networkError:
            "Unable to reach the server. Please check your internet connection and try again.",
          validationFailed: "Please review the highlighted fields and correct any errors.",
        },
      },
    },
    footer: {
      tagline: "Build the Next Generation.",
      description:
        "Software engineering and artificial intelligence studio turning complex ideas into reliable, modern digital products.",
      navigationHeading: "Studio",
      capabilitiesHeading: "Key Capabilities",
      inquiriesHeading: "Start a Conversation",
      inquiriesText:
        "Share your software or AI concept through our project inquiry form for a structured technical review.",
      startConversation: "Start a Project",
      copyright: `© ${new Date().getFullYear()} GAZANOVA. All rights reserved.`,
      honestyNote: "Engineered with clarity, security, and bilingual accessibility.",
    },
    notFound: {
      code: "404",
      title: "Page Not Found",
      description:
        "The page you requested does not exist or may have moved. Use the link below to return to GAZANOVA.",
      backHome: "Return to Homepage",
    },
  },

  fa: {
    meta: {
      homeTitle: "گازانووا (GAZANOVA) — نسل بعدی را بسازید | استودیو مهندسی نرم‌افزار و هوش مصنوعی",
      homeDescription:
        "از ایده‌های جاه‌طلبانه تا نرم‌افزارهای آماده بهره‌برداری؛ گازانووا طراح و توسعه‌دهنده وب‌اپلیکیشن‌های اختصاصی، راهکارهای هوش مصنوعی، اپلیکیشن موبایل و سیستم‌های دیجیتال پایدار است.",
      servicesTitle: "خدمات مهندسی نرم‌افزار و هوش مصنوعی | گازانووا (GAZANOVA)",
      servicesDescription:
        "آشنایی با خدمات تخصصی گازانووا شامل توسعه وب‌سایت و وب‌اپلیکیشن، راهکارهای هوش مصنوعی، ربات‌های تلگرام، اپلیکیشن موبایل، طراحی UI/UX، توسعه API، بازی‌سازی و نگهداری نرم‌افزار.",
      projectsTitle: "نمونه‌کارها و معماری‌های نمایشی فنی | گازانووا (GAZANOVA)",
      projectsDescription:
        "بررسی پروژه‌های نمایشی و معماری‌های مرجع مهندسی در گازانووا در حوزه‌های هوش مصنوعی، پلتفرم‌های تحت وب، اتوماسیون و نرم‌افزارهای تعاملی.",
      aboutTitle: "درباره گازانووا — مأموریت، استانداردهای مهندسی و ارزش‌ها",
      aboutDescription:
        "آشنایی با رویکرد گازانووا در مهندسی نرم‌افزار، تجربه کاربری، پایداری فنی، شفافیت در همکاری و توسعه پایدار محصولات دیجیتال.",
      processTitle: "فرآیند توسعه نرم‌افزار و مراحل اجرای پروژه | گازانووا",
      processDescription:
        "فرآیند شفاف و هفت‌مرحله‌ای مهندسی نرم‌افزار در گازانووا از شناخت نیازها و برنامه‌ریزی تا طراحی UI/UX، توسعه، تضمین کیفیت، استقرار و پشتیبانی.",
      faqTitle: "سوالات متداول همکاری با استودیو گازانووا | GAZANOVA",
      faqDescription:
        "پاسخ‌های روشن درباره نحوه شروع پروژه، تعریف نیازمندی‌ها، برآورد هزینه و زمان‌بندی، بازنگری‌ها، محرمانگی اطلاعات و همکاری از راه دور.",
      contactTitle: "شروع پروژه — ثبت درخواست مشاوره و توسعه نرم‌افزار | گازانووا",
      contactDescription:
        "اهداف و نیازمندی‌های پروژه نرم‌افزاری، وب‌اپلیکیشن یا هوش مصنوعی خود را با تیم گازانووا در میان بگذارید تا مسیر فنی و گام‌های بعدی را بررسی کنیم.",
    },
    a11y: {
      skipToContent: "پرش به محتوای اصلی",
      mainNav: "منوی اصلی سایت",
      mobileMenuOpen: "باز کردن منوی ناوبری",
      mobileMenuClose: "بستن منوی ناوبری",
      switchLanguage: "تغییر زبان وب‌سایت",
      breadcrumb: "مسیر صفحه",
    },
    nav: {
      home: "صفحه اصلی",
      services: "خدمات",
      projects: "پروژه‌ها",
      process: "فرآیند کار",
      about: "درباره ما",
      faq: "سوالات متداول",
      contact: "تماس",
      startProject: "شروع پروژه",
      langLabelEn: "English",
      langLabelFa: "فا",
      switchToOtherLabel: "Switch to English",
    },
    hero: {
      eyebrow: "GAZANOVA · استودیو مهندسی نرم‌افزار و هوش مصنوعی",
      slogan: "نسل بعدی را بسازید.",
      headline: "ما محصولات دیجیتالی می‌سازیم که کسب‌وکارها را به پیش می‌برند.",
      supporting:
        "از ایده‌های جاه‌طلبانه تا نرم‌افزارهای آماده بهره‌برداری؛ گازانووا چالش‌های پیچیده را به تجربه‌های دیجیتال کارآمد، دقیق و ماندگار تبدیل می‌کند.",
      primaryCta: "شروع پروژه",
      secondaryCta: "مشاهده پروژه‌ها",
      pillars: [
        {
          label: "مهندسی یکپارچه محصول",
          detail: "معماری سیستم، طراحی رابط کاربری، API، هوش مصنوعی و استقرار",
        },
        {
          label: "اجرای ساختارمند و شفاف",
          detail: "محدوده دقیق، مراحل قابل ارزیابی و کدنویسی استاندارد و قابل نگهداری",
        },
        {
          label: "ارتباط حرفه‌ای دوزبانه",
          detail: "همکاری منظم و شفاف به زبان‌های فارسی و انگلیسی",
        },
      ],
      visualTitle: "معماری سیستم‌های آماده بهره‌برداری",
      visualCaption:
        "در گازانووا، طراحی دقیق رابط کاربری با مهندسی پایدار بک‌اند و کنترل کیفیت مرحله‌به‌مرحله هم‌راستا می‌شود.",
      visualLayers: [
        {
          code: "L01 · لایه تجربه کاربری",
          name: "رابط‌های وب، موبایل و تعاملی واکنش‌گرا",
          spec: "دسترس‌پذیر · پشتیبانی بومی راست‌به‌چپ و چپ‌به‌راست · سریع",
        },
        {
          code: "L02 · لایه هوشمندی",
          name: "جریان‌های کاری هوش مصنوعی، بازیابی دانش و اتوماسیون",
          spec: "مدیریت مدل‌های زبانی · ربات‌های هوشمند · کنترل خطا",
        },
        {
          code: "L03 · هسته نرم‌افزار",
          name: "APIهای تایپ‌امن، منطق تجاری و یکپارچگی داده‌ها",
          spec: "اعتبارسنجی دقیق · امنیت سرور · پایش عملکرد",
        },
        {
          code: "L04 · چرخه پایداری",
          name: "آزمون کیفیت، استقرار اصولی و قابلیت توسعه بلندمدت",
          spec: "تست ساختارمند · مستندسازی شفاف · ارتقای مستمر",
        },
      ],
    },
    homeServices: {
      eyebrow: "توانمندی‌های تخصصی",
      title: "حوزه‌های مهندسی نرم‌افزار و هوش مصنوعی کاربردی",
      subtitle:
        "ما سامانه‌ها و محصولات دیجیتالی را متناسب با نیازهای واقعی کسب‌وکار، محدودیت‌های فنی و راحتی کاربران شما طراحی و پیاده‌سازی می‌کنیم.",
      viewAllServices: "مشاهده هر ۱۰ خدمت تخصصی",
      inquireService: "ثبت درخواست در این حوزه",
    },
    homeProjects: {
      eyebrow: "منتخب معماری‌ها و پروژه‌ها",
      title: "نمونه‌های نمایشی و معماری‌های مرجع مهندسی",
      subtitle:
        "نگاهی به ساختار فنی، کیفیت رابط کاربری و معماری سیستم‌هایی که در گازانووا برای نمایش استانداردهای مهندسی طراحی شده‌اند.",
      demoDisclosure:
        "شفافیت حرفه‌ای: موارد زیر پروژه‌های نمایشی (Demo) و معماری‌های مرجع داخلی استودیو هستند و تا زمان انتشار عمومی پروژه‌های مشتریان، به‌طور شفاف با برچسب نمایشی معرفی می‌شوند.",
      viewAllProjects: "مشاهده همه پروژه‌ها",
      readCaseView: "بررسی جزئیات فنی",
    },
    whyGazanova: {
      eyebrow: "چرا گازانووا؟",
      title: "ترکیب دقت مهندسی، شفافیت کاری و ارزش بلندمدت",
      subtitle:
        "یک نرم‌افزار موفق زمانی شکل می‌گیرد که طراحی هدفمند محصول با اجرای فنی منظم و ارتباط صادقانه همراه شود.",
      items: [
        {
          title: "نوآوری هدفمند",
          description:
            "فناوری‌های نوین و هوش مصنوعی را دقیقاً جایی به کار می‌گیریم که مسئله‌ای واقعی را حل کنند و بهره‌وری ملموس بسازند، نه صرفاً برای پیچیده‌سازی ظاهری.",
        },
        {
          title: "کیفیت در تراز بهره‌برداری واقعی",
          description:
            "تایپ‌سیفتی دقیق، معماری ماژولار، اعتبارسنجی ورودی‌ها و اصول امنیتی از نخستین روز کدنویسی در ساختار پروژه لحاظ می‌شوند.",
        },
        {
          title: "پایداری و قابلیت اتکا",
          description:
            "سیستم‌ها به گونه‌ای طراحی می‌شوند که در برابر خطاهای شبکه، شرایط مرزی و رشد تدریجی نیازهای کسب‌وکار رفتاری قابل پیش‌بینی داشته باشند.",
        },
        {
          title: "شفافیت کامل در همکاری",
          description:
            "تعریف روشن محدوده پروژه، زمان‌بندی واقع‌بینانه، توضیح صادقانه گزینه‌های فنی و گزارش‌دهی منظم بدون ابهام.",
        },
        {
          title: "تجربه کاربری ممتاز",
          description:
            "رابط‌های کاربری روان، خوانا و استاندارد برای موبایل و دسکتاپ با چیدمان اصولی برای هر دو زبان فارسی (راست‌به‌چپ) و انگلیسی (چپ‌به‌راست).",
        },
        {
          title: "همراهی بلندمدت",
          description:
            "کدنویسی تمیز، مستندات کاربردی و تحویل اصولی باعث می‌شود توسعه و ارتقای محصول شما پس از انتشار نیز به‌سادگی ادامه یابد.",
        },
      ],
    },
    homeProcess: {
      eyebrow: "روش اجرای پروژه",
      title: "مسیری روشن از ایده اولیه تا استقرار نهایی",
      subtitle:
        "تمامی پروژه‌ها بر پایه یک چارچوب هفت‌مرحله‌ای پیش می‌روند تا ابهام‌ها برطرف شده و پیشرفت کار در هر گام قابل مشاهده باشد.",
      exploreFullProcess: "آشنایی کامل با فرآیند توسعه",
    },
    ctaBanner: {
      eyebrow: "آماده ساخت محصول جدید هستید؟",
      title: "چشم‌انداز فنی خود را به نرم‌افزاری پایدار تبدیل کنید.",
      description:
        "درباره محصولی که قصد ساخت آن را دارید، چالشی که می‌خواهید حل کنید یا سامانه‌ای که نیاز به بازطراحی دارد برای ما بنویسید. نیازمندی‌های شما را با دقت بررسی کرده و مسیر پیشنهادی را ارائه می‌کنیم.",
      primaryButton: "شروع پروژه",
      secondaryButton: "مشاهده سوالات متداول",
    },
    servicesPage: {
      eyebrow: "خدمات و توانمندی‌ها",
      title: "مهندسی جامع نرم‌افزار و راهکارهای هوش مصنوعی",
      subtitle:
        "از طراحی وب‌سایت‌های حرفه‌ای و وب‌اپلیکیشن‌های اختصاصی تا توسعه دستیارهای هوشمند، ربات‌های تلگرام و نگهداری مستمر سامانه‌های نرم‌افزاری.",
      capabilityNote:
        "محدوده هر پروژه بر اساس خروجی‌های فنی مشخص و قابل ارزیابی تعریف می‌شود. اهداف خود را با ما مطرح کنید تا بهترین معماری و راهکار متناسب با نیازتان پیشنهاد شود.",
      quickJumpLabel: "دسترسی سریع به خدمات",
      includesHeading: "شامل چه مواردی است؟",
      problemsHeading: "چه چالش‌هایی را حل می‌کند؟",
      suitableHeading: "مناسب چه کسب‌وکارهایی است؟",
      deliverablesHeading: "خروجی‌های قابل تحویل",
      requestEstimate: "درخواست مشاوره و برآورد پروژه",
    },
    projectsPage: {
      eyebrow: "پورتفولیو و معماری‌های نمونه",
      title: "سامانه‌های نرم‌افزاری و پروژه‌های نمایشی فنی",
      subtitle:
        "آشنایی دقیق با شیوه طراحی معماری، پیاده‌سازی وب‌اپلیکیشن‌ها، جریان‌های کاری هوش مصنوعی و اتوماسیون در استودیو گازانووا.",
      transparencyBannerTitle: "شفافیت درباره پروژه‌های این بخش",
      transparencyBannerBody:
        "تمامی موارد ارائه‌شده در این صفحه، پروژه‌های نمایشی (Demo) و معماری‌های مرجع داخلی گازانووا هستند که برای نشان دادن استانداردهای فنی و طراحی ما پیاده‌سازی شده‌اند. ما هرگز مشتری خیالی، آمار ساختگی یا ادعای غیرواقعی منتشر نمی‌کنیم.",
      filterAll: "همه دسته‌ها",
      demoBadge: "پروژه نمایشی · معماری مرجع",
      viewDetails: "مشاهده کالبدشکافی فنی",
      techStackLabel: "فناوری‌های به‌کاررفته",
      problemHeading: "مسئله و چالش هدف",
      solutionHeading: "راهکار مهندسی پیاده‌سازی‌شده",
      architectureHeading: "ویژگی‌های معماری و کنترل کیفیت",
      featuresHeading: "قابلیت‌های کلیدی سامانه",
      backToProjects: "بازگشت به فهرست پروژه‌ها",
      startSimilarProject: "سفارش پروژه‌ای مشابه برای کسب‌وکار شما",
      statusLabel: "وضعیت پروژه",
    },
    aboutPage: {
      eyebrow: "درباره گازانووا",
      title: "استودیویی پیشرو با تمرکز بر مهندسی دقیق و قابل اعتماد.",
      subtitle:
        "گازانووا (GAZANOVA) یک استودیو مهندسی نرم‌افزار و توسعه محصولات دیجیتال است که با هدف تبدیل ایده‌های پیچیده به نرم‌افزارهای سودمند، پایدار و خوش‌ساخت فعالیت می‌کند.",
      missionHeading: "مأموریت ما",
      missionBody:
        "کمک به بنیان‌گذاران، سازمان‌ها و تیم‌های در حال رشد برای تبدیل ایده‌های ارزشمند به نرم‌افزارهای قابل اتکا و کاربرمحور؛ بدون فرآیندهای مبهم، میان‌برهای شکننده یا پیچیدگی‌های غیرضروری.",
      visionHeading: "چشم‌انداز ما",
      visionBody:
        "ساختن یک برند فناوری معتبر در تراز بین‌المللی که به واسطه صداقت مهندسی، کیفیت تجربه کاربری و کاربرد عملی و مسئولانه هوش مصنوعی شناخته شود.",
      engineeringHeading: "رویکرد ما در مهندسی نرم‌افزار",
      engineeringIntro:
        "نرم‌افزار خوب در ظاهر ساده و روان به نظر می‌رسد، زیرا در زیرساخت خود از نظم مهندسی پیروی می‌کند. چهار اصل زیر پایه تمام پروژه‌های ماست:",
      engineeringPrinciples: [
        {
          title: "اولویت کاربردپذیری و دسترس‌پذیری",
          body: "رابط کاربری باید به زمان و تمرکز کاربر احترام بگذارد؛ سریع بارگذاری شود، در هر اندازه صفحه‌نمایش بی‌نقص کار کند، با صفحه‌کلید قابل هدایت باشد و چیدمان زبان را طبیعی رعایت کند.",
        },
        {
          title: "امنیت در طراحی و کمینه‌سازی داده",
          body: "اعتبارسنجی دقیق در سمت کاربر و سرور، حفاظت کامل از کلیدهای امنیتی در بک‌اند، پرهیز از جمع‌آوری اطلاعات غیرضروری و مدیریت ایمن خطاها در اولویت قرار دارد.",
        },
        {
          title: "کدنویسی تمیز و قابل توسعه",
          body: "تفکیک روشن ماژول‌ها، تایپ‌سیفتی قوی، انتخاب منطقی وابستگی‌ها و مستندسازی روشن تضمین می‌کند که توسعه آتی محصول بدون بدهی فنی سنگین پیش برود.",
        },
        {
          title: "بهره‌گیری عمل‌گرایانه از هوش مصنوعی",
          body: "در پیاده‌سازی مدل‌های هوش مصنوعی و ربات‌ها، تمرکز ما بر دقت عملکرد، مهار خطاها، بهینه‌سازی هزینه و حل واقعی مسئله است، نه هیجانات تبلیغاتی.",
        },
      ],
      valuesHeading: "ارزش‌های بنیادین",
      values: [
        {
          title: "نوآوری",
          body: "بهره‌گیری هوشمندانه از معماری‌های مدرن و ابزارهای هوش مصنوعی برای ارتقای واقعی توانمندی محصول.",
        },
        {
          title: "کیفیت",
          body: "دقت در جزئیات بصری، حالت‌های تعاملی، مدیریت شرایط خاص و انسجام ساختار کد.",
        },
        {
          title: "قابلیت اتکا",
          body: "توسعه سامانه‌هایی که در کارکرد روزمره باثبات، ایمن و قابل اعتماد باقی بمانند.",
        },
        {
          title: "شفافیت",
          body: "گفتگوی صریح و صادقانه درباره محدوده کار، محدودیت‌های فنی، روند پیشرفت و انتظارات واقع‌بینانه.",
        },
        {
          title: "تجربه کاربری عالی",
          body: "طراحی جریان‌های کاری روشن و دلپذیر که پیچیدگی را برای کاربران نهایی و مدیران سیستم کاهش دهد.",
        },
        {
          title: "همکاری بلندمدت",
          body: "نگاه به نرم‌افزار به‌عنوان یک دارایی زنده که نیازمند برنامه‌ریزی درست، تحویل تمیز و پشتیبانی مستمر است.",
        },
      ],
      collaborationHeading: "فلسفه همکاری ما",
      collaborationBody:
        "چه با یک سند فنی کامل سراغ ما بیایید و چه با یک چالش کسب‌وکاری در ابتدای مسیر، ما به‌عنوان شریک مهندسی در کنار شما قرار می‌گیریم. پرسش‌های کلیدی را در ابتدای کار شفاف می‌کنیم، مراحل تحویل را مکتوب می‌سازیم و پیشرفت کار را گام‌به‌گام به اشتراک می‌گذاریم.",
      collaborationPoints: [
        "هم‌راستاسازی مکتوب نیازمندی‌ها و محدوده پروژه پیش از شروع کدنویسی",
        "ارائه نسخه‌های قابل بررسی در نقاط عطف (Milestones) مشخص",
        "امکان ارتباط روان و مستقیم به زبان فارسی یا انگلیسی در همکاری‌های از راه دور",
        "تحویل منظم سورس‌کد، راهنمای تنظیمات محیطی و امکان پشتیبانی پس از انتشار",
      ],
    },
    processPage: {
      eyebrow: "فرآیند مهندسی و اجرا",
      title: "اجرای منظم و مرحله‌به‌مرحله از شناخت تا پشتیبانی",
      subtitle:
        "تعریف روشن گام‌ها، مستندسازی تصمیمات و بررسی پیوسته کیفیت، ریسک پروژه‌های نرم‌افزاری را به حداقل می‌رساند.",
      steps: [
        {
          stepNumber: "۰۱",
          title: "شناخت و تحلیل نیازمندی‌ها",
          summary:
            "اهداف کسب‌وکار، کاربران هدف، گلوگاه‌های عملیاتی و الزامات فنی را بررسی می‌کنیم تا دقیقاً مشخص شود چه چیزی باید ساخته شود.",
          activities: [
            "بررسی اهداف کلیدی پروژه و مسئله اصلی کسب‌وکار",
            "ترسیم مسیر حرکت کاربران و استخراج نیازمندی‌های عملکردی",
            "ارزیابی امکان‌سنجی فنی، یکپارچه‌سازی‌ها و ریسک‌های احتمالی",
          ],
          keyOutputs: "خلاصه نیازمندی‌ها و جمع‌بندی امکان‌سنجی فنی",
        },
        {
          stepNumber: "۰۲",
          title: "برنامه‌ریزی و طراحی معماری پروژه",
          summary:
            "اهداف تاییدشده را به معماری فنی، انتخاب پشته فناوری، تفکیک فازها و برنامه زمان‌بندی واقع‌بینانه تبدیل می‌کنیم.",
          activities: [
            "طراحی معماری کلان سیستم و ساختار داده‌ها",
            "تعیین شفاف محدوده فاز اول و مرز قابلیت‌ها",
            "تدوین نقاط تحویل مرحله‌ای (Milestones) و ریتم گزارش‌دهی",
          ],
          keyOutputs: "پروپوزال فنی، شرح خدمات دقیق و برنامه زمان‌بندی مراحل",
        },
        {
          stepNumber: "۰۳",
          title: "طراحی تجربه و رابط کاربری (UX/UI)",
          summary:
            "سلسله‌مراتب اطلاعات، مسیرهای کاربری، چیدمان واکنش‌گرا و وضعیت‌های تعاملی را پیش از پیاده‌سازی نهایی طراحی می‌کنیم.",
          activities: [
            "طراحی وایرفریم صفحات کلیدی و حالات خطا یا بارگذاری",
            "تعریف سیستم طراحی، تایپوگرافی و ساختار راست‌به‌چپ / چپ‌به‌راست",
            "بازبینی دسترس‌پذیری و سهولت استفاده در موبایل و دسکتاپ",
          ],
          keyOutputs: "سیستم طراحی رابط کاربری و مشخصات صفحات",
        },
        {
          stepNumber: "۰۴",
          title: "توسعه و کدنویسی",
          summary:
            "پیاده‌سازی تمیز و ماژولار فرانت‌اند، APIهای بک‌اند، پایگاه داده یا جریان‌های هوش مصنوعی همراه با نسخه‌های پیش‌نمایش مرحله‌ای.",
          activities: [
            "کدنویسی تایپ‌امن در لایه رابط کاربری و سرور",
            "پیاده‌سازی وب‌سرویس‌ها، کنترل دسترسی و استانداردهای امنیتی",
            "ارائه گزارش‌های منظم پیشرفت و دسترسی به محیط تست",
          ],
          keyOutputs: "سورس‌کد استاندارد و نسخه‌های قابل تست مرحله‌ای",
        },
        {
          stepNumber: "۰۵",
          title: "تست و تضمین کیفیت (QA)",
          summary:
            "آزمایش هدفمند عملکرد سامانه در دستگاه‌های مختلف، سناریوهای اعتبارسنجی، مدیریت خطا، امنیت و سرعت بارگذاری.",
          activities: [
            "بررسی صحت عملکرد فرم‌ها، جریان‌های داده و شرایط مرزی",
            "تست واکنش‌گرایی در موبایل، تبلت و دسکتاپ و ناوبری صفحه‌کلید",
            "کنترل هدرهای امنیتی، پالایش ورودی‌ها و پایداری در خطا",
          ],
          keyOutputs: "نسخه آماده انتشار و چک‌لیست تایید کیفیت",
        },
        {
          stepNumber: "۰۶",
          title: "استقرار و راه‌اندازی (Deployment)",
          summary:
            "انتشار کنترل‌شده روی سرور عملیاتی به همراه تنظیم متغیرهای محیطی، گواهی امنیتی HTTPS، تنظیمات سئو و بررسی سلامت سرویس.",
          activities: [
            "ساخت نسخه پروداکشن، پیکربندی متغیرهای امنیتی و دامنه/SSL",
            "بررسی اتصال سرویس‌های ایمیل، API و پایش سلامت سامانه",
            "تحویل مستندات فنی و راهنمای بهره‌برداری",
          ],
          keyOutputs: "سامانه فعال در محیط عملیاتی و مستندات استقرار",
        },
        {
          stepNumber: "۰۷",
          title: "نگهداری، پایش و ارتقای مستمر",
          summary:
            "همراهی پس از راه‌اندازی برای به‌روزرسانی وابستگی‌ها، رفع مسائل احتمالی، بهبود کارایی و افزودن قابلیت‌های جدید همگام با رشد کسب‌وکار.",
          activities: [
            "به‌روزرسانی‌های امنیتی و کتابخانه‌های زیرساختی",
            "بهینه‌سازی سرعت و تجربه کاربری بر اساس بازخورد واقعی",
            "طراحی و توسعه فازهای توسعه‌ای جدید",
          ],
          keyOutputs: "به‌روزرسانی‌های پایداری و توسعه مرحله‌ای قابلیت‌ها",
        },
      ],
      governanceHeading: "نحوه مدیریت ارتباطات، محدوده کار و نقاط تحویل",
      governanceSubtitle:
        "موفقیت پروژه‌های نرم‌افزاری نتیجه توافق‌های شفاف و مدیریت دقیق در طول اجرای کار است.",
      governancePillars: [
        {
          title: "ارتباطات منظم و مکتوب",
          description:
            "در بازه‌های توافق‌شده، گزارش‌های روشنی شامل کارهای انجام‌شده، گام‌های پیش رو و تصمیمات مورد نیاز ارائه می‌شود تا هیچ ابهامی باقی نماند.",
        },
        {
          title: "مدیریت شفاف محدوده پروژه (Scope)",
          description:
            "هر پروژه با یک محدوده مشخص آغاز می‌شود. اگر در میانه کار نیاز یا ایده جدیدی مطرح شود، تاثیر زمانی و فنی آن شفاف بررسی شده و با توافق طرفین برنامه‌ریزی می‌گردد.",
        },
        {
          title: "تحویل‌های مرحله‌ای قابل لمس",
          description:
            "پیشرفت پروژه نه با درصدهای کلی و مبهم، بلکه با نسخه‌های قابل مشاهده، رابط‌های کاربری فعال و خروجی‌های مشخص سنجیده می‌شود.",
        },
        {
          title: "مستندسازی و شفافیت مالکیت فنی",
          description:
            "ساختار کدها، نیازمندی‌های سرور و مراحل راه‌اندازی به‌روشنی مستند می‌شوند تا تیم شما تسلط و استقلال کامل روی دارایی دیجیتال خود داشته باشد.",
        },
      ],
    },
    faqPage: {
      eyebrow: "سوالات متداول",
      title: "پاسخ به پرسش‌های کلیدی پیش از شروع همکاری",
      subtitle:
        "توضیحات شفاف درباره نحوه تعریف پروژه، برآورد هزینه و زمان، اعمال تغییرات، حفظ محرمانگی و همکاری از راه دور.",
      items: [
        {
          question: "فرآیند شروع یک پروژه جدید با گازانووا چگونه است؟",
          answer:
            "کافی است از طریق فرم ثبت درخواست پروژه، شرح اولیه‌ای از هدف کسب‌وکار، نوع محصول و الزامات مدنظر خود را ارسال کنید. ما درخواست شما را دقیق بررسی کرده، برای تکمیل جزئیات با شما مکاتبه یا گفتگو می‌کنیم و سپس پیشنهاد فنی و اجرایی ساختارمند ارائه می‌دهیم.",
        },
        {
          question: "آیا قبل از تماس باید مستندات فنی کامل داشته باشم؟",
          answer:
            "خیر. داشتن مستندات یا طرح اولیه بسیار مفید است، اما بسیاری از پروژه‌ها با بیان یک نیاز کسب‌وکاری یا ایده محصول آغاز می‌شوند. در مرحله شناخت (Discovery)، ما به تبدیل اهداف شما به نیازمندی‌های دقیق فنی و عملکردی کمک می‌کنیم.",
        },
        {
          question: "زمان‌بندی اجرای پروژه بر چه اساسی برآورد می‌شود؟",
          answer:
            "مدت زمان اجرا به پیچیدگی قابلیت‌ها، اتصال به سرویس‌های بیرونی، نیاز به چندزبانه بودن یا چند پلتفرم و چرخه‌های بازبینی بستگی دارد. ما به‌جای اعلام زمان‌های غیرواقعی پیش از بررسی، پس از شفاف شدن محدوده کار یک برنامه مرحله‌ای واقع‌بینانه ارائه می‌کنیم.",
        },
        {
          question: "نحوه قیمت‌گذاری و برآورد بودجه پروژه چگونه است؟",
          answer:
            "هزینه هر پروژه به‌صورت اختصاصی و بر مبنای محدوده دقیق قابلیت‌ها و خروجی‌های توافق‌شده محاسبه می‌شود. اعلام بازه تقریبی بودجه در فرم درخواست به ما کمک می‌کند مناسب‌ترین معماری را پیشنهاد دهیم؛ برای مثال شروع با یک نسخه اولیه متمرکز (MVP) یا طراحی یک سامانه جامع چندبخشی.",
        },
        {
          question: "فرآیند بازبینی و اعمال اصلاحات در طول پروژه چطور انجام می‌شود؟",
          answer:
            "در پایان هر مرحله، خروجی کار جهت بررسی در اختیار شما قرار می‌گیرد. اصلاحات هم‌راستا با محدوده توافق‌شده در همان مرحله اعمال می‌شوند و چنانچه قابلیت کاملاً جدیدی خارج از توافق اولیه مدنظر باشد، پیش از اجرا به‌طور شفاف برآورد و زمان‌بندی خواهد شد.",
        },
        {
          question: "آیا پس از راه‌اندازی نرم‌افزار، خدمات پشتیبانی و نگهداری ارائه می‌دهید؟",
          answer:
            "بله. نرم‌افزارهای حرفه‌ای برای حفظ امنیت و کارایی نیازمند به‌روزرسانی وابستگی‌ها، پایش سلامت و بهبودهای تدریجی هستند. امکان تعریف برنامه نگهداری دوره‌ای یا فازهای توسعه‌ای جدید پس از تحویل نهایی فراهم است.",
        },
        {
          question: "از چه فناوری‌ها و زبان‌های برنامه‌نویسی استفاده می‌کنید؟",
          answer:
            "ما بر اساس ماهیت هر پروژه از فناوری‌های مدرن، امتحان‌پس‌داده و قابل نگهداری استفاده می‌کنیم؛ از جمله TypeScript، React، Next.js، Node.js، سرویس‌های Python، پایگاه‌های داده رابطه‌ای مانند PostgreSQL، چارچوب‌های استاندارد موبایل، API تلگرام و زیرساخت‌های هوش مصنوعی.",
        },
        {
          question: "محرمانگی اطلاعات و مالکیت فکری ایده چطور حفظ می‌شود؟",
          answer:
            "تمامی اطلاعات ارسالی شما کاملاً محرمانه تلقی می‌شوند. همچنین در صورت تمایل شما، پیش از تبادل اسناد حساس یا کدهای اختصاصی، تفاهم‌نامه عدم افشای اطلاعات (NDA) امضا خواهد شد.",
        },
        {
          question: "همکاری از راه دور (Remote) به چه شکل مدیریت می‌شود؟",
          answer:
            "ساختار کاری گازانووا از ابتدا بر پایه همکاری منظم از راه دور به هر دو زبان فارسی و انگلیسی شکل گرفته است. گزارش‌های مکتوب دوره‌ای، لینک پیش‌نمایش آنلاین مراحل توسعه و جلسات هماهنگی آنلاین باعث می‌شود در هر موقعیت جغرافیایی در جریان دقیق پروژه باشید.",
        },
      ],
      stillHaveQuestions: "پرسش فنی دیگری در ذهن دارید؟",
      contactPrompt: "جزئیات مدنظر خود را از طریق فرم زیر ارسال کنید تا با دقت پاسخگوی شما باشیم.",
    },
    contactPage: {
      eyebrow: "شروع همکاری",
      title: "درباره پروژه‌ای که می‌خواهید بسازید برای ما بنویسید.",
      subtitle:
        "اهداف، چالش‌های فنی یا ایده محصول خود را مطرح کنید. تمامی درخواست‌ها با دقت بررسی شده و گام‌های عملی بعدی با شما در میان گذاشته می‌شود.",
      nextStepsTitle: "گام‌های بعدی پس از ثبت فرم",
      nextSteps: [
        {
          step: "۰۱",
          title: "بررسی اولیه فنی",
          detail:
            "شرح پروژه شما را مطالعه کرده و تناسب فنی، الزامات کلیدی و پرسش‌های معماری را مشخص می‌کنیم.",
        },
        {
          step: "۰۲",
          title: "شفاف‌سازی نیازمندی‌ها",
          detail:
            "از طریق ایمیل با شما ارتباط می‌گیریم تا جزئیات عملکردی، اولویت‌ها و یکپارچه‌سازی‌های لازم روشن شود.",
        },
        {
          step: "۰۳",
          title: "ارائه پیشنهاد ساختارمند",
          detail:
            "پس از جمع‌بندی محدوده کار، معماری پیشنهادی، خروجی‌های قابل تحویل و مراحل اجرا به‌صورت شفاف ارائه می‌گردد.",
        },
      ],
      verifiedContactTitle: "کانال‌های ارتباطی تاییدشده",
      directFormNote:
        "برای ارسال ساختارمند اطلاعات پروژه، از فرم ایمن همین صفحه استفاده کنید تا جزئیات مستقیماً به صندوق کاری تیم فنی ارسال شود.",
      privacyTitle: "حریم خصوصی و نحوه حفاظت از اطلاعات",
      privacyBody:
        "ما تنها اطلاعاتی را که خودتان در این فرم وارد می‌کنید، صرفاً با هدف بررسی درخواست و مکاتبه درباره پروژه مدنظر دریافت می‌کنیم. پیام شما به شکل ایمن از طریق سرور به ایمیل کاری پیکربندی‌شده ارسال می‌شود و هرگز در اختیار اشخاص ثالث یا اهداف تبلیغاتی قرار نمی‌گیرد.",
      form: {
        fullNameLabel: "نام و نام خانوادگی",
        fullNamePlaceholder: "مثال: آرش رادمان",
        emailLabel: "نشانی ایمیل",
        emailPlaceholder: "you@company.com",
        companyLabel: "نام شرکت یا مجموعه",
        companyPlaceholder: "نام شرکت، استارتاپ یا تیم",
        projectTypeLabel: "نوع پروژه",
        projectTypePlaceholder: "یک دسته‌بندی را انتخاب کنید",
        projectTypes: {
          website: "وب‌سایت حرفه‌ای",
          "web-application": "وب‌اپلیکیشن اختصاصی",
          "mobile-application": "اپلیکیشن موبایل",
          "ai-solution": "راهکار هوش مصنوعی",
          "telegram-bot": "ربات تلگرام و اتوماسیون",
          "custom-software": "نرم‌افزار سفارشی و API",
          "game-development": "بازی‌سازی",
          "ui-ux-design": "طراحی رابط و تجربه کاربری (UI/UX)",
          other: "سایر موارد",
        },
        budgetLabel: "محدوده بودجه پیش‌بینی‌شده",
        budgetPlaceholder: "اختیاری — در صورت مشخص بودن انتخاب کنید",
        budgetOptions: [
          { value: "undecided", label: "هنوز مشخص نیست / نیاز به مشاوره تعیین محدوده" },
          { value: "mvp-small", label: "نسخه اولیه متمرکز (MVP) یا پروژه تک‌منظوره" },
          { value: "mid-scale", label: "محصول میان‌رده یا پلتفرم اختصاصی" },
          { value: "enterprise-longterm", label: "سامانه جامع / همکاری فنی بلندمدت" },
        ],
        timelineLabel: "زمان‌بندی مدنظر",
        timelinePlaceholder: "اختیاری — بازه زمانی مطلوب",
        timelineOptions: [
          { value: "flexible", label: "منعطف / اولویت با کیفیت اجرا" },
          { value: "1-2-months", label: "طی ۱ تا ۲ ماه آینده" },
          { value: "2-4-months", label: "۲ تا ۴ ماه" },
          { value: "4-plus-months", label: "بیش از ۴ ماه / اجرای چندفازی" },
        ],
        descriptionLabel: "شرح پروژه و اهداف",
        descriptionPlaceholder:
          "توضیح دهید چه محصولی می‌خواهید بسازید، چه مسئله‌ای را حل می‌کند، کاربران هدف چه کسانی هستند و چه قابلیت‌هایی اولویت دارند...",
        additionalLabel: "توضیحات تکمیلی",
        additionalPlaceholder:
          "اختیاری — فناوری‌های مدنظر، نیاز به دوزبانه بودن، سیستم‌های فعلی، لینک‌های مرتبط یا نیاز به تفاهم‌نامه محرمانگی (NDA)...",
        requiredBadge: "الزامی",
        optionalBadge: "اختیاری",
        privacyConsentNote:
          "با ثبت این فرم تایید می‌کنید اطلاعات واردشده صحیح است و با ارتباط گازانووا جهت بررسی این درخواست پروژه موافق هستید.",
        submitButton: "ارسال درخواست پروژه",
        submittingButton: "در حال ارسال درخواست...",
        successTitle: "درخواست شما با موفقیت ثبت و ارسال شد",
        successMessage:
          "از ارتباط شما با گازانووا سپاسگزاریم. جزئیات پروژه شما به تیم ما تحویل داده شد و پس از بررسی فنی، از طریق نشانی ایمیل واردشده با شما مکاتبه خواهیم کرد.",
        sendAnotherButton: "ثبت یک درخواست دیگر",
        errors: {
          fullNameRequired: "لطفاً نام و نام خانوادگی خود را وارد کنید.",
          fullNameLength: "نام واردشده باید بین ۲ تا ۱۰۰ کاراکتر باشد.",
          emailRequired: "لطفاً نشانی ایمیل خود را وارد کنید.",
          emailInvalid: "لطفاً یک نشانی ایمیل معتبر وارد کنید (مانند name@domain.com).",
          projectTypeRequired: "لطفاً نوع پروژه را انتخاب کنید.",
          descriptionRequired: "لطفاً شرحی از اهداف و نیازمندی‌های پروژه بنویسید.",
          descriptionMinLength: "لطفاً دست‌کم ۲۵ کاراکتر درباره جزئیات پروژه بنویسید تا بررسی دقیق ممکن باشد.",
          descriptionMaxLength: "شرح پروژه نباید بیش از ۴۰۰۰ کاراکتر باشد.",
          fieldTooLong: "طول متن واردشده در این بخش بیش از حد مجاز است.",
          duplicateSubmission:
            "این درخواست دقیقاً چند لحظه پیش ثبت شده است. نیازی به ارسال مجدد نیست.",
          rateLimited:
            "تعداد درخواست‌های ارسالی در بازه کوتاه بیش از حد مجاز بوده است. لطفاً چند دقیقه دیگر دوباره تلاش کنید.",
          providerUnavailable:
            "سرویس ارسال ایمیل سرور در حال حاضر پیکربندی نشده یا موقتاً در دسترس نیست؛ بنابراین پیام شما هنوز ارسال نشد. لطفاً بعداً تلاش کنید.",
          networkError:
            "برقراری ارتباط با سرور ممکن نشد. لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید.",
          validationFailed: "لطفاً موارد مشخص‌شده در فرم را بررسی و اصلاح نمایید.",
        },
      },
    },
    footer: {
      tagline: "نسل بعدی را بسازید.",
      description:
        "استودیو مهندسی نرم‌افزار و هوش مصنوعی؛ تبدیل ایده‌های پیچیده به محصولات دیجیتال قابل اعتماد، مدرن و ماندگار.",
      navigationHeading: "بخش‌های سایت",
      capabilitiesHeading: "خدمات منتخب",
      inquiriesHeading: "گفتگو درباره پروژه",
      inquiriesText:
        "ایده نرم‌افزاری یا هوش مصنوعی خود را از طریق فرم درخواست پروژه ارسال کنید تا به‌صورت ساختارمند بررسی شود.",
      startConversation: "شروع پروژه",
      copyright: `© ${new Date().getFullYear()} GAZANOVA (گازانووا). تمامی حقوق محفوظ است.`,
      honestyNote: "طراحی و مهندسی بر پایه شفافیت، امنیت و دسترس‌پذیری دوزبانه.",
    },
    notFound: {
      code: "۴۰۴",
      title: "صفحه مورد نظر یافت نشد",
      description:
        "نشانی واردشده وجود ندارد یا جابه‌جا شده است. از طریق دکمه زیر می‌توانید به صفحه اصلی گازانووا بازگردید.",
      backHome: "بازگشت به صفحه اصلی",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
