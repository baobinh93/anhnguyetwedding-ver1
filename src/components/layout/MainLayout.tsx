import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Header />
      <main className="relative flex w-full flex-col bg-surface pt-16 pb-24 lg:pt-20 lg:pb-0">
        {children}
      </main>
      <div className="hidden lg:block">
        <Footer />
      </div>
      <MobileBottomNav />
    </div>
  );
}
