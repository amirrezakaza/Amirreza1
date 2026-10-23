import type { Locale } from "@/i18n/config";
import type { ProjectTypeKey } from "@/i18n/dictionaries";

export type ProjectCategoryKey =
  | "ai"
  | "web-app"
  | "automation"
  | "mobile"
  | "api-systems"
  | "interactive";

export interface ProjectCategoryOption {
  key: ProjectCategoryKey;
  label: Record<Locale, string>;
}

export const PROJECT_CATEGORIES: ProjectCategoryOption[] = [
  {
    key: "ai",
    label: {
      en: "AI & Assistants",
      fa: "هوش مصنوعی و دستیارها",
    },
  },
  {
    key: "web-app",
    label: {
      en: "Web Applications",
      fa: "وب‌اپلیکیشن‌ها",
    },
  },
  {
    key: "automation",
    label: {
      en: "Telegram & Automation",
      fa: "تلگرام و اتوماسیون",
    },
  },
  {
    key: "mobile",
    label: {
      en: "Mobile Apps",
      fa: "اپلیکیشن موبایل",
    },
  },
  {
    key: "api-systems",
    label: {
      en: "APIs & Backend",
      fa: "API و سیستم‌های بک‌اند",
    },
  },
  {
    key: "interactive",
    label: {
      en: "Games & Interactive",
      fa: "بازی و تعاملی",
    },
  },
];

export interface ProjectLocaleContent {
  title: string;
  categoryName: string;
  statusText: string;
  shortDescription: string;
  overview: string;
  problemSolved: string;
  implementedSolution: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  diagramAlt: string;
  diagramNodes: [string, string, string, string];
}

export interface ProjectItem {
  slug: string;
  category: ProjectCategoryKey;
  inquiryType: ProjectTypeKey;
  isDemo: true; // Explicitly typed & labeled as studio demonstration until verified client case studies are added
  featuredOnHome: boolean;
  visualVariant: "rag" | "portal" | "bot" | "mobile" | "gateway" | "simulation";
  techStack: string[];
  demoUrl?: string;
  sourceUrl?: string;
  content: Record<Locale, ProjectLocaleContent>;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "aetherdocs-bilingual-knowledge-assistant",
    category: "ai",
    inquiryType: "ai-solution",
    isDemo: true,
    featuredOnHome: true,
    visualVariant: "rag",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "Server-Side LLM API"],
    content: {
      en: {
        title: "AetherDocs — Grounded Bilingual Knowledge Assistant",
        categoryName: "Artificial Intelligence & RAG Architecture",
        statusText: "Internal Studio Demo · Reference Architecture",
        shortDescription:
          "A demonstration architecture for enterprise document retrieval and source-cited question answering across English and Persian technical manuals.",
        overview:
          "AetherDocs is an internal GAZANOVA reference build demonstrating how organizations can query internal policies, engineering docs, and onboarding manuals without exposing private documents to public training pipelines or tolerating unverified answers.",
        problemSolved:
          "Teams managing hundreds of internal documents waste time searching across folders, while generic ungrounded chatbots frequently invent inaccurate policies without showing where an answer came from.",
        implementedSolution:
          "A server-side retrieval pipeline chunks approved Markdown and PDF documents, indexes semantic embeddings alongside keyword filters, retrieves verified passages per user permission scope, and enforces inline paragraph citations before returning any answer.",
        architectureHighlights: [
          "Strict server-side API proxy keeping model credentials isolated from client bundles",
          "Deterministic fallback response when document confidence falls below threshold",
          "Native bidirectional UI rendering mixed English code identifiers and Persian prose cleanly",
          "Schema-validated response payloads with structured citation references",
        ],
        keyFeatures: [
          "Document ingestion & namespace isolation",
          "Source-cited answers with direct passage preview",
          "Bilingual query understanding (English & Persian)",
          "Role-scoped access rules & rate-limited endpoints",
        ],
        diagramAlt:
          "Architecture diagram of AetherDocs showing document ingestion, vector retrieval, guardrail validation, and cited bilingual UI output.",
        diagramNodes: [
          "Document Chunker",
          "Hybrid Vector Index",
          "Citation Guardrail",
          "Bilingual Workspace",
        ],
      },
      fa: {
        title: "AetherDocs — دستیار هوشمند دوزبانه مبتنی بر مستندات",
        categoryName: "هوش مصنوعی و معماری بازیابی دانش (RAG)",
        statusText: "پروژه نمایشی داخلی استودیو · معماری مرجع",
        shortDescription:
          "معماری نمونه برای جستجوی معنایی مستندات سازمانی و پاسخگویی مستند به همراه ارجاع دقیق به منبع در متون فارسی و انگلیسی.",
        overview:
          "AetherDocs یک معماری مرجع طراحی‌شده در استودیو گازانووا است که نشان می‌دهد سازمان‌ها چگونه می‌توانند روی آیین‌نامه‌ها، مستندات فنی و راهنماهای داخلی خود پرسش‌وپاسخ هوشمند راه‌اندازی کنند، بدون آنکه پاسخ‌های بدون منبع و غیرمعتبر دریافت کنند.",
        problemSolved:
          "جستجوی دستی در میان صدها فایل و مستند داخلی زمان‌بر است و از سوی دیگر، چت‌بات‌های عمومی بدون اتصال به منابع معتبر ممکن است پاسخ‌های نادرست و بدون ارجاع تولید کنند.",
        implementedSolution:
          "یک پایپ‌لاین سمت سرور متون تاییدشده را قطعه‌بندی و نمایه‌سازی می‌کند، بخش‌های مرتبط را بر اساس سطح دسترسی کاربر بازیابی می‌نماید و مدل زبانی را ملزم می‌کند صرفاً بر پایه بندهای مستند و همراه با ذکر منبع پاسخ دهد.",
        architectureHighlights: [
          "نگهداری کامل کلیدهای ارتباط با مدل هوش مصنوعی در سمت سرور",
          "اعلام شفاف «عدم وجود اطلاعات کافی در منابع» در صورت نبود مستند معتبر",
          "نمایش استاندارد متون ترکیبی فارسی و اصطلاحات فنی انگلیسی در رابط کاربری",
          "اعتبارسنجی ساختار خروجی و محدودسازی نرخ درخواست‌ها",
        ],
        keyFeatures: [
          "بارگذاری و تفکیک موضوعی مستندات",
          "پاسخگویی همراه با نمایش بند مرجع",
          "درک پرسش‌ها به هر دو زبان فارسی و انگلیسی",
          "کنترل سطح دسترسی و حفاظت در برابر مصرف بی‌رویه",
        ],
        diagramAlt:
          "نمودار معماری سامانه AetherDocs شامل پردازش اسناد، نمایه‌سازی برداری، لایه کنترل منبع و رابط کاربری دوزبانه.",
        diagramNodes: [
          "پردازشگر اسناد",
          "جستجوی ترکیبی",
          "کنترل استناد منبع",
          "پنل کاربری دوزبانه",
        ],
      },
    },
  },
  {
    slug: "pulseflow-operations-web-platform",
    category: "web-app",
    inquiryType: "web-application",
    isDemo: true,
    featuredOnHome: true,
    visualVariant: "portal",
    techStack: ["Next.js App Router", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL"],
    content: {
      en: {
        title: "PulseFlow — Modular B2B Request & Milestone Portal",
        categoryName: "Custom Full-Stack Web Application",
        statusText: "Internal Studio Demo · Reference Architecture",
        shortDescription:
          "A reference web platform architecture for structured service requests, milestone approvals, audit logs, and role-based team collaboration.",
        overview:
          "PulseFlow illustrates how GAZANOVA structures custom business web applications that replace scattered email threads and fragile spreadsheets with a calm, structured operational workspace.",
        problemSolved:
          "Growing service and operations teams often lose track of request statuses, approval sign-offs, and deliverable revisions across disconnected chat channels and spreadsheets.",
        implementedSolution:
          "A typed full-stack web application built around a normalized PostgreSQL schema, explicit state transitions for every request lifecycle stage, accessible keyboard-friendly tables, and server-enforced role permissions.",
        architectureHighlights: [
          "End-to-end TypeScript safety from Drizzle PostgreSQL schemas to React server & client components",
          "Explicit state-machine validation preventing invalid status transitions",
          "Logical CSS layout properties enabling instant switch between English LTR and Persian RTL workspaces",
          "Clean separation between presentation components, validation schemas, and database queries",
        ],
        keyFeatures: [
          "Role-scoped workspaces (Requester, Reviewer, Administrator)",
          "Structured milestone checklists & sign-off history",
          "Multi-criteria filtering & accessible status views",
          "Immutable activity timeline for operational clarity",
        ],
        diagramAlt:
          "System diagram of PulseFlow showing authenticated client views, server validation actions, state machine logic, and PostgreSQL persistence.",
        diagramNodes: [
          "Role-Scoped UI",
          "Validated Server API",
          "Workflow State Engine",
          "PostgreSQL Store",
        ],
      },
      fa: {
        title: "PulseFlow — پورتال ماژولار مدیریت درخواست‌ها و مراحل پروژه",
        categoryName: "وب‌اپلیکیشن اختصاصی فول‌استک",
        statusText: "پروژه نمایشی داخلی استودیو · معماری مرجع",
        shortDescription:
          "معماری مرجع وب‌اپلیکیشن سازمانی برای ثبت ساختارمند درخواست‌ها، تایید مراحل تحویل، ثبت تاریخچه عملیات و مدیریت نقش‌ها.",
        overview:
          "PulseFlow نمونه‌ای از استاندارد مهندسی گازانووا در طراحی وب‌اپلیکیشن‌های اختصاصی B2B است که جایگزین پیام‌های پراکنده و فایل‌های اکسل ناهماهنگ می‌شود و یک محیط کاری شفاف ایجاد می‌کند.",
        problemSolved:
          "در بسیاری از تیم‌های خدماتی و عملیاتی، پیگیری وضعیت سفارش‌ها، تاییدیه‌ها و نسخه‌های تحویلی در میان پیام‌رسان‌ها و جداول دستی باعث خطا و ناهماهنگی می‌شود.",
        implementedSolution:
          "طراحی یک وب‌اپلیکیشن تایپ‌امن بر پایه پایگاه داده رابطه‌ای PostgreSQL، ماشین وضعیت دقیق برای کنترل چرخه حیات هر درخواست، جداول دسترس‌پذیر و کنترل سطح دسترسی در سمت سرور.",
        architectureHighlights: [
          "یکپارچگی کامل تایپ‌ها از لایه دیتابیس Drizzle تا کامپوننت‌های رابط کاربری",
          "جلوگیری از تغییر وضعیت‌های غیرمجاز با قوانین اعتبارسنجی سرور",
          "استفاده کامل از ویژگی‌های منطقی CSS برای نمایش یکسان در فارسی و انگلیسی",
          "تفکیک شفاف منطق تجاری، لایه اعتبارسنجی و اجزای نمایشی",
        ],
        keyFeatures: [
          "پنل‌های مجزا بر اساس نقش کاربری (درخواست‌دهنده، بررسی‌کننده، مدیر)",
          "مدیریت مراحل تحویل و ثبت تاییدیه‌ها",
          "جستجو و فیلتر سریع بر اساس وضعیت و اولویت",
          "ثبت تاریخچه دقیق رویدادها جهت شفافیت عملیاتی",
        ],
        diagramAlt:
          "نمودار معماری PulseFlow شامل رابط کاربری مبتنی بر نقش، لایه اعتبارسنجی سرور، موتور وضعیت و پایگاه داده PostgreSQL.",
        diagramNodes: [
          "پنل مبتنی بر نقش",
          "API اعتبارسنجی‌شده",
          "موتور مدیریت وضعیت",
          "پایگاه داده PostgreSQL",
        ],
      },
    },
  },
  {
    slug: "telebridge-automated-intake-bot",
    category: "automation",
    inquiryType: "telegram-bot",
    isDemo: true,
    featuredOnHome: true,
    visualVariant: "bot",
    techStack: ["Node.js", "TypeScript", "Telegram Bot Webhook API", "PostgreSQL", "REST Webhooks"],
    content: {
      en: {
        title: "TeleBridge — Webhook Intake & Support Routing Bot",
        categoryName: "Telegram Bots & Workflow Automation",
        statusText: "Internal Studio Demo · Reference Architecture",
        shortDescription:
          "A resilient Telegram bot architecture handling structured customer intake, spam throttling, ticket IDs, and operator channel routing.",
        overview:
          "TeleBridge demonstrates how GAZANOVA engineers dependable Telegram automation—moving beyond fragile polling scripts to a stateless, webhook-verified backend service.",
        problemSolved:
          "Unstructured messages arriving in Telegram chats lack essential context, get buried during peak hours, and provide no tracking reference for either customers or support staff.",
        implementedSolution:
          "An HTTPS webhook service verifies Telegram secret tokens, guides users through concise inline-button intake steps in English or Persian, assigns a structured reference ID, and dispatches formatted summaries to designated team topics.",
        architectureHighlights: [
          "Cryptographic verification of `X-Telegram-Bot-Api-Secret-Token` on every incoming webhook",
          "Idempotent update-ID deduplication so retried webhooks never create duplicate tickets",
          "Per-user rate limiting and input length sanitization",
          "Graceful timeout handling with operator retry queues",
        ],
        keyFeatures: [
          "Guided multi-step inline keyboard flow",
          "Bilingual user prompts (EN / FA)",
          "Instant structured routing to operator topics",
          "Duplicate webhook & flood protection",
        ],
        diagramAlt:
          "Architecture diagram of TeleBridge showing Telegram webhook verification, deduplication guard, step state router, and operator dispatch.",
        diagramNodes: [
          "Webhook Verifier",
          "Idempotency Guard",
          "Step Flow Router",
          "Operator Dispatch",
        ],
      },
      fa: {
        title: "TeleBridge — ربات هوشمند پذیرش درخواست و مسیردهی پشتیبانی",
        categoryName: "ربات‌های تلگرام و اتوماسیون فرآیند",
        statusText: "پروژه نمایشی داخلی استودیو · معماری مرجع",
        shortDescription:
          "معماری پایدار ربات تلگرام مبتنی بر وب‌هوک برای دریافت گام‌به‌گام درخواست‌ها، مهار اسپم، صدور کد پیگیری و ارجاع به واحد مربوطه.",
        overview:
          "TeleBridge نشان می‌دهد که در گازانووا ربات‌های تلگرامی چگونه به‌عنوان یک سرویس مهندسی استاندارد و مبتنی بر وب‌هوک امن ساخته می‌شوند، نه اسکریپت‌های شکننده و موقتی.",
        problemSolved:
          "پیام‌های پراکنده مشتریان در چت‌های تلگرامی معمولاً اطلاعات ناقصی دارند، در ساعات شلوغ گم می‌شوند و کد پیگیری مشخصی برای مشتری و تیم پشتیبانی ایجاد نمی‌کنند.",
        implementedSolution:
          "سرویس وب‌هوک با تایید توکن امنیتی تلگرام، کاربر را از طریق دکمه‌های شیشه‌ای در چند گام کوتاه (به فارسی یا انگلیسی) هدایت کرده، شناسه یکتا صادر می‌کند و خلاصه ساختارمند را به کانال یا تاپیک تخصصی تیم می‌فرستد.",
        architectureHighlights: [
          "بررسی توکن امنیتی هدر وب‌هوک تلگرام در تمامی درخواست‌های ورودی",
          "جلوگیری از ثبت تکراری پیام‌ها در صورت ارسال مجدد وب‌هوک (Idempotency)",
          "اعمال محدودیت نرخ ارسال پیام و پالایش طول ورودی کاربران",
          "مدیریت ایمن خطاهای شبکه بدون توقف سرویس",
        ],
        keyFeatures: [
          "فرم تعاملی چندمرحله‌ای با کیبورد شیشه‌ای",
          "منوی دوزبانه فارسی و انگلیسی",
          "ارجاع خودکار و دسته‌بندی‌شده به کارشناسان",
          "محافظت در برابر پیام‌های رگباری و تکراری",
        ],
        diagramAlt:
          "نمودار فنی ربات TeleBridge شامل تایید وب‌هوک، حذف پیام‌های تکراری، مسیریاب گام‌ها و ارسال به پنل کارشناسان.",
        diagramNodes: [
          "تایید امنیتی وب‌هوک",
          "کنترل عدم تکرار",
          "مسیریاب گفتگو",
          "ارسال به تیم عملیات",
        ],
      },
    },
  },
  {
    slug: "velofield-offline-inspection-companion",
    category: "mobile",
    inquiryType: "mobile-application",
    isDemo: true,
    featuredOnHome: false,
    visualVariant: "mobile",
    techStack: ["React Native / Expo Architecture", "TypeScript", "Local SQLite Queue", "REST Sync API"],
    content: {
      en: {
        title: "VeloField — Offline-Resilient Field Checklist Companion",
        categoryName: "Mobile Application Architecture",
        statusText: "Internal Studio Demo · Reference Architecture",
        shortDescription:
          "A cross-platform mobile architecture designed for field technicians completing structured checklists under spotty network coverage.",
        overview:
          "VeloField showcases GAZANOVA's approach to practical operational mobile apps where touch ergonomics, local state durability, and predictable conflict resolution matter most.",
        problemSolved:
          "Field inspectors working in basements, warehouses, or remote sites frequently lose form progress when mobile apps assume uninterrupted high-speed connectivity.",
        implementedSolution:
          "A local-first task queue persists checklist entries immediately on device storage, displays clear sync state badges, and reconciles queued mutations idempotently once connectivity returns.",
        architectureHighlights: [
          "Optimistic local persistence with explicit sync-status indicators",
          "Idempotency keys attached to every queued mutation payload",
          "Large touch targets and high-contrast typography suited for field environments",
          "Unified REST API contract shared across mobile and web supervisor views",
        ],
        keyFeatures: [
          "Offline-capable checklist & note capture",
          "Transparent pending/synced queue indicator",
          "Bilingual RTL/LTR mobile screen layouts",
          "Token-secured background synchronization",
        ],
        diagramAlt:
          "Mobile architecture diagram showing touch checklist UI, local SQLite mutation queue, sync coordinator, and cloud REST API.",
        diagramNodes: [
          "Touch Checklist UI",
          "Local Offline Queue",
          "Sync Coordinator",
          "Typed REST Backend",
        ],
      },
      fa: {
        title: "VeloField — اپلیکیشن همراه بازرسی و چک‌لیست میدانی",
        categoryName: "معماری اپلیکیشن موبایل",
        statusText: "پروژه نمایشی داخلی استودیو · معماری مرجع",
        shortDescription:
          "طراحی معماری اپلیکیشن موبایل کراس‌پلتفرم برای ثبت چک‌لیست‌های عملیاتی با پایداری کامل در شرایط قطع یا ضعف اینترنت.",
        overview:
          "VeloField بیانگر رویکرد گازانووا در ساخت اپلیکیشن‌های عملیاتی موبایل است؛ جایی که سادگی کار با یک دست، حفظ اطلاعات روی دستگاه و همگام‌سازی مطمئن با سرور اهمیت حیاتی دارد.",
        problemSolved:
          "تکنسین‌ها و کارشناسان میدانی در انبارها، کارگاه‌ها یا مناطق کم‌پوشش، هنگام استفاده از اپلیکیشن‌های وابسته به اینترنت دائمی، با پریدن فرم‌ها و از دست رفتن اطلاعات مواجه می‌شوند.",
        implementedSolution:
          "ذخیره‌سازی آنی فرم‌ها در صف محلی دستگاه، نمایش شفاف وضعیت همگام‌سازی به کاربر و ارسال خودکار و بدون تکرار اطلاعات به سرور به محض برقراری مجدد ارتباط.",
        architectureHighlights: [
          "ذخیره‌سازی محلی پیش‌دستانه همراه با نشانگر واضح وضعیت ارسال",
          "استفاده از کلید یکتا در هر تراکنش برای جلوگیری از ثبت مضاعف در سرور",
          "ابعاد استاندارد دکمه‌های لمسی و خوانایی بالا در محیط‌های کاری",
          "قرارداد API یکپارچه میان اپلیکیشن موبایل و پنل وب سرپرستان",
        ],
        keyFeatures: [
          "ثبت چک‌لیست و گزارش در حالت آفلاین",
          "نمایش شفاف آیتم‌های در صف ارسال و همگام‌شده",
          "چیدمان استاندارد فارسی و انگلیسی در صفحات موبایل",
          "همگام‌سازی امن مبتنی بر توکن احراز هویت",
        ],
        diagramAlt:
          "نمودار معماری موبایل VeloField شامل رابط لمسی چک‌لیست، صف آفلاین محلی، هماهنگ‌کننده همگام‌سازی و وب‌سرویس سرور.",
        diagramNodes: [
          "رابط کاربری لمسی",
          "صف ذخیره‌سازی آفلاین",
          "مدیریت همگام‌سازی",
          "وب‌سرویس بک‌اند",
        ],
      },
    },
  },
  {
    slug: "nexus-webhook-and-api-orchestrator",
    category: "api-systems",
    inquiryType: "custom-software",
    isDemo: true,
    featuredOnHome: false,
    visualVariant: "gateway",
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "HMAC Signature Verification"],
    content: {
      en: {
        title: "NexusRelay — Verified Webhook & API Integration Engine",
        categoryName: "Custom Software & Backend API Engineering",
        statusText: "Internal Studio Demo · Reference Architecture",
        shortDescription:
          "A backend middleware reference design for verifying inbound webhooks, normalizing payloads, and coordinating reliable downstream API calls.",
        overview:
          "NexusRelay demonstrates how GAZANOVA builds dependable backend glue between external providers (billing, messaging, CRM, fulfillment) and internal databases.",
        problemSolved:
          "Direct point-to-point webhook handlers often fail silently when a downstream service times out, or expose endpoints to spoofed unsigned requests.",
        implementedSolution:
          "An ingestion layer verifies HMAC signatures in constant time, validates schemas strictly, deduplicates event IDs, and executes downstream calls with bounded timeouts and structured operational logs.",
        architectureHighlights: [
          "Timing-safe HMAC cryptographic signature verification",
          "Strict payload size caps and schema validation before processing",
          "Zero-secret operational logging for safe production debugging",
          "Bounded upstream timeouts preventing hung worker connections",
        ],
        keyFeatures: [
          "HMAC & token authentication middleware",
          "Idempotent event deduplication",
          "Schema transformation & normalization",
          "Healthcheck & operational status telemetry",
        ],
        diagramAlt:
          "Backend diagram of NexusRelay showing HMAC verification, schema validator, deduplication check, and downstream service connector.",
        diagramNodes: [
          "HMAC Signature Check",
          "Schema Validator",
          "Deduplication Store",
          "Downstream Connector",
        ],
      },
      fa: {
        title: "NexusRelay — موتور یکپارچه‌سازی API و پردازش امن وب‌هوک",
        categoryName: "نرم‌افزار سفارشی و مهندسی بک‌اند",
        statusText: "پروژه نمایشی داخلی استودیو · معماری مرجع",
        shortDescription:
          "معماری مرجع میان‌افزار بک‌اند برای اعتبارسنجی امضای وب‌هوک‌ها، استانداردسازی داده‌ها و مدیریت ایمن فراخوانی سرویس‌های بیرونی.",
        overview:
          "NexusRelay نمونه‌ای از مهندسی زیرساخت در گازانووا برای اتصال مطمئن میان سرویس‌های بیرونی (درگاه‌ها، پیام‌رسان‌ها، CRM) و سامانه‌های داخلی سازمان است.",
        problemSolved:
          "اتصالات مستقیم و بدون لایه محافظ معمولاً هنگام کندی یکی از سرویس‌ها داده را از دست می‌دهند یا در برابر درخواست‌های جعلی بدون امضا آسیب‌پذیر هستند.",
        implementedSolution:
          "لایه ورودی امضای دیجیتال HMAC را بررسی کرده، ساختار داده و حجم پیلود را اعتبارسنجی می‌کند، شناسه‌های تکراری را فیلتر می‌نماید و درخواست‌های خروجی را با محدودیت زمانی مشخص (Timeout) مدیریت می‌کند.",
        architectureHighlights: [
          "بررسی ایمن امضای رمزنگاری HMAC برای جلوگیری از جعل درخواست",
          "محدودسازی حجم ورودی و اعتبارسنجی دقیق ساختار JSON",
          "ثبت لاگ‌های عملیاتی استاندارد بدون افشای کلیدها یا اطلاعات حساس",
          "مدیریت Timeout در ارتباطات بیرونی جهت حفظ پایداری سرور",
        ],
        keyFeatures: [
          "احراز هویت امضای دیجیتال وب‌هوک‌ها",
          "حذف رویدادهای تکراری (Idempotency)",
          "تبدیل و یکسان‌سازی ساختار داده‌ها",
          "اندپوینت بررسی سلامت سرویس (Healthcheck)",
        ],
        diagramAlt:
          "نمودار بک‌اند NexusRelay شامل بررسی امضای HMAC، اعتبارسنجی اسکیما، کنترل تکرار و اتصال به سرویس مقصد.",
        diagramNodes: [
          "بررسی امضای HMAC",
          "اعتبارسنجی اسکیما",
          "کنترل یکتایی رویداد",
          "اتصال به سرویس مقصد",
        ],
      },
    },
  },
  {
    slug: "orbital-drift-tactical-web-prototype",
    category: "interactive",
    inquiryType: "game-development",
    isDemo: true,
    featuredOnHome: false,
    visualVariant: "simulation",
    techStack: ["TypeScript", "HTML5 Canvas / WebGL", "Deterministic State Loop", "Web Audio"],
    content: {
      en: {
        title: "Orbital Drift — Browser-Native Tactical Physics Prototype",
        categoryName: "Game Development & Interactive Systems",
        statusText: "Internal Studio Demo · Reference Architecture",
        shortDescription:
          "A lightweight browser-playable tactical trajectory simulation prototype engineered around a deterministic timestep loop and responsive controls.",
        overview:
          "Orbital Drift demonstrates GAZANOVA's capability in interactive rendering and gameplay engineering—separating deterministic simulation math cleanly from frame-rate-independent canvas rendering.",
        problemSolved:
          "Browser-based interactive experiences often suffer from inconsistent physics across 60Hz and 120Hz displays, heavy asset bundles, or inaccessible keyboard/touch controls.",
        implementedSolution:
          "A fixed-timestep simulation core calculates gravitational trajectories predictably across all refresh rates, paired with crisp procedural vector rendering, reduced-motion comfort toggles, and instant load times.",
        architectureHighlights: [
          "Fixed-delta simulation loop decoupled from `requestAnimationFrame` display refresh rates",
          "Zero-bloat procedural vector visuals for near-instant browser startup",
          "Unified pointer, touch, and keyboard input mapping",
          "Respects user motion-sensitivity and audio mute preferences",
        ],
        keyFeatures: [
          "Deterministic trajectory preview & turn simulation",
          "60/120fps adaptive HTML5 Canvas rendering",
          "Desktop keyboard & mobile touch input parity",
          "Clean state serialization for instant replay/reset",
        ],
        diagramAlt:
          "Interactive engine diagram of Orbital Drift showing input mapper, fixed-timestep physics solver, state serializer, and vector canvas renderer.",
        diagramNodes: [
          "Unified Input Mapper",
          "Fixed-Step Physics",
          "State Serializer",
          "Vector Canvas Render",
        ],
      },
      fa: {
        title: "Orbital Drift — پروتوتایپ بازی تاکتیکی و شبیه‌ساز فیزیک تحت وب",
        categoryName: "بازی‌سازی و سیستم‌های تعاملی",
        statusText: "پروژه نمایشی داخلی استودیو · معماری مرجع",
        shortDescription:
          "پروتوتایپ تعاملی و سبک تحت مرورگر بر پایه حلقه فیزیک قطعی (Deterministic) و کنترل یکپارچه لمسی و صفحه‌کلید.",
        overview:
          "Orbital Drift نمونه‌ای از توانمندی گازانووا در مهندسی بازی و تجربه‌های تعاملی است که در آن محاسبات منطق و فیزیک به شکل تمیز از نرخ فریم تصویر جدا شده است.",
        problemSolved:
          "بسیاری از بازی‌ها و شبیه‌سازهای تحت وب در نمایشگرهای ۶۰ هرتز و ۱۲۰ هرتز رفتار متفاوتی نشان می‌دهند یا به دلیل حجم سنگین فایل‌ها دیر بارگذاری می‌شوند.",
        implementedSolution:
          "استفاده از گام زمانی ثابت (Fixed Timestep) برای یکسان‌سازی رفتار فیزیک در تمام دستگاه‌ها، رندر برداری بهینه برای بارگذاری بسیار سریع و پشتیبانی هم‌زمان از ماوس، لمس و صفحه‌کلید.",
        architectureHighlights: [
          "جداسازی کامل حلقه محاسبات فیزیک از نرخ تازه‌سازی تصویر مرورگر",
          "گرافیک برداری سبک و بهینه بدون وابستگی به فایل‌های حجیم",
          "مدیریت یکپارچه ورودی‌های لمسی موبایل و صفحه‌کلید دسکتاپ",
          "رعایت تنظیمات کاهش حرکت (Reduced Motion) و کنترل صدا",
        ],
        keyFeatures: [
          "پیش‌نمایش مسیر حرکت و شبیه‌سازی نوبتی دقیق",
          "رندر روان روی Canvas در ابعاد مختلف صفحه",
          "هماهنگی کامل کنترل‌ها در موبایل و دسکتاپ",
          "ذخیره و بازنشانی آنی وضعیت صحنه",
        ],
        diagramAlt:
          "نمودار معماری موتور Orbital Drift شامل مدیریت ورودی، محاسبه‌گر فیزیک گام‌ثابت، مدیریت وضعیت و رندر برداری.",
        diagramNodes: [
          "مدیریت یکپارچه ورودی",
          "موتور فیزیک گام‌ثابت",
          "مدیریت وضعیت صحنه",
          "رندر برداری Canvas",
        ],
      },
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((project) => project.slug === slug);
}
