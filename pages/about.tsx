import Link from 'next/link';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Asher Dean">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/magnetic">@magnetic</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/magnetoasher">@magnetic</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://magnetic">
                <a>https://magnetic</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/magnetic/">
                https://www.linkedin.com/in/magnetic
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <h2>Headshots</h2>
        </div>
      </div>
    </Container>
  );
}
