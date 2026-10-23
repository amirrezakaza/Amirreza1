import type { Locale } from "@/i18n/config";
import type { ProjectTypeKey } from "@/i18n/dictionaries";

export type ServiceIconKey =
  | "globe"
  | "layers"
  | "mobile"
  | "sparkles"
  | "chat"
  | "bot"
  | "api"
  | "design"
  | "gamepad"
  | "shield";

export interface ServiceLocaleContent {
  title: string;
  shortSummary: string;
  overview: string;
  includes: string[];
  problemsSolved: string[];
  suitableFor: string[];
  deliverables: string[];
}

export interface ServiceDefinition {
  slug: string;
  number: string;
  icon: ServiceIconKey;
  inquiryType: ProjectTypeKey;
  featuredOnHome: boolean;
  content: Record<Locale, ServiceLocaleContent>;
}

export const SERVICES_DATA: ServiceDefinition[] = [
  {
    slug: "website-development",
    number: "01",
    icon: "globe",
    inquiryType: "website",
    featuredOnHome: true,
    content: {
      en: {
        title: "Website Development",
        shortSummary:
          "Fast, authoritative, conversion-focused business websites engineered for speed, accessibility, SEO, and bilingual reach.",
        overview:
          "We engineer modern corporate, product, and brand websites from clean semantic foundations—combining distinctive visual design, technical SEO, responsive layouts, and reliable inquiry flows.",
        includes: [
          "Custom responsive architecture (no bloated page-builder templates)",
          "Multilingual & directional layout support (including English LTR and Persian RTL)",
          "Technical SEO setup: structured metadata, canonical links, sitemap, and Open Graph",
          "Validated server-side contact, lead-capture, or booking forms",
        ],
        problemsSolved: [
          "Slow, outdated websites that erode credibility with prospective customers",
          "Broken mobile layouts or poor right-to-left localization",
          "Weak search visibility and unclear user conversion paths",
        ],
        suitableFor: [
          "Technology companies, B2B organizations, and professional studios",
          "Startups launching a flagship digital product or brand presence",
          "International businesses serving both English and Persian audiences",
        ],
        deliverables: [
          "Production-ready responsive website source code",
          "Configured SEO metadata, sitemap, and security headers",
          "Server-validated inquiry integration & deployment guide",
        ],
      },
      fa: {
        title: "طراحی و توسعه وب‌سایت‌های حرفه‌ای",
        shortSummary:
          "وب‌سایت‌های سریع، معتبر و نتیجه‌محور با مهندسی تمیز، سئوی فنی اصولی، دسترس‌پذیری استاندارد و پشتیبانی دوزبانه.",
        overview:
          "ما وب‌سایت‌های سازمانی، معرفی محصول و برندینگ را بدون قالب‌های سنگین و آماده، بر پایه کدنویسی استاندارد، هویت بصری متمایز، سئوی تکنیکال و مسیرهای روشن جذب مشتری پیاده‌سازی می‌کنیم.",
        includes: [
          "طراحی و کدنویسی اختصاصی و کاملاً واکنش‌گرا در موبایل، تبلت و دسکتاپ",
          "معماری اصولی چندزبانه با پشتیبانی دقیق از فارسی (RTL) و انگلیسی (LTR)",
          "پیاده‌سازی کامل سئوی فنی، متادیتا، نقشه سایت و پیش‌نمایش شبکه‌های اجتماعی",
          "فرم‌های ارتباطی ایمن و اعتبارسنجی‌شده در سمت سرور",
        ],
        problemsSolved: [
          "کندی بارگذاری و ظاهر قدیمی سایت که اعتماد مخاطبان را کاهش می‌دهد",
          "به‌هم‌ریختگی نمایش در گوشی‌های موبایل یا چیدمان نادرست زبان فارسی",
          "ابهام در معرفی خدمات و نرخ پایین تبدیل بازدیدکننده به مخاطب واقعی",
        ],
        suitableFor: [
          "شرکت‌های فناوری، مجموعه‌های B2B و کسب‌وکارهای تخصصی",
          "استارتاپ‌هایی که قصد معرفی حرفه‌ای محصول یا برند خود را دارند",
          "مجموعه‌های فعال در بازارهای دوزبانه و بین‌المللی",
        ],
        deliverables: [
          "سورس‌کد تمیز و آماده بهره‌برداری وب‌سایت",
          "تنظیمات کامل سئو، نقشه سایت و هدرهای امنیتی",
          "فرم تماس متصل به سرویس ایمیل سرور به همراه مستندات راه‌اندازی",
        ],
      },
    },
  },
  {
    slug: "custom-web-applications",
    number: "02",
    icon: "layers",
    inquiryType: "web-application",
    featuredOnHome: true,
    content: {
      en: {
        title: "Custom Web Applications",
        shortSummary:
          "Full-stack SaaS products, client portals, and internal operational platforms built with modern typed architectures.",
        overview:
          "When off-the-shelf tools cannot match your workflow, we design and build custom web applications with structured data models, role-based access, clean dashboards, and dependable backend APIs.",
        includes: [
          "End-to-end frontend and backend architecture (React, Next.js, TypeScript, PostgreSQL)",
          "Authentication, role permissions, and secure session handling",
          "Interactive workspaces, filtering, reporting views, and state management",
          "Relational database schema design and transactional data integrity",
        ],
        problemsSolved: [
          "Manual spreadsheet workflows that cause human error and bottlenecks",
          "Disconnected SaaS subscriptions that fail to fit core business logic",
          "Legacy web panels that are difficult to secure, maintain, or extend",
        ],
        suitableFor: [
          "Founders building a new SaaS product or Minimum Viable Product (MVP)",
          "Operations teams needing custom internal portals or partner dashboards",
          "Businesses modernizing legacy browser-based tools",
        ],
        deliverables: [
          "Modular full-stack web application codebase",
          "Database schema, migration configuration, and API endpoints",
          "Environment setup guide and staging/production build scripts",
        ],
      },
      fa: {
        title: "توسعه وب‌اپلیکیشن‌های اختصاصی",
        shortSummary:
          "طراحی و ساخت پلتفرم‌های SaaS، پورتال‌های مشتریان و سامانه‌های عملیاتی تحت وب با معماری مدرن و تایپ‌امن.",
        overview:
          "زمانی که نرم‌افزارهای آماده پاسخگوی فرآیندهای خاص کسب‌وکار شما نیستند، وب‌اپلیکیشن اختصاصی با مدل داده دقیق، سطوح دسترسی امن، داشبوردهای کاربردی و بک‌اند پایدار طراحی می‌کنیم.",
        includes: [
          "مهندسی یکپارچه فرانت‌اند و بک‌اند (React، Next.js، TypeScript و PostgreSQL)",
          "احراز هویت امن، مدیریت نقش‌ها و کنترل سطوح دسترسی کاربران",
          "پنل‌های مدیریتی، جستجو و فیلتر پیشرفته و مدیریت وضعیت داده‌ها",
          "طراحی اصولی پایگاه داده رابطه‌ای و حفظ یکپارچگی تراکنش‌ها",
        ],
        problemsSolved: [
          "وابستگی به فایل‌های دستی و پراکنده که موجب خطای انسانی و اتلاف زمان می‌شوند",
          "عدم انطباق ابزارهای آماده با منطق تجاری اختصاصی سازمان",
          "سامانه‌های قدیمی که توسعه و نگهداری آن‌ها پرهزینه و دشوار شده است",
        ],
        suitableFor: [
          "کارآفرینان در حال ساخت محصول SaaS یا نسخه اولیه (MVP)",
          "تیم‌های عملیاتی نیازمند پورتال مشتریان، همکاران یا پنل‌های داخلی",
          "سازمان‌هایی که قصد نوسازی سامانه‌های تحت وب خود را دارند",
        ],
        deliverables: [
          "سورس‌کد ماژولار و کامل وب‌اپلیکیشن",
          "ساختار پایگاه داده، وب‌سرویس‌ها و مستندات فنی",
          "اسکریپت‌های بیلد و راهنمای استقرار در محیط عملیاتی",
        ],
      },
    },
  },
  {
    slug: "mobile-application-development",
    number: "03",
    icon: "mobile",
    inquiryType: "mobile-application",
    featuredOnHome: true,
    content: {
      en: {
        title: "Mobile Application Development",
        shortSummary:
          "Cross-platform iOS and Android applications engineered for responsive touch interactions, clean API sync, and stability.",
        overview:
          "We build practical mobile applications that put your service or operational tools directly into users' hands—focusing on intuitive mobile navigation, resilient network handling, and unified backend APIs.",
        includes: [
          "Cross-platform mobile engineering for iOS and Android from a maintainable codebase",
          "Touch-optimized UI flows, offline-aware states, and secure token storage",
          "Push notification workflows and REST/GraphQL backend integration",
          "Release preparation for store submission or internal enterprise distribution",
        ],
        problemsSolved: [
          "Field teams or on-the-go customers struggling with desktop-only tools",
          "High cost of maintaining two completely separate mobile codebases unnecessarily",
          "Unreliable mobile interfaces under intermittent connectivity",
        ],
        suitableFor: [
          "Consumer or B2B products requiring dedicated mobile experiences",
          "Field-service, logistics, booking, and companion app initiatives",
          "Existing web platforms expanding to mobile devices",
        ],
        deliverables: [
          "Cross-platform mobile application source code",
          "Integrated API client layer & authentication flow",
          "Build configurations and release preparation checklist",
        ],
      },
      fa: {
        title: "توسعه اپلیکیشن‌های موبایل",
        shortSummary:
          "ساخت اپلیکیشن‌های موبایل برای Android و iOS با تعامل روان، همگام‌سازی مطمئن با سرور و مصرف بهینه منابع.",
        overview:
          "ما اپلیکیشن‌های موبایل کاربردی طراحی می‌کنیم که خدمات یا ابزارهای عملیاتی شما را با رابط کاربری لمسی استاندارد، مدیریت هوشمند قطعی شبکه و اتصال امن به بک‌اند در اختیار کاربران قرار می‌دهند.",
        includes: [
          "توسعه کراس‌پلتفرم برای اندروید و iOS با کدبیس یکپارچه و قابل نگهداری",
          "طراحی تجربه کاربری ویژه موبایل، ذخیره‌سازی امن توکن‌ها و مدیریت خطاهای شبکه",
          "پیاده‌سازی اعلان‌ها (Notifications) و اتصال استاندارد به API سرور",
          "آماده‌سازی خروجی‌های نهایی جهت انتشار در مارکت‌ها یا توزیع سازمانی",
        ],
        problemsSolved: [
          "دشواری استفاده کاربران موبایلی یا نیروهای میدانی از سامانه‌های صرفاً دسکتاپی",
          "هزینه و زمان مضاعف نگهداری دو پروژه کاملاً مجزا بدون ضرورت فنی",
          "تجربه کاربری ناپایدار هنگام کندی یا نوسان اینترنت همراه",
        ],
        suitableFor: [
          "محصولات دیجیتال نیازمند حضور مستقیم روی گوشی کاربران",
          "سامانه‌های رزرو، خدمات در محل، پایش میدانی و اپلیکیشن‌های مکمل وب",
          "پلتفرم‌های فعلی که قصد گسترش تجربه کاربری به موبایل را دارند",
        ],
        deliverables: [
          "سورس‌کد ساختارمند اپلیکیشن موبایل",
          "لایه ارتباطی امن با وب‌سرویس‌ها و مدیریت نشست کاربر",
          "تنظیمات خروجی بیلد و راهنمای انتشار",
        ],
      },
    },
  },
  {
    slug: "artificial-intelligence-solutions",
    number: "04",
    icon: "sparkles",
    inquiryType: "ai-solution",
    featuredOnHome: true,
    content: {
      en: {
        title: "Artificial Intelligence Solutions",
        shortSummary:
          "Applied AI integrations, document intelligence, semantic search, and structured LLM pipelines with practical guardrails.",
        overview:
          "We integrate modern language and vision models into real business workflows—turning unstructured documents, tickets, and operational tasks into structured, verifiable outputs.",
        includes: [
          "Retrieval-Augmented Generation (RAG) over internal documents and knowledge bases",
          "Structured data extraction, classification, summarization, and bilingual translation workflows",
          "Prompt engineering, schema-constrained outputs, fallback handling, and rate controls",
          "Server-side API orchestration protecting provider keys and monitoring usage",
        ],
        problemsSolved: [
          "Hours lost searching across scattered PDFs, SOPs, and internal wikis",
          "Repetitive manual triage of incoming texts, forms, or operational records",
          "Fragile AI prototypes that hallucinate or lack validation in production",
        ],
        suitableFor: [
          "Knowledge-intensive teams handling large volumes of documentation",
          "Software products adding intelligent copilot or analysis capabilities",
          "Operations teams automating structured document review",
        ],
        deliverables: [
          "Production AI pipeline & backend API integration",
          "Output validation schemas, safety guardrails, and error fallbacks",
          "Configuration guide for model providers, keys, and usage limits",
        ],
      },
      fa: {
        title: "راهکارهای هوش مصنوعی کاربردی",
        shortSummary:
          "یکپارچه‌سازی مدل‌های هوش مصنوعی، تحلیل اسناد، جستجوی معنایی و پایپ‌لاین‌های ساختارمند با کنترل دقیق خروجی.",
        overview:
          "ما مدل‌های زبانی و هوش مصنوعی مدرن را به درون فرآیندهای واقعی کسب‌وکار می‌آوریم تا اسناد غیرساختاریافته، درخواست‌ها و داده‌های متنی به خروجی‌های دقیق، قابل اتکا و ساختارمند تبدیل شوند.",
        includes: [
          "سیستم‌های بازیابی هوشمند دانش (RAG) بر روی مستندات و پایگاه دانش سازمانی",
          "استخراج داده ساختاریافته، دسته‌بندی خودکار، خلاصه‌سازی و پردازش متن فارسی و انگلیسی",
          "مهندسی پرامپت، اعتبارسنجی اسکیمای خروجی، مهار خطا و مدیریت محدودیت مصرف",
          "پیاده‌سازی امن سمت سرور جهت حفاظت از کلیدهای API و پایش هزینه‌ها",
        ],
        problemsSolved: [
          "اتلاف زمان طولانی کارکنان برای یافتن پاسخ در میان فایل‌ها و مستندات پراکنده",
          "بررسی دستی و تکراری متون، فرم‌ها و گزارش‌های روزانه",
          "نسخه‌های آزمایشی هوش مصنوعی که در محیط واقعی خروجی نامعتبر تولید می‌کنند",
        ],
        suitableFor: [
          "تیم‌ها و سازمان‌های دارای حجم بالای مستندات تخصصی و رویه‌های کاری",
          "محصولات نرم‌افزاری که می‌خواهند قابلیت‌های هوشمند به پلتفرم خود بیفزایند",
          "واحدهای عملیاتی به دنبال خودکارسازی پردازش داده‌های متنی",
        ],
        deliverables: [
          "پایپ‌لاین هوش مصنوعی یکپارچه با بک‌اند نرم‌افزار",
          "لایه اعتبارسنجی خروجی، مدیریت خطا و محدودیت‌های امنیتی",
          "راهنمای پیکربندی سرویس‌دهنده مدل و متغیرهای محیطی",
        ],
      },
    },
  },
  {
    slug: "ai-assistants-and-chatbots",
    number: "05",
    icon: "chat",
    inquiryType: "ai-solution",
    featuredOnHome: false,
    content: {
      en: {
        title: "AI Assistants and Chatbots",
        shortSummary:
          "Domain-grounded conversational assistants for customer support, onboarding, and internal team guidance.",
        overview:
          "We build custom web and embedded AI assistants grounded in your approved documentation and business rules—complete with source citations, scope boundaries, and clean human handoff.",
        includes: [
          "Custom conversational web widgets or workspace-embedded assistant panels",
          "Knowledge grounding so answers stay strictly aligned with verified company content",
          "Conversation state handling, lead qualification, and human escalation triggers",
          "Bilingual conversational support in English and Persian",
        ],
        problemsSolved: [
          "Repetitive pre-sales or onboarding questions overwhelming human support",
          "Generic rigid rule-trees that frustrate visitors with dead-end menus",
          "Uncontrolled chatbots making unsupported promises outside policy",
        ],
        suitableFor: [
          "SaaS platforms and service businesses answering frequent technical questions",
          "Internal operations teams needing an onboarding or policy assistant",
          "Bilingual platforms supporting visitors across time zones",
        ],
        deliverables: [
          "Custom chat interface & secure backend streaming/response API",
          "Knowledge ingestion workflow & guardrail prompt rules",
          "Escalation/handoff integration with your team's inbox or ticket flow",
        ],
      },
      fa: {
        title: "دستیارهای هوشمند و چت‌بات‌های هوش مصنوعی",
        shortSummary:
          "طراحی دستیارهای گفتگومحور مبتنی بر دانش اختصاصی کسب‌وکار برای پشتیبانی، راهنمایی کاربران و پیش‌نیازسنجی.",
        overview:
          "ما دستیارهای هوشمند تحت وب یا درون‌برنامه‌ای می‌سازیم که صرفاً بر اساس مستندات تاییدشده و قوانین کسب‌وکار شما پاسخ می‌دهند، به منبع اشاره می‌کنند و در مواقع لازم گفتگو را به کارشناس انسانی ارجاع می‌دهند.",
        includes: [
          "رابط گفتگوی اختصاصی هماهنگ با هویت بصری وب‌سایت یا نرم‌افزار شما",
          "اتصال به منابع دانشی معتبر جهت جلوگیری از پاسخ‌های خارج از چارچوب",
          "مدیریت زمینه گفتگو، دریافت اطلاعات اولیه مشتری و ارجاع هوشمند به اپراتور",
          "پشتیبانی روان از مکالمات فارسی و انگلیسی",
        ],
        problemsSolved: [
          "حجم بالای سوالات تکراری پیش از خرید یا هنگام شروع کار کاربران",
          "چت‌بات‌های درختی خشک و قدیمی که کاربر را در منوهای بسته سردرگم می‌کنند",
          "نگرانی از پاسخ‌های نادرست یا تعهدات غیرمجاز در چت‌بات‌های کنترل‌نشده",
        ],
        suitableFor: [
          "پلتفرم‌های آنلاین و کسب‌وکارهای خدماتی با پرسش‌های پرتکرار",
          "تیم‌های داخلی برای دسترسی سریع کارکنان به راهنماها و دستورالعمل‌ها",
          "مجموعه‌هایی که در ساعات غیرکاری نیز می‌خواهند پاسخگویی اولیه دقیق داشته باشند",
        ],
        deliverables: [
          "ویجت یا پنل گفتگوی اختصاصی به همراه API امن سمت سرور",
          "ساختار بارگذاری پایگاه دانش و قوانین کنترلی پاسخگویی",
          "مکانیزم ثبت درخواست و انتقال مکالمه به تیم پشتیبانی",
        ],
      },
    },
  },
  {
    slug: "telegram-bots-and-automation",
    number: "06",
    icon: "bot",
    inquiryType: "telegram-bot",
    featuredOnHome: true,
    content: {
      en: {
        title: "Telegram Bots and Automation",
        shortSummary:
          "Reliable Telegram bots, mini-apps, webhook automations, and operational notification systems.",
        overview:
          "We engineer structured Telegram bots and backend automation pipelines that connect seamlessly with your APIs, databases, support queues, or AI workflows.",
        includes: [
          "Webhook-driven Telegram bots with inline keyboards, multi-step forms, and role checks",
          "Telegram Mini App (WebApp) interfaces integrated with backend verification",
          "Automated operational alerts, order/ticket intake, and scheduled workflows",
          "Idempotent event handling, rate protection, and administrative controls",
        ],
        problemsSolved: [
          "Chaotic manual message handling across group chats and support channels",
          "Delayed awareness of critical system events, leads, or customer requests",
          "Unstable script bots that crash or lose state on restart",
        ],
        suitableFor: [
          "Communities, digital services, and operations teams active on Telegram",
          "Businesses wanting fast mobile-friendly intake without forcing a full app install",
          "Engineering and support teams needing structured real-time alerts",
        ],
        deliverables: [
          "Production-ready Telegram bot service (webhook/polling architecture)",
          "Admin commands, user state management, and API integrations",
          "Deployment configuration and bot token security setup guide",
        ],
      },
      fa: {
        title: "ربات‌های تلگرام و اتوماسیون فرآیندها",
        shortSummary:
          "توسعه ربات‌های حرفه‌ای تلگرام، مینی‌اپلیکیشن‌ها (Mini Apps) و سیستم‌های خودکارسازی اعلان و عملیات.",
        overview:
          "ما ربات‌های تلگرامی پایدار و جریان‌های اتوماسیون سمت سرور طراحی می‌کنیم که به‌صورت یکپارچه به وب‌سرویس‌ها، پایگاه داده، صف پشتیبانی یا مدل‌های هوش مصنوعی شما متصل می‌شوند.",
        includes: [
          "ربات‌های مبتنی بر وب‌هوک با کیبوردهای شیشه‌ای، فرم‌های چندمرحله‌ای و کنترل دسترسی",
          "طراحی و توسعه مینی‌اپلیکیشن تلگرام (Telegram Mini App) با اعتبارسنجی امن سرور",
          "ثبت خودکار سفارش یا تیکت، ارسال اعلان‌های لحظه‌ای و زمان‌بندی وظایف",
          "مدیریت وضعیت کاربران، جلوگیری از پردازش تکراری و پنل دستورات مدیریت",
        ],
        problemsSolved: [
          "بی‌نظمی و خطا در پیگیری دستی پیام‌های مشتریان در گروه‌ها و چت‌ها",
          "اطلاع دیرهنگام تیم از رویدادهای مهم سیستم یا درخواست‌های جدید",
          "ربات‌های اسکریپتی ناپایدار که با هر خطا متوقف می‌شوند",
        ],
        suitableFor: [
          "کسب‌وکارهای دیجیتال، کامیونیتی‌ها و تیم‌های عملیاتی فعال در تلگرام",
          "مجموعه‌هایی که می‌خواهند بدون الزام نصب اپلیکیشن جداگانه، خدمات سریع ارائه دهند",
          "تیم‌های فنی و پشتیبانی نیازمند سیستم هشدار و مدیریت درخواست‌ها",
        ],
        deliverables: [
          "سرویس کامل و پایدار ربات تلگرام با معماری استاندارد",
          "مدیریت وضعیت کاربران، دستورات ادمین و اتصال به APIهای مورد نیاز",
          "راهنمای استقرار امن و تنظیم توکن‌ها و وب‌هوک",
        ],
      },
    },
  },
  {
    slug: "custom-software-and-api-development",
    number: "07",
    icon: "api",
    inquiryType: "custom-software",
    featuredOnHome: true,
    content: {
      en: {
        title: "Custom Software and API Development",
        shortSummary:
          "Clean backend services, RESTful APIs, third-party integrations, webhook processors, and data synchronization engines.",
        overview:
          "Behind every dependable digital product is a well-structured backend. We architect secure APIs, integration middleware, and custom backend tools that keep your systems communicating reliably.",
        includes: [
          "Typed REST API design with strict request/response schema validation",
          "Third-party service integrations (payment gateways, email, CRM, messaging, cloud storage)",
          "Webhook signature verification, retry queues, and idempotency safeguards",
          "Database modeling, query optimization, and structured API documentation",
        ],
        problemsSolved: [
          "Siloed software tools that require repetitive copy-pasting between platforms",
          "Brittle integrations that drop events or duplicate records during outages",
          "Poorly documented backend endpoints blocking frontend or mobile teams",
        ],
        suitableFor: [
          "Organizations connecting multiple internal and external software platforms",
          "Product teams needing a solid backend foundation for web and mobile clients",
          "Companies replacing fragile scripts with maintainable backend services",
        ],
        deliverables: [
          "Validated backend service / API codebase",
          "Authentication, rate limiting, and webhook verification modules",
          "Endpoint specifications and integration test documentation",
        ],
      },
      fa: {
        title: "نرم‌افزارهای سفارشی و توسعه API",
        shortSummary:
          "معماری و پیاده‌سازی سرویس‌های بک‌اند، APIهای استاندارد، یکپارچه‌سازی سامانه‌ها و پردازشگرهای وب‌هوک.",
        overview:
          "پشتوانه هر محصول دیجیتال موفق، یک زیرساخت سمت سرور منظم و امن است. ما وب‌سرویس‌ها، میان‌افزارهای یکپارچه‌سازی و ابزارهای نرم‌افزاری اختصاصی می‌سازیم که ارتباط دقیق بین سیستم‌های شما را تضمین می‌کنند.",
        includes: [
          "طراحی و توسعه REST API با اعتبارسنجی سخت‌گیرانه ورودی و خروجی",
          "اتصال امن به سرویس‌های بیرونی (درگاه‌ها، سرویس‌های ایمیل و پیام، CRM و فضای ابری)",
          "بررسی امضای دیجیتال وب‌هوک‌ها، صف تلاش مجدد و جلوگیری از ثبت تکراری داده‌ها",
          "مدل‌سازی اصولی دیتابیس، بهینه‌سازی کوئری‌ها و مستندسازی دقیق اندپوینت‌ها",
        ],
        problemsSolved: [
          "جزیره‌ای عمل کردن نرم‌افزارهای سازمان و انتقال دستی داده‌ها بین سیستم‌ها",
          "اتصالات شکننده‌ای که در زمان قطعی سرویس‌ها داده از دست می‌دهند",
          "نبود مستندات و ساختار استاندارد بک‌اند برای تیم‌های فرانت‌اند و موبایل",
        ],
        suitableFor: [
          "سازمان‌هایی که نیاز به یکپارچه‌سازی چند سامانه نرم‌افزاری دارند",
          "تیم‌های محصول نیازمند هسته بک‌اند مطمئن برای وب و موبایل",
          "مجموعه‌هایی که می‌خواهند اسکریپت‌های موقتی را با سرویس پایدار جایگزین کنند",
        ],
        deliverables: [
          "سورس‌کد سرویس بک‌اند و APIهای تایپ‌امن",
          "ماژول‌های احراز هویت، محدودکننده نرخ درخواست و امنیت وب‌هوک",
          "مستندات فنی استفاده از وب‌سرویس‌ها",
        ],
      },
    },
  },
  {
    slug: "ui-ux-design",
    number: "08",
    icon: "design",
    inquiryType: "ui-ux-design",
    featuredOnHome: false,
    content: {
      en: {
        title: "UI/UX Design",
        shortSummary:
          "Structured product interfaces, design systems, and user flows built with engineering feasibility and accessibility in mind.",
        overview:
          "We design calm, purposeful digital interfaces that make complex tasks feel straightforward—bridging user empathy directly with clean frontend implementation.",
        includes: [
          "Information architecture, user flow mapping, and interactive wireframes",
          "Cohesive design tokens (color hierarchy, typography scales, spacing, radii)",
          "Bilingual layout engineering for seamless LTR and RTL reading flow",
          "Component states covering empty, loading, validation error, and success views",
        ],
        problemsSolved: [
          "Cluttered dashboards where users struggle to complete primary actions",
          "Inconsistent spacing, colors, and UI patterns across product screens",
          "Designs that look good statically but break in real responsive or RTL code",
        ],
        suitableFor: [
          "New products defining their visual identity and core user workflows",
          "Existing web or mobile apps undergoing a usability and visual overhaul",
          "Engineering teams needing developer-ready component systems",
        ],
        deliverables: [
          "Structured screen designs & user journey specifications",
          "Reusable design token system & component guidelines",
          "Accessibility contrast, focus-state, and responsive layout specs",
        ],
      },
      fa: {
        title: "طراحی رابط و تجربه کاربری (UI/UX)",
        shortSummary:
          "طراحی جریان‌های کاربری، سیستم‌های طراحی و رابط‌های دیجیتال خوانا با درک عمیق از پیاده‌سازی فنی و دسترس‌پذیری.",
        overview:
          "ما رابط‌های کاربری هدفمند و منظمی طراحی می‌کنیم که پیچیدگی سیستم را برای کاربر ساده می‌سازند و از همان ابتدا با منطق کدنویسی واکنش‌گرا و استانداردهای دسترس‌پذیری هم‌خوانی دارند.",
        includes: [
          "معماری اطلاعات، ترسیم مسیر حرکت کاربر (User Flow) و وایرفریم‌های کاربردی",
          "تعریف توکن‌های طراحی منسجم (سلسله‌مراتب رنگ، تایپوگرافی، فاصله‌گذاری و ابعاد)",
          "طراحی دوزبانه بومی برای نمایش بی‌نقص در حالت راست‌به‌چپ (فارسی) و چپ‌به‌راست (انگلیسی)",
          "پوشش کامل وضعیت‌های واقعی رابط کاربری شامل بارگذاری، حالت خالی، خطا و موفقیت",
        ],
        problemsSolved: [
          "پنل‌ها و صفحات شلوغ که کاربر را در انجام کار اصلی سردرگم می‌کنند",
          "ناهماهنگی ظاهری بین بخش‌های مختلف یک محصول نرم‌افزاری",
          "طرح‌های گرافیکی که در پیاده‌سازی واقعی موبایل یا دو زبان دچار مشکل می‌شوند",
        ],
        suitableFor: [
          "محصولات جدید در مرحله شکل‌دهی هویت محصول و تجربه کاربری",
          "سامانه‌های فعلی نیازمند بازطراحی تجربه کاربری و ارتقای کیفیت بصری",
          "تیم‌های فنی نیازمند سیستم کامپوننت استاندارد و آماده پیاده‌سازی",
        ],
        deliverables: [
          "طراحی ساختارمند صفحات و مسیرهای کلیدی کاربر",
          "مجموعه توکن‌های طراحی و راهنمای کامپوننت‌های تکرارپذیر",
          "استانداردهای کنتراست رنگی، حالت‌های فوکوس و واکنش‌گرایی",
        ],
      },
    },
  },
  {
    slug: "game-development",
    number: "09",
    icon: "gamepad",
    inquiryType: "game-development",
    featuredOnHome: false,
    content: {
      en: {
        title: "Game Development",
        shortSummary:
          "2D/3D interactive experiences, browser-playable WebGL/Canvas games, gamified simulations, and playable prototypes.",
        overview:
          "We craft engaging interactive systems, playable prototypes, and browser or cross-platform games focused on responsive controls, clean game loops, and polished visual feedback.",
        includes: [
          "Playable gameplay prototypes to validate core mechanics early",
          "Web-native HTML5 Canvas / WebGL interactive experiences and 2D/3D game builds",
          "Game state architecture, physics/turn logic, progression systems, and audio-visual polish",
          "Backend leaderboards, session validation, or multiplayer API services when required",
        ],
        problemsSolved: [
          "Game concepts needing a well-engineered playable vertical slice",
          "Poor frame pacing or unresponsive touch/keyboard controls on web and mobile",
          "Interactive educational or brand experiences requiring custom real-time rendering",
        ],
        suitableFor: [
          "Indie creators and studios building playable prototypes or full titles",
          "Educational, training, and simulation initiatives using interactive mechanics",
          "Brands launching purposeful, high-craft browser-playable experiences",
        ],
        deliverables: [
          "Structured game source project & asset pipeline",
          "Optimized playable builds for target platforms (Web/Desktop/Mobile)",
          "Game configuration parameters & technical documentation",
        ],
      },
      fa: {
        title: "بازی‌سازی و تجربه‌های تعاملی",
        shortSummary:
          "توسعه بازی‌های دوبعدی و سه‌بعدی، تجربه‌های تعاملی تحت وب (WebGL/Canvas)، شبیه‌سازها و پروتوتایپ‌های قابل بازی.",
        overview:
          "ما تجربه‌های تعاملی، نسخه‌های اولیه قابل بازی (Playable Prototypes) و بازی‌های تحت وب یا چندپلتفرمی را با تمرکز بر کنترل روان، منطق دقیق گیم‌پلی و اجرای بهینه پیاده‌سازی می‌کنیم.",
        includes: [
          "ساخت پروتوتایپ قابل بازی برای ارزیابی سریع و دقیق مکانیک‌های هسته‌ای",
          "توسعه بازی‌ها و تجربه‌های تعاملی تحت وب (Canvas / WebGL) و موتورهای بازی‌سازی استاندارد",
          "معماری وضعیت بازی، منطق فیزیک یا نوبتی، سیستم پیشرفت و بازخوردهای بصری",
          "پیاده‌سازی بک‌اند امتیازات، ذخیره‌سازی وضعیت یا سرویس‌های آنلاین در صورت نیاز",
        ],
        problemsSolved: [
          "ایده‌های بازی که برای جذب مخاطب یا اعتبارسنجی به یک نسخه قابل بازی استاندارد نیاز دارند",
          "افت فریم و عملکرد ضعیف کنترل‌های لمسی یا صفحه‌کلید در مرورگر و موبایل",
          "نیاز به شبیه‌سازهای آموزشی یا تجربه‌های تعاملی اختصاصی در وب",
        ],
        suitableFor: [
          "تیم‌ها و بازی‌سازان مستقل نیازمند مهندسی گیم‌پلی یا ساخت نسخه اولیه",
          "پروژه‌های آموزشی و شبیه‌سازی مبتنی بر تعامل زنده",
          "برندهایی که به دنبال تجربه‌های تعاملی خوش‌ساخت و قابل اجرا در مرورگر هستند",
        ],
        deliverables: [
          "سورس‌کد ساختارمند پروژه بازی و مدیریت دارایی‌ها",
          "نسخه اجرایی بهینه‌شده برای پلتفرم هدف (وب، دسکتاپ یا موبایل)",
          "پارامترهای تنظیم گیم‌پلی و مستندات فنی پروژه",
        ],
      },
    },
  },
  {
    slug: "software-maintenance-and-improvements",
    number: "10",
    icon: "shield",
    inquiryType: "custom-software",
    featuredOnHome: false,
    content: {
      en: {
        title: "Software Maintenance and Improvements",
        shortSummary:
          "Codebase audits, bug resolution, security hardening, performance optimization, and structured feature upgrades.",
        overview:
          "Existing software often needs careful stewardship rather than a costly rewrite. We inspect your current codebase, resolve stability bottlenecks, upgrade dependencies safely, and ship clean improvements.",
        includes: [
          "Technical codebase review covering architecture, security risks, and type safety",
          "Framework/dependency upgrades, bug fixes, and broken integration repairs",
          "Frontend performance optimization, accessibility fixes, and RTL/responsive cleanup",
          "Incremental feature development within your existing stack",
        ],
        problemsSolved: [
          "Production bugs, broken forms, or security warnings in an inherited codebase",
          "Sluggish page loads, layout shifts, or broken mobile views",
          "Difficulty shipping new features without breaking existing functionality",
        ],
        suitableFor: [
          "Businesses maintaining an active web app or website without a full-time team",
          "Teams needing targeted engineering help to stabilize an existing project",
          "Products preparing for higher traffic or security compliance checks",
        ],
        deliverables: [
          "Prioritized technical audit notes & remediation plan",
          "Tested pull requests / code updates preserving working functionality",
          "Updated build, typecheck, and operational verification",
        ],
      },
      fa: {
        title: "نگهداری، بهینه‌سازی و ارتقای نرم‌افزار",
        shortSummary:
          "بازبینی فنی کدبیس، رفع باگ‌ها، ارتقای امنیت، بهینه‌سازی سرعت و افزودن قابلیت‌های جدید به نرم‌افزارهای فعلی.",
        overview:
          "همیشه نیاز به بازنویسی کامل یک نرم‌افزار از صفر نیست. ما پروژه فعلی شما را بررسی می‌کنیم، گلوگاه‌های فنی و امنیتی را برطرف می‌سازیم و قابلیت‌های جدید را با حفظ بخش‌های سالم سامانه اضافه می‌کنیم.",
        includes: [
          "ارزیابی فنی کدبیس از نظر معماری، ریسک‌های امنیتی و کیفیت تایپ‌ها",
          "رفع خطاهای عملکردی، ترمیم یکپارچه‌سازی‌های معیوب و به‌روزرسانی ایمن پکیج‌ها",
          "بهینه‌سازی سرعت بارگذاری، اصلاح واکنش‌گرایی موبایل و بهبود دسترس‌پذیری",
          "توسعه مرحله‌ای امکانات جدید بر بستر پشته فناوری موجود شما",
        ],
        problemsSolved: [
          "باگ‌های آزاردهنده، فرم‌های ازکارافتاده یا هشدارهای امنیتی در پروژه‌های فعلی",
          "کندی صفحات، به‌هم‌ریختگی ظاهری در موبایل یا مشکلات چیدمان دوزبانه",
          "نگرانی از خراب شدن بخش‌های قبلی هنگام افزودن امکانات جدید",
        ],
        suitableFor: [
          "کسب‌وکارهایی که سامانه فعالی دارند اما تیم فنی تمام‌وقت در اختیار ندارند",
          "تیم‌هایی که برای پایدارسازی و بهبود کدبیس فعلی نیازمند همراهی تخصصی هستند",
          "محصولاتی که پیش از رشد کاربران نیازمند بهینه‌سازی و استحکام فنی هستند",
        ],
        deliverables: [
          "گزارش شفاف نقاط قابل بهبود و اولویت‌بندی فنی",
          "اعمال اصلاحات تست‌شده بدون آسیب به قابلیت‌های فعال پروژه",
          "تایید صحت بیلد، تایپ‌چک و پایداری عملکرد",
        ],
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
