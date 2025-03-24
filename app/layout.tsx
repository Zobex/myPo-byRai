// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css"; // Global styles
import Navbar from "./components/main/Navbar";

export default function RootLayout({
  children, // This represents the page content
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Navbar /> {/* Add Navbar to all pages */}
        <main>{children}</main> {/* Page content goes here */}
      </body>
    </html>
  );
}
