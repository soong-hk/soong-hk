"use client";
import Image from "next/image";
export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full" style={{ background: "rgba(254,252,249,0.93)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(190,210,213,0.25)" }}>
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-2">
        <a href="/" className="flex items-center gap-2 group">
          <Image src="/SoongHK_Left_Small_Logo.png" alt="鬆啲" width={24} height={24} style={{ objectFit: "contain" }} />
          <div>
            <span className="block text-xl font-bold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--color-sage)" }}>鬆啲</span>
            <span className="block text-xs leading-none tracking-widest" style={{ color: "var(--color-gold)" }}>soong.hk</span>
          </div>
        </a>
        
      </div>
    </header>
  );
}
