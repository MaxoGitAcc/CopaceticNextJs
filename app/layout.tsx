import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "COPACETIC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#030615] min-h-screen h-full text-white">
        <div className="max-w-4xl mx-auto px-4 pt-12">
          <header className="text-4xl font-bold glow-blue">
            <h1>COPACETIC</h1>
          </header>
          <main>
            {children}
          </main>
          <footer>
            {/* Footer content */}
          </footer>
        </div>
      </body>
    </html>
  );
}
