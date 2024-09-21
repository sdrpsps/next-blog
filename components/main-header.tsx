import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="my-8">
      <h1 className="text-2xl font-extrabold ">Sunny&apos;s Blog</h1>
      <nav className="mt-4">
        <ul className="flex gap-4">
          <li className="link">
            <Link href="/">Home</Link>
          </li>
          <li className="link">
            <Link href="/posts">Posts</Link>
          </li>
          <li className="link">
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
