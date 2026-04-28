export const registry = {
  home: () => import("/views/core-pages/home.js"),
  contact: () => import("/views/core-pages/contact.js"),
  pedagogie: () => import("/views/core-pages/pedagogie.js"),

  solutions: () => import("/views/solutions/solutions.js"),
  "solutions-universites": () => import("/views/solutions/solutions-universites.js"),
  "solutions-centres-formation": () => import("/views/solutions/solutions-centres-formation.js"),
  "solutions-entreprises": () => import("/views/solutions/solutions-entreprises.js"),
  "solutions-associations": () => import("/views/solutions/solutions-associations.js"),
  "solutions-business-english": () => import("/views/solutions/solutions-business-english.js"),

  cases: () => import("/views/cases/cases.js"),
  case: () => import("/views/cases/case.js")
};
