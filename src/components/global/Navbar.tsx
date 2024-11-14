import Link from "next/link";

export default function Navbar() {
  //TODO Remove mb-4
  return (
    <div className="flex gap-4 text-blue-600 bg-gray-200 py-4 mb-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/signup">
        <button className="">Log in</button>
      </Link>
    </div>
  );
}
