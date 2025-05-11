type StructureType = 'component' | 'page' | 'app';

type CollectionEntry = {
  structure: StructureType;
  name: string;
  path: string;
};

const collection: CollectionEntry[] = [
  {
    structure: "component",
    name: "QR Code",
    path: "/components/QR-code-component/index.html",
  },
  {
    structure: "component",
    name: "Blog Preview",
    path: "/components/blog-preview-card/index.html",
  },
  {
    structure: "component",
    name: "Social Link Profile",
    path: "/components/social-links-profile/index.html",
  },
  {
    structure: "page",
    name: "Recipe Page",
    path: "/components/recipe-page/index.html"
  },
  {
    structure: "component",
    name: "Product Preview",
    path: "/components/product-preview-card-component/index.html",
  },
  {
    structure: "page",
    name: "Four Card Features",
    path: "/components/four-card-features-section/index.html",
  },
  {
    structure: "page",
    name: "Testimonial Grid Section",
    path: "/components/testimonial-grid-section/index.html",
  },
  {
    structure: "page",
    name: "Meet Landing",
    path: "/components/meet-landing-page/index.html"
  },
  {
    structure: "component",
    name: "Article Preview",
    path: "/components/article-preview-component/index.html",
  },
  {
    structure: "page",
    name: "Newsletter Sign-up Form with Success Message",
    path: "/components/newsletter-sign-up-with-success-message/index.html",
  },
  {
    structure: "page",
    name: "Time Tracking Dashboard",
    path: "/components/time-tracking-dashboard/index.html",
  },
  {
    structure: "app",
    name: "Tip Calculator App",
    path: "/components/tip-calculator-app/index.html",
  },
  {
    structure: "app",
    name: "Password Generator App",
    path: "/components/password-generator-app",
  },
];

export default collection;
