import { registry } from "/core/registry.js";

const Router = (() => {

  let currentLocation = null;

  const normalizePath = (path) => {
    if (!path) return "/";
    if (path === "/index.html") return "/";
    return path.replace(/\/$/, "") || "/";
  };

  const splitLocation = (rawPath) => {
    const [pathPart, hashPart = ""] = (rawPath || "").split("#");

    return {
      path: normalizePath(pathPart || "/"),
      hash: hashPart
    };
  };

  const resolveRoute = (path) => {

    const clean = normalizePath(path);

    const caseMatch = clean.match(/^\/cases\/([^/]+)$/);
    if (caseMatch) {
      return { view: "case", param: caseMatch[1] };
    }

    if (clean === "/cases") return { view: "cases" };

    const solMatch = clean.match(/^\/solutions\/([^/]+)$/);
    if (solMatch) return { view: `solutions-${solMatch[1]}` };

    if (clean === "/solutions") return { view: "solutions" };
    if (clean === "/notre-pedagogie") return { view: "pedagogie" };
    if (clean === "/") return { view: "home" };
    if (clean === "/contact") return { view: "contact" };

    throw new Error("Route introuvable : " + clean);
  };

  const render = async (rawPath) => {

    const { path, hash } = splitLocation(rawPath);
    const nextLocation = hash ? `${path}#${hash}` : path;

    if (currentLocation === nextLocation) return;
    currentLocation = nextLocation;

    try {

      window.showLoader?.();

      const route = resolveRoute(path);

      const loader = registry[route.view];

      if (!loader) {
        throw new Error("View not registered: " + route.view);
      }

      const module = await loader();
      const html = await module.default(route.param);

      const app = document.getElementById("app");

      app.classList.add("fade-out");

      setTimeout(() => {

        app.innerHTML = html;
        app.classList.remove("fade-out");

        window.hideLoader?.();
        window.initAnimations?.();
        window.scrollTo(0, 0);

        setActiveNav(path);
        applyRouteState(path, hash);
        window.applyRouteMetadata?.(path);

      }, 120);

    } catch (err) {

      console.error("Router error:", err);

      window.hideLoader?.();

      document.getElementById("app").innerHTML = `
        <section class="section center">
          <h1>Page indisponible</h1>
          <p class="subtitle">La route demandée n'existe pas ou le module associé est introuvable.</p>
          <button onclick="navigate('/')">Retour à l'accueil</button>
        </section>
      `;
    }
  };

  const navigate = (path, hash = "") => {
    const target = hash ? `${path}#${hash}` : path;
    window.history.pushState({}, "", target);
    render(target);
  };

  const init = () => {
    render(window.location.pathname + window.location.hash);

    window.addEventListener("popstate", () => {
      render(window.location.pathname + window.location.hash);
    });
  };

  const setActiveNav = (path) => {
    const clean = normalizePath(path);

    document.querySelectorAll(".nav a, .nav-links > a, .nav-dropdown > a").forEach(a => {
      const link = normalizePath(a.getAttribute("href"));
      const isSolutionsGroup = link === "/solutions" && clean.startsWith("/solutions");
      const isCasesGroup = link === "/cases" && clean.startsWith("/cases");
      const isExactMatch = link === clean;
      const isActive = isExactMatch || isSolutionsGroup || isCasesGroup;

      a.classList.toggle("active", isActive);
      if (isActive) {
        a.setAttribute("aria-current", "page");
      } else {
        a.removeAttribute("aria-current");
      }
    });
  };

  const applyRouteState = (path, hash) => {
    if (!hash) return;

    if (path === "/solutions" || path === "/cases") {
      window.filterCases?.(hash);
    }

    if (path === "/notre-pedagogie") {
      window.filterPedagogy?.(hash);
    }
  };

  return { init, navigate };

})();

export default Router;
