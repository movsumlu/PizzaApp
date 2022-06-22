import ContentLoader from "react-content-loader";

const PizzaCardSkeleton = () => (
  <ContentLoader
    speed={3}
    width={300}
    height={450}
    viewBox="0 0 300 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="117" r="113" />
    <rect x="3" y="250" rx="15" ry="15" width="263" height="36" />
    <rect x="4" y="296" rx="10" ry="10" width="266" height="50" />
    <rect x="7" y="355" rx="10" ry="10" width="122" height="38" />
    <rect x="143" y="356" rx="10" ry="10" width="128" height="37" />
  </ContentLoader>
);

export { PizzaCardSkeleton };
