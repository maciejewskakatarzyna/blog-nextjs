import Link from 'next/link';

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/projects', label: 'Projects', id: 2 },
  { path: '/about', label: 'About me', id: 3 }
];

export default function Layout({ children }) {
  return (
    <div className="p-10 font-sans max-w-screen-xl mx-auto bg-bcg">
      <nav className="p-5 flex justify-end">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <a className="shadow p-2 px-4 m-2 text-center hover:font-bold text-white">
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
      <main className="bg-bcg p-5">{children}</main>
      <hr className="border-slate-800" />
      <footer className="bg-bcg p-5 text-gray-100 text-start">
        ©️ Copyright {new Date().getFullYear()} by Katarzyna Maciejewska
      </footer>
    </div>
  );
}
