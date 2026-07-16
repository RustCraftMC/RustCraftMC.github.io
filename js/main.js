/* RustCraft site — i18n, nav, scroll reveal, stat counters */
(function () {
  "use strict";

  /* ---------------- i18n ---------------- */
  const dict = {
    zh: {
      "nav.features": "特性",
      "nav.stack": "技术栈",
      "nav.build": "构建运行",
      "nav.lua": "Lua 模组",
      "nav.docs": "API 文档",
      "lua.title": "Lua 模组系统",
      "lua.desc": "内置完整的客户端模组框架：每个模组运行在隔离的 Lua 5.4 沙箱中，通过声明式权限访问事件驱动的 API。",
      "lua.p1t": "🧱 隔离沙箱",
      "lua.p1d": "每个模组拥有独立的 Lua 5.4 状态机，无文件系统、OS 与原生代码访问；单模组 16 MiB 内存上限、25 万指令数熔断。",
      "lua.p2t": "🔑 权限模型",
      "lua.p2d": "manifest.json 声明所需能力；网络修改、封包发送、协议翻译等敏感权限需在 permissions.json 中显式批准。",
      "lua.p3t": "♻️ 热重载",
      "lua.p3d": "游戏内 /mods reload 即可重载模组，配置项自动生成可视化设置界面，错误隔离不影响其他模组。",
      "lua.p4t": "🧩 内置模组",
      "lua.p4d": "Keystrokes HUD、Old Animations、PVP Tweaks 等官方模组均由该框架实现，可直接参考源码。",
      "docs.title": "Lua API 文档",
      "docs.desc": "完整的模组开发文档共 22 章，按主题索引如下（外链至官方文档站）。",
      "docs.c1tag": "入门",
      "docs.c1t": "快速上手",
      "docs.c1d": "模组结构、manifest、权限申请、生命周期与热重载、配置项定义、事件系统基础。",
      "docs.c2tag": "客户端",
      "docs.c2t": "客户端 API",
      "docs.c2d": "game.client / player / input / ui / world —— 快照读取、FOV 与相机覆盖、输入观察、世界与实体查询。",
      "docs.c3tag": "网络",
      "docs.c3t": "网络与协议",
      "docs.c3d": "封包观察 / 修改 / 取消 / 发送，连接事件，以及跨版本协议翻译器（47 ↔ 其他版本）。",
      "docs.c4tag": "渲染",
      "docs.c4t": "渲染与动画",
      "docs.c4d": "第一人称手臂 / 物品变换、HUD 绘制（文字 / 矩形 / 线条 / 图片）、渲染事件总线、模组资源。",
      "docs.c5tag": "数据",
      "docs.c5t": "数据与诊断",
      "docs.c5d": "模组级持久化键值存储、日志输出、tick 生命周期事件与调试手段。",
      "docs.c6tag": "参考",
      "docs.c6t": "参考手册",
      "docs.c6d": "完整事件参考表、安全限制与运行时配额，以及一个端到端的完整模组示例。",
      "docs.cta": "浏览完整文档 ↗",
      "hero.badge": "协议 47 · Minecraft 1.8.9 · Vulkan",
      "hero.sub": "用 Rust 从零复刻的 Minecraft 1.8.9 客户端 —— Vulkan 渲染，可连接真实服务器",
      "hero.cta1": "开始构建",
      "hero.cta2": "查看源码",
      "hero.stat1": "Rust 源文件",
      "hero.stat2": "行代码",
      "hero.stat3": "协议版本",
      "hero.stat4": "GLSL 着色器",
      "features.title": "特性",
      "features.desc": "完整的客户端体验：从网络协议到渲染管线，全部使用 Rust 实现。",
      "features.f1t": "1.8.9 协议网络",
      "features.f1d": "完整实现 Minecraft 1.8.9（协议 47）网络栈：数据包、NBT、AES/RSA 加密与 zlib 压缩，可直接连接真实服务器。",
      "features.f2t": "Vulkan 渲染管线",
      "features.f2d": "基于 ash 的 Vulkan 后端：区块网格并行构建（rayon）、天空盒、实体模型、粒子系统与附魔光效。",
      "features.f3t": "Microsoft 认证",
      "features.f3d": "Microsoft / Xbox Live OAuth 登录全流程，带本地账号缓存，支持正版服务器验证。",
      "features.f4t": "Lua 模组系统",
      "features.f4d": "内置 mlua（Lua 5.4）脚本桥接，Keystrokes HUD 等模组可通过 Lua 编写与热加载。",
      "features.f5t": "完整世界系统",
      "features.f5d": "区块 / 方块 / 实体 / 光照全栈实现，含流体与连接玻璃等原版渲染行为对齐。",
      "features.f6t": "UI · 音频 · 手柄",
      "features.f6d": "自绘 UI 与字体渲染（fontdue）、rodio 音频回放、gilrs 跨平台手柄输入，资源包与皮肤加载一应俱全。",
      "stack.title": "技术栈",
      "stack.desc": "无游戏引擎，从窗口到像素全部手写。Rust 2021 edition。",
      "stack.h1": "分类",
      "stack.h2": "用途",
      "stack.r1c1": "窗口与输入", "stack.r1c3": "窗口、键鼠与手柄事件",
      "stack.r2c1": "图形渲染", "stack.r2c3": "Vulkan 绑定与显存分配",
      "stack.r3c1": "着色器", "stack.r3c3": "build.rs 编译 GLSL → SPIR-V",
      "stack.r4c1": "数学", "stack.r4c3": "线性代数与变换",
      "stack.r5c1": "网络", "stack.r5c3": "HTTP 与协议压缩",
      "stack.r6c1": "加密", "stack.r6c3": "协议加密与正版验证",
      "stack.r7c1": "脚本", "stack.r7c3": "Lua 5.4 模组桥接",
      "stack.r8c1": "音频 / 图像 / 字体", "stack.r8c3": "声音回放、纹理加载、字体光栅化",
      "stack.r9c1": "并发", "stack.r9c3": "并行区块网格构建",
      "build.title": "构建与运行",
      "build.desc": "需要 Rust 工具链与支持 Vulkan 的 GPU 驱动。",
      "build.n1t": "📦 资源",
      "build.n1d": "运行时需要 Minecraft 1.8.9 客户端资源（纹理 / 声音），放置于 assets/ 目录。",
      "build.n2t": "🔐 认证",
      "build.n2d": "首次登录走 Microsoft OAuth 浏览器授权，之后令牌缓存在本地。",
      "build.n3t": "🎮 参考源码",
      "build.n3d": "仓库内 minecraft/ 目录为反编译的 1.8.9 Java 源码，仅用于行为对照。",
      "arch.title": "项目结构",
      "footer.tag": "独立技术复刻 · 仅供学习交流",
      "footer.legal": "Minecraft 为 Mojang Studios / Microsoft 的商标。本项目与 Mojang 及 Microsoft 无任何关联。"
    },
    en: {
      "nav.features": "Features",
      "nav.stack": "Tech Stack",
      "nav.build": "Build & Run",
      "nav.lua": "Lua Modding",
      "nav.docs": "API Docs",
      "lua.title": "Lua Modding System",
      "lua.desc": "A complete client-side modding framework: every mod runs in an isolated Lua 5.4 sandbox and accesses an event-driven API through declared permissions.",
      "lua.p1t": "🧱 Isolated Sandbox",
      "lua.p1d": "Each mod gets its own Lua 5.4 state — no filesystem, OS, or native code access. 16 MiB memory cap and a 250k-instruction circuit breaker per mod.",
      "lua.p2t": "🔑 Permission Model",
      "lua.p2d": "manifest.json declares capabilities; sensitive ones like packet modification/sending and protocol translators require explicit approval in permissions.json.",
      "lua.p3t": "♻️ Hot Reload",
      "lua.p3d": "Reload mods in-game with /mods reload. Config entries auto-generate a settings UI, and error isolation keeps other mods unaffected.",
      "lua.p4t": "🧩 Built-in Mods",
      "lua.p4d": "Official mods like Keystrokes HUD, Old Animations, and PVP Tweaks are built on this framework — read their source to get started.",
      "docs.title": "Lua API Documentation",
      "docs.desc": "The full modding documentation spans 22 chapters, indexed by topic below (external links to the official docs site).",
      "docs.c1tag": "Start",
      "docs.c1t": "Getting Started",
      "docs.c1d": "Mod structure, manifest, permissions, lifecycle & hot reload, config definitions, and event system basics.",
      "docs.c2tag": "Client",
      "docs.c2t": "Client APIs",
      "docs.c2d": "game.client / player / input / ui / world — snapshots, FOV & camera overrides, input observation, world and entity queries.",
      "docs.c3tag": "Network",
      "docs.c3t": "Network & Protocol",
      "docs.c3d": "Packet observe / modify / cancel / send, connection events, and cross-version protocol translators (47 ↔ others).",
      "docs.c4tag": "Render",
      "docs.c4t": "Rendering & Animation",
      "docs.c4d": "First-person arm/item transforms, HUD drawing (text / rect / line / image), render event bus, and mod resources.",
      "docs.c5tag": "Data",
      "docs.c5t": "Data & Diagnostics",
      "docs.c5d": "Per-mod persistent key-value storage, logging, tick lifecycle events, and debugging tools.",
      "docs.c6tag": "Reference",
      "docs.c6t": "Reference",
      "docs.c6d": "Complete event reference, safety limits & runtime quotas, and an end-to-end example mod.",
      "docs.cta": "Browse Full Docs ↗",
      "hero.badge": "Protocol 47 · Minecraft 1.8.9 · Vulkan",
      "hero.sub": "A Minecraft 1.8.9 client clone written from scratch in Rust — Vulkan-rendered, connects to real servers.",
      "hero.cta1": "Get Started",
      "hero.cta2": "View Source",
      "hero.stat1": "Rust source files",
      "hero.stat2": "Lines of code",
      "hero.stat3": "Protocol version",
      "hero.stat4": "GLSL shaders",
      "features.title": "Features",
      "features.desc": "A complete client experience — from the network protocol to the render pipeline, all in Rust.",
      "features.f1t": "1.8.9 Protocol Networking",
      "features.f1d": "Full Minecraft 1.8.9 (protocol 47) network stack: packets, NBT, AES/RSA encryption and zlib compression. Connects to real servers.",
      "features.f2t": "Vulkan Render Pipeline",
      "features.f2d": "ash-based Vulkan backend: parallel chunk meshing with rayon, custom sky, entity models, particles and enchantment glint.",
      "features.f3t": "Microsoft Authentication",
      "features.f3d": "Full Microsoft / Xbox Live OAuth login flow with local account caching and online-mode server verification.",
      "features.f4t": "Lua Modding",
      "features.f4d": "Embedded mlua (Lua 5.4) script bridge — mods like the Keystrokes HUD can be written and hot-reloaded in Lua.",
      "features.f5t": "Complete World System",
      "features.f5d": "Chunks, blocks, entities and lighting end-to-end, with vanilla-accurate fluids and connected glass rendering.",
      "features.f6t": "UI · Audio · Gamepad",
      "features.f6d": "Custom UI and font rendering (fontdue), rodio audio playback, gilrs cross-platform gamepad input, resource packs and skins.",
      "stack.title": "Tech Stack",
      "stack.desc": "No game engine — everything from the window to the pixels is hand-written. Rust 2021 edition.",
      "stack.h1": "Category",
      "stack.h2": "Purpose",
      "stack.r1c1": "Windowing & Input", "stack.r1c3": "Window, keyboard/mouse & gamepad events",
      "stack.r2c1": "Graphics", "stack.r2c3": "Vulkan bindings & GPU memory allocation",
      "stack.r3c1": "Shaders", "stack.r3c3": "build.rs compiles GLSL → SPIR-V",
      "stack.r4c1": "Math", "stack.r4c3": "Linear algebra & transforms",
      "stack.r5c1": "Networking", "stack.r5c3": "HTTP & protocol compression",
      "stack.r6c1": "Crypto", "stack.r6c3": "Protocol encryption & session verification",
      "stack.r7c1": "Scripting", "stack.r7c3": "Lua 5.4 mod bridge",
      "stack.r8c1": "Audio / Image / Font", "stack.r8c3": "Sound playback, texture loading, font rasterization",
      "stack.r9c1": "Concurrency", "stack.r9c3": "Parallel chunk mesh building",
      "build.title": "Build & Run",
      "build.desc": "Requires a Rust toolchain and a GPU driver with Vulkan support.",
      "build.n1t": "📦 Assets",
      "build.n1d": "Minecraft 1.8.9 client assets (textures / sounds) are required at runtime — place them in the assets/ directory.",
      "build.n2t": "🔐 Authentication",
      "build.n2d": "First sign-in uses the Microsoft OAuth browser flow; tokens are then cached locally.",
      "build.n3t": "🎮 Reference Sources",
      "build.n3d": "The minecraft/ directory in the repo contains decompiled 1.8.9 Java sources for behavioral reference only.",
      "arch.title": "Project Structure",
      "footer.tag": "Independent reimplementation · for educational purposes",
      "footer.legal": "Minecraft is a trademark of Mojang Studios / Microsoft. This project is not affiliated with Mojang or Microsoft."
    }
  };

  const html = document.documentElement;
  const toggle = document.getElementById("langToggle");
  let lang = localStorage.getItem("rc-lang") || "zh";

  function applyLang(next) {
    lang = next;
    localStorage.setItem("rc-lang", lang);
    html.lang = lang === "zh" ? "zh-CN" : "en";
    toggle.textContent = lang === "zh" ? "EN" : "中文";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = dict[lang][key];
      if (text) el.textContent = text;
    });
  }

  toggle.addEventListener("click", () => applyLang(lang === "zh" ? "en" : "zh"));
  applyLang(lang);

  /* ---------------- Nav ---------------- */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  burger.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );

  /* ---------------- Scroll reveal ---------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------------- Animated counters ---------------- */
  function formatNum(n) {
    return n >= 10000 ? Math.round(n / 1000) + "k" : String(n);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counterObserver.unobserve(el);
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatNum(Math.round(target * eased)) + (p === 1 ? suffix : "");
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll(".stat-num").forEach((el) => counterObserver.observe(el));
})();
