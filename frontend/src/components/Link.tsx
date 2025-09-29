import { usePageContext } from "vike-react/usePageContext";

export function Link({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return (
    <a
      href={href}
      className={[isActive ? "is-active" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </a>
  );
}
