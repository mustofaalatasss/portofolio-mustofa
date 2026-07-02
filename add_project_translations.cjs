const fs = require('fs');
const path = require('path');

const translationsPath = path.join(__dirname, 'src', 'translations.js');
let content = fs.readFileSync(translationsPath, 'utf8');

// Define projects items for all 6 languages
const projectsItems = {
    id: `
            items: [
                {
                    title: "Yalla Store",
                    desc: "Sistem e-commerce berskala besar (Enterprise-Grade) yang mengusung performa tinggi dan keamanan tingkat mutakhir. Menggunakan Server Actions untuk eksekusi sisi server yang aman, dikombinasikan dengan Drizzle ORM (Type-Safe) dan manajemen state ringan dari Zustand. Ini adalah solusi bisnis end-to-end yang menjamin transaksi cepat dan andal.",
                    features: ["Sistem Autentikasi Super Aman dengan Better Auth", "Optimasi Gambar Cloudinary & Validasi Zod", "Arsitektur Fullstack modern siap produksi"]
                },
                {
                    title: "Amar Rental Mobil",
                    desc: "Platform enterprise dengan arsitektur terpisah (Decoupled Client-Server). Frontend dibangun secara khusus demi mencapai optimasi SEO (Search Engine Optimization) sempurna dan interaksi kilat. Didukung oleh Backend Laravel yang kokoh dengan proteksi keamanan API kelas atas (Sanctum Token), sistem ini siap menangani lonjakan transaksi dengan latensi minimal.",
                    features: ["RESTful API Integration dengan perlindungan CORS", "Graceful Degradation untuk stabilitas saat sinyal lemah", "SQL Injection Protection & Security Headers"]
                },
                {
                    title: "Tournament Piala Dunia 2026",
                    desc: "Aplikasi web interaktif berdesain Luxury Gold Sports UI. Dirancang dengan fokus pada efisiensi pemrosesan data, platform ini mampu menarik dan memperbarui statistik dari server (API eksternal) secara real-time dan asinkron tanpa membebani browser. Sebuah demonstrasi keahlian manipulasi DOM tingkat lanjut untuk menghadirkan pengalaman pengguna yang instan tanpa jeda pemuatan.",
                    features: ["Seamless Video Transition Loading System", "Live Data Polling & Auto-Update Mechanisms", "Sistem Kuis Interaktif berbasis DOM kilat"]
                },
                {
                    title: "Kylian Mbappe Profil",
                    desc: "Sebuah mahakarya landing page interaktif dengan performa maksimal. Dibangun murni tanpa mengandalkan framework berat, menghasilkan waktu muat (load time) instan dan pengalaman pengguna yang luar biasa mulus. Desain ini menerapkan estetika Glassmorphism premium yang memberikan sentuhan visual eksklusif, dirancang khusus untuk meningkatkan konversi dan merepresentasikan brand berkelas internasional.",
                    features: ["Zero-Dependency Architecture untuk performa 100%", "Animasi Micro-Interactions manual yang elegan", "Pixel-Perfect Responsive Design"]
                },
                {
                    title: "Fanbase Rockstar",
                    desc: "Platform komunitas dengan arsitektur berkinerja tinggi. Proyek ini mendemonstrasikan keahlian tingkat lanjut dalam merancang animasi modern (GSAP) untuk menciptakan efek Scroll-Scrubbing sinematik, memberikan impresi visual mendalam layaknya sebuah video game AAA. Sangat cocok untuk campaign pemasaran yang membutuhkan interaksi pengguna tingkat tinggi.",
                    features: ["Advanced DOM Masking & Radial Reveal Effects", "React Hook teroptimasi untuk stabilitas 60 FPS", "Arsitektur UI modular dan sangat scalable"]
                }
            ],`,
    en: `
            items: [
                {
                    title: "Yalla Store",
                    desc: "An Enterprise-Grade e-commerce system that delivers high performance and cutting-edge security. Uses Server Actions for secure server-side execution, combined with Drizzle ORM (Type-Safe) and lightweight state management from Zustand. This is an end-to-end business solution ensuring fast and reliable transactions.",
                    features: ["Highly Secure Authentication with Better Auth", "Cloudinary Image Optimization & Zod Validation", "Production-ready modern Fullstack Architecture"]
                },
                {
                    title: "Amar Car Rental",
                    desc: "Enterprise platform with Decoupled Client-Server architecture. The frontend is specially built to achieve perfect SEO and lightning-fast interactions. Supported by a robust Laravel Backend with top-tier API security protection (Sanctum Token), this system is ready to handle transaction spikes with minimal latency.",
                    features: ["RESTful API Integration with CORS protection", "Graceful Degradation for weak signal stability", "SQL Injection Protection & Security Headers"]
                },
                {
                    title: "2026 World Cup Tournament",
                    desc: "Interactive web application with Luxury Gold Sports UI design. Designed with a focus on data processing efficiency, this platform can fetch and update statistics from external APIs in real-time and asynchronously without overloading the browser. A demonstration of advanced DOM manipulation skills to deliver instant, lag-free user experiences.",
                    features: ["Seamless Video Transition Loading System", "Live Data Polling & Auto-Update Mechanisms", "Lightning-fast DOM-based Interactive Quiz System"]
                },
                {
                    title: "Kylian Mbappe Profile",
                    desc: "An interactive landing page masterpiece with maximum performance. Built purely without relying on heavy frameworks, resulting in instant load times and exceptionally smooth user experiences. This design applies premium Glassmorphism aesthetics providing an exclusive visual touch, specifically designed to increase conversions and represent an international-class brand.",
                    features: ["Zero-Dependency Architecture for 100% performance", "Elegant manual Micro-Interactions animations", "Pixel-Perfect Responsive Design"]
                },
                {
                    title: "Rockstar Fanbase",
                    desc: "Community platform with high-performance architecture. This project demonstrates advanced skills in designing modern animations (GSAP) to create cinematic Scroll-Scrubbing effects, providing a deep visual impression like a AAA video game. Perfect for marketing campaigns requiring high-level user interaction.",
                    features: ["Advanced DOM Masking & Radial Reveal Effects", "Optimized React Hook for 60 FPS stability", "Modular and highly scalable UI architecture"]
                }
            ],`,
    ar: `
            items: [
                {
                    title: "متجر يلا",
                    desc: "نظام تجارة إلكترونية على مستوى المؤسسات يوفر أداءً عالياً وأماناً متطوراً. يستخدم إجراءات الخادم للتنفيذ الآمن من جانب الخادم، إلى جانب Drizzle ORM (آمن النوع) وإدارة الحالة الخفيفة من Zustand. هذا حل أعمال متكامل يضمن معاملات سريعة وموثوقة.",
                    features: ["مصادقة آمنة للغاية مع Better Auth", "تحسين الصور مع Cloudinary والتحقق من Zod", "بنية Fullstack حديثة جاهزة للإنتاج"]
                },
                {
                    title: "عمار لتأجير السيارات",
                    desc: "منصة مؤسسية بهندسة عميل وخادم منفصلة. تم بناء الواجهة الأمامية خصيصاً لتحقيق تحسين محركات البحث المثالي والتفاعلات السريعة جداً. مدعوم بخادم Laravel قوي مع حماية أمان API من الدرجة الأولى (Sanctum Token)، هذا النظام جاهز للتعامل مع طفرات المعاملات بأقل زمن وصول.",
                    features: ["تكامل واجهة برمجة التطبيقات RESTful مع حماية CORS", "تدهور سلس لاستقرار الإشارة الضعيفة", "حماية من حقن SQL ورؤوس الأمان"]
                },
                {
                    title: "بطولة كأس العالم 2026",
                    desc: "تطبيق ويب تفاعلي بتصميم واجهة رياضية ذهبية فاخرة. تم تصميمه مع التركيز على كفاءة معالجة البيانات، يمكن لهذه المنصة جلب وتحديث الإحصائيات من الخوادم في الوقت الفعلي بشكل غير متزامن دون إثقال المتصفح. عرض لمهارات معالجة DOM المتقدمة لتقديم تجارب مستخدم فورية.",
                    features: ["نظام تحميل انتقال فيديو سلس", "آليات تحديث البيانات التلقائية المباشرة", "نظام مسابقات تفاعلي فائق السرعة"]
                },
                {
                    title: "ملف كيليان مبابي",
                    desc: "تحفة صفحة هبوط تفاعلية بأقصى أداء. تم بناؤه بالكامل دون الاعتماد على أطر عمل ثقيلة، مما يؤدي إلى أوقات تحميل فورية وتجارب مستخدم سلسة للغاية. يطبق هذا التصميم جماليات Glassmorphism المتميزة التي توفر لمسة بصرية حصرية، مصممة خصيصاً لزيادة التحويلات.",
                    features: ["بنية خالية من التبعيات لأداء 100٪", "تفاعلات دقيقة يدوية أنيقة", "تصميم متجاوب بدقة بكسل"]
                },
                {
                    title: "قاعدة جماهير روكستار",
                    desc: "منصة مجتمعية بهندسة عالية الأداء. يوضح هذا المشروع مهارات متقدمة في تصميم الرسوم المتحركة الحديثة (GSAP) لإنشاء تأثيرات سينمائية مبهرة، مما يوفر انطباعاً بصرياً عميقاً مثل لعبة فيديو حديثة. مثالي للحملات التسويقية التي تتطلب تفاعلاً عالياً من المستخدم.",
                    features: ["إخفاء DOM المتقدم وتأثيرات الكشف الشعاعي", "React Hook محسن لاستقرار 60 إطاراً في الثانية", "بنية واجهة مستخدم معيارية وقابلة للتطوير"]
                }
            ],`,
    zh: `
            items: [
                {
                    title: "Yalla 商店",
                    desc: "企业级电子商务系统，提供高性能和尖端安全性。使用 Server Actions 进行安全的服务器端执行，结合 Drizzle ORM（类型安全）和 Zustand 的轻量级状态管理。这是一个端到端的业务解决方案，确保快速可靠的交易。",
                    features: ["使用 Better Auth 的高度安全身份验证", "Cloudinary 图像优化和 Zod 验证", "生产就绪的现代全栈架构"]
                },
                {
                    title: "Amar 汽车租赁",
                    desc: "采用解耦客户端-服务器架构的企业平台。前端专为实现完美的 SEO 和闪电般的交互而构建。由强大的 Laravel 后端和顶级的 API 安全保护（Sanctum Token）支持，该系统随时准备以最小延迟处理交易高峰。",
                    features: ["带有 CORS 保护的 RESTful API 集成", "针对弱信号稳定性的优雅降级", "SQL 注入保护和安全标头"]
                },
                {
                    title: "2026 年世界杯锦标赛",
                    desc: "具有奢华金色体育 UI 设计的交互式 Web 应用程序。在设计时专注于数据处理效率，该平台可以实时异步从外部 API 获取和更新统计数据，而不会增加浏览器负担。高级 DOM 操作技能的展示，提供即时、无延迟的用户体验。",
                    features: ["无缝视频过渡加载系统", "实时数据轮询和自动更新机制", "基于 DOM 的闪电般交互式测验系统"]
                },
                {
                    title: "基利安·姆巴佩个人资料",
                    desc: "具有最高性能的交互式登陆页面杰作。完全不依赖繁重的框架而构建，从而实现即时加载时间和极其流畅的用户体验。该设计应用了高级玻璃拟物化美学，提供独特的视觉体验，专为增加转化率和代表国际级品牌而设计。",
                    features: ["无依赖架构，实现 100% 性能", "优雅的手动微交互动画", "像素级完美的响应式设计"]
                },
                {
                    title: "Rockstar 粉丝群",
                    desc: "具有高性能架构的社区平台。该项目展示了设计现代动画（GSAP）的高级技能，以创建电影般的滚动擦洗效果，提供类似于 AAA 视频游戏的深刻视觉印象。非常适合需要高度用户交互的营销活动。",
                    features: ["高级 DOM 遮罩和径向显示效果", "优化 React Hook 以实现 60 FPS 稳定性", "模块化和高度可扩展的 UI 架构"]
                }
            ],`,
    ja: `
            items: [
                {
                    title: "Yalla ストア",
                    desc: "高いパフォーマンスと最先端のセキュリティを提供するエンタープライズグレードの電子商取引システム。安全なサーバー側実行のために Server Actions を使用し、Drizzle ORM (タイプセーフ) および Zustand の軽量な状態管理と組み合わせています。これは、高速で信頼性の高いトランザクションを保証するエンドツーエンドのビジネスソリューションです。",
                    features: ["Better Auth による安全性の高い認証", "Cloudinary 画像最適化と Zod 検証", "本番環境に対応した最新のフルスタックアーキテクチャ"]
                },
                {
                    title: "Amar レンタカー",
                    desc: "分離されたクライアント・サーバーアーキテクチャを備えたエンタープライズプラットフォーム。フロントエンドは、完璧な SEO と非常に高速な対話を実現するために特別に構築されています。トップ層の API セキュリティ保護 (Sanctum Token) を備えた堅牢な Laravel バックエンドによってサポートされているこのシステムは、最小限のレイテンシでトランザクションの急増に対処する準備ができています。",
                    features: ["CORS 保護を備えた RESTful API 統合", "弱い信号の安定性のためのグレースフルデグラデーション", "SQL インジェクション保護とセキュリティヘッダー"]
                },
                {
                    title: "2026年ワールドカップトーナメント",
                    desc: "豪華なゴールドスポーツ UI デザインを備えたインタラクティブなウェブアプリケーション。データ処理効率に重点を置いて設計されたこのプラットフォームは、ブラウザに過負荷をかけることなく、リアルタイムかつ非同期的に外部 API から統計を取得して更新できます。インスタントでラグのないユーザーエクスペリエンスを提供するための高度な DOM 操作スキルのデモンストレーション。",
                    features: ["シームレスなビデオトランジション読み込みシステム", "ライブデータポーリングと自動更新メカニズム", "超高速の DOM ベースのインタラクティブクイズシステム"]
                },
                {
                    title: "キリアン・ムバッペのプロフィール",
                    desc: "最高のパフォーマンスを備えたインタラクティブなランディングページの傑作。重いフレームワークに頼ることなく純粋に構築されており、即時の読み込み時間と非常にスムーズなユーザーエクスペリエンスをもたらします。このデザインは、コンバージョンを向上させ、国際的なブランドを代表するために特別に設計された、排他的な視覚的タッチを提供するプレミアムなグラスモーフィズムの美学を適用しています。",
                    features: ["100% のパフォーマンスを実現する依存関係のないアーキテクチャ", "エレガントな手動マイクロインタラクションアニメーション", "ピクセルパーフェクトなレスポンシブデザイン"]
                },
                {
                    title: "Rockstar ファンベース",
                    desc: "高性能アーキテクチャを備えたコミュニティプラットフォーム。このプロジェクトは、AAA ビデオゲームのような深い視覚的印象を提供する映画のようなスクロールスクラブ効果を作成するための、最新のアニメーション (GSAP) の設計における高度なスキルを示しています。高度なユーザーインタラクションを必要とするマーケティングキャンペーンに最適です。",
                    features: ["高度な DOM マスキングと放射状の公開効果", "60 FPS の安定性のために最適化された React Hook", "モジュール式で拡張性の高い UI アーキテクチャ"]
                }
            ],`,
    es: `
            items: [
                {
                    title: "Tienda Yalla",
                    desc: "Un sistema de comercio electrónico de grado empresarial que ofrece alto rendimiento y seguridad de vanguardia. Utiliza Server Actions para una ejecución segura del lado del servidor, combinado con Drizzle ORM (Type-Safe) y gestión de estado ligero de Zustand. Esta es una solución empresarial de extremo a extremo que garantiza transacciones rápidas y confiables.",
                    features: ["Autenticación altamente segura con Better Auth", "Optimización de imágenes Cloudinary y validación Zod", "Arquitectura Fullstack moderna lista para producción"]
                },
                {
                    title: "Amar Alquiler de Coches",
                    desc: "Plataforma empresarial con arquitectura Cliente-Servidor desacoplada. El frontend está construido especialmente para lograr un SEO perfecto e interacciones ultrarrápidas. Respaldado por un robusto Backend Laravel con protección de seguridad API de primer nivel (Sanctum Token), este sistema está listo para manejar picos de transacciones con latencia mínima.",
                    features: ["Integración API RESTful con protección CORS", "Degradación elegante para la estabilidad de señales débiles", "Protección contra inyección SQL y encabezados de seguridad"]
                },
                {
                    title: "Torneo Copa del Mundo 2026",
                    desc: "Aplicación web interactiva con diseño de interfaz de usuario deportiva de oro de lujo. Diseñada con un enfoque en la eficiencia del procesamiento de datos, esta plataforma puede obtener y actualizar estadísticas de API externas en tiempo real y de forma asíncrona sin sobrecargar el navegador. Una demostración de habilidades avanzadas de manipulación DOM para ofrecer experiencias de usuario instantáneas y sin demoras.",
                    features: ["Sistema de carga de transición de video sin problemas", "Mecanismos de actualización automática y sondeo de datos en vivo", "Sistema de prueba interactivo basado en DOM ultrarrápido"]
                },
                {
                    title: "Perfil de Kylian Mbappé",
                    desc: "Una obra maestra de página de destino interactiva con el máximo rendimiento. Construido puramente sin depender de marcos de trabajo pesados, lo que resulta en tiempos de carga instantáneos y experiencias de usuario excepcionalmente fluidas. Este diseño aplica una estética premium de Glassmorphism que brinda un toque visual exclusivo, diseñado específicamente para aumentar las conversiones y representar una marca de clase internacional.",
                    features: ["Arquitectura sin dependencias para un rendimiento del 100%", "Elegantes animaciones de microinteracciones manuales", "Diseño responsivo de píxeles perfectos"]
                },
                {
                    title: "Base de Fans de Rockstar",
                    desc: "Plataforma comunitaria con arquitectura de alto rendimiento. Este proyecto demuestra habilidades avanzadas en el diseño de animaciones modernas (GSAP) para crear efectos cinematográficos de desplazamiento, proporcionando una profunda impresión visual como un videojuego AAA. Perfecto para campañas de marketing que requieren una alta interacción del usuario.",
                    features: ["Enmascaramiento DOM avanzado y efectos de revelación radial", "React Hook optimizado para estabilidad de 60 FPS", "Arquitectura de interfaz de usuario modular y altamente escalable"]
                }
            ],`
};

let lines = content.split('\\n');
let newLines = [];

for (let i = 0; i < lines.length; i++) {
    newLines.push(lines[i]);
    if (lines[i].includes('projects: {')) {
        // Find which language we are in by looking back up to 50 lines
        let lang = '';
        for (let j = i; j >= Math.max(0, i - 100); j--) {
            if (lines[j].match(/\\b(id|en|ar|zh|ja|es):\\s*\\{/)) {
                lang = lines[j].match(/\\b(id|en|ar|zh|ja|es):\\s*\\{/)[1];
                break;
            }
        }
        if (lang && projectsItems[lang]) {
            newLines.push(projectsItems[lang]);
        }
    }
}

fs.writeFileSync(translationsPath, newLines.join('\\n'), 'utf8');
console.log('Translations updated successfully.');
