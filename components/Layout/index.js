import Link from 'next/link';

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/projects', label: 'Projects', id: 2 },
  { path: '/about', label: 'About me', id: 3 }
];

export default function Layout({ children }) {
  return (
    <div className="p-10 font-mono max-w-screen-xl mx-auto">
      <nav className="bg-cyan-700 p-5 flex justify-center rounded-t-lg">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <a className="shadow w-40 bg-blue-50 p-2 px-4 m-2 text-center hover:bg-gray-100 rounded-md">
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
      <main className="bg-gray-100 p-5">{children}</main>
      <footer className="bg-cyan-700 p-5 text-gray-100 text-center rounded-b-lg">
        ©️ Katarzyna Maciejewska, {new Date().getFullYear()}
      </footer>
    </div>
  );
}
