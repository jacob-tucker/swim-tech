import "@picocss/pico";
import "../styles/globals.css";
import { useEffect } from "react";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let html = document.querySelector('html');
    html.setAttribute('data-theme', 'dark');
  }, [])

  return (
    <div>
      <nav className="container header">
        <ul>
          <h1>Swim Tech</h1>
        </ul>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
