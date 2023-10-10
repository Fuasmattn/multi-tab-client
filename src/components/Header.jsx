import { useLocation } from "preact-iso";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          First
        </a>
        <a href="/second" class={url == "/second" && "active"}>
          Second
        </a>
      </nav>
    </header>
  );
}
