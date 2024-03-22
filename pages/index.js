import Link from "next/link";

export default function HomePage() {
  return <div>
    <h1>The Home Page</h1>
    <ul>
      <li>
        <Link href="/blog/JJJJJJ">Our Blog SAMPLE</Link>
      </li>
      <li>
        <Link href="/clients">Our Clients</Link>
      </li>
      <li>
        <Link href="/portfolio">Our Portfolio</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>;
}