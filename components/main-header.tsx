import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <h1 className="text-2xl font-bold my-8">Sunny&apos;s Blog</h1>
      <nav>
        <ul className="flex gap-4">
          <li className="link">
            <Link href="/">Home</Link>
          </li>
          <li className="link">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
