"use client";

import type React from "react";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isDashboardPage = pathname.startsWith("/dashboard");

  return (
    <div className="flex min-h-screen flex-col">
      {!isLoginPage && !isDashboardPage && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isLoginPage && !isDashboardPage && <Footer />}
    </div>
  );
}
