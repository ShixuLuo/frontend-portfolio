type StructureType = 'component' | 'page' | 'app';

type CollectionEntry = {
  structure: StructureType;
  name: string;
  path?: string;
};

const collection: CollectionEntry[] = [
  {
    structure: "component",
    name: "QR Code",
    path: "/components/QR-code-component",
  },
  {
    structure: "component",
    name: "Blog Preview",
    path: "/components/blog-preview-card",
  },
  {
    structure: "component",
    name: "Social Link Profile",
    path: "/components/social-links-profile",
  },
  {
    structure: "page",
    name: "Recipe Page",
    path: "/components/recipe-page"
  },
  {
    structure: "component",
    name: "Product Preview",
    path: "/components/product-preview-card-component",
  },
  {
    structure: "page",
    name: "Four Card Features",
    path: "/components/four-card-features-section",
  },
  {
    structure: "page",
    name: "Testimonial Grid Section",
    path: "/components/testimonial-grid-section",
  },
  {
    structure: "page",
    name: "Meet Landing",
    path: "/components/meet-landing-page"
  },
  {
    structure: "component",
    name: "Article Preview",
    path: "/components/article-preview-component",
  },
  {
    structure: "page",
    name: "Newsletter Sign-up Form with Success Message",
    path: "/components/newsletter-sign-up-with-success-message",
  },
  {
    structure: "page",
    name: "Time Tracking Dashboard",
    path: "/components/time-tracking-dashboard",
  },
  {
    structure: "app",
    name: "Tip Calculator App",
    path: "/components/tip-calculator-app",
  },
  {
    structure: "app",
    name: "Password Generator App",
  },
];

export default collection;
