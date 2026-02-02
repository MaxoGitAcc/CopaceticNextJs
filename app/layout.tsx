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
      <head />
      <body className="bg-black min-h-screen h-full text-white">
        {children}
      </body>
    </html>
  );
}
