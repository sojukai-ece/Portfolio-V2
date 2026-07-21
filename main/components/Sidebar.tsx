"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { 
  FolderGit2, 
  Cpu, 
  User, 
  Camera, 
  Monitor, 
  Sun, 
  Moon, 
  VolumeX, 
  Mail 
} from "lucide-react";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Projects", icon: <FolderGit2 className="w-4 h-4" />, href: "#projects" },
    { name: "Stack", icon: <Cpu className="w-4 h-4" />, href: "#stack" },
    { name: "Background", icon: <User className="w-4 h-4" />, href: "#background" },
    { name: "Photography", icon: <Camera className="w-4 h-4" />, href: "#photography" },
  ];

  return (
    <aside className="w-full md:w-64 md:fixed h-auto md:h-screen border-b md:border-b-0 md:border-r border-border bg-background z-40 flex flex-col font-mono text-[13px]">
      
      {/* Header */}
      <div className="p-6 md:p-8">
        <h1 className="font-sans text-lg font-medium tracking-tight">Benedict Fusin</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 md:px-6 overflow-y-auto hide-scrollbar">
        <ul className="flex flex-col gap-1 mb-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 text-muted hover:text-foreground hover:bg-muted/10 rounded-md transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Keyboard Shortcuts UI (from reference) */}
        <div className="border-t border-border pt-6 px-3 flex flex-col gap-4 text-muted">
          <div className="flex items-center justify-between">
            <span>Ask anything</span>
            <div className="flex gap-1">
              <kbd className="px-1.5 py-0.5 border border-border rounded bg-muted/10 text-[10px]">Alt</kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 border border-border rounded bg-muted/10 text-[10px]">K</kbd>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Terminal</span>
            <div className="flex gap-1">
              <kbd className="px-1.5 py-0.5 border border-border rounded bg-muted/10 text-[10px]">Alt</kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 border border-border rounded bg-muted/10 text-[10px]">T</kbd>
            </div>
          </div>
        </div>
      </nav>

      {/* Footer / Toggles */}
      <div className="p-6 md:p-8 flex flex-col gap-6">
        
        {/* Toggles */}
        {mounted && (
          <div className="flex gap-2">
            <div className="flex border border-border rounded-full overflow-hidden p-0.5">
              <button onClick={() => setTheme("system")} className={`p-1.5 rounded-full ${theme === 'system' ? 'bg-muted/20 text-foreground' : 'text-muted hover:text-foreground'}`}>
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setTheme("light")} className={`p-1.5 rounded-full ${theme === 'light' ? 'bg-muted/20 text-foreground' : 'text-muted hover:text-foreground'}`}>
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setTheme("dark")} className={`p-1.5 rounded-full ${theme === 'dark' ? 'bg-muted/20 text-foreground' : 'text-muted hover:text-foreground'}`}>
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>
            <button className="p-1.5 border border-border rounded-full text-muted hover:text-foreground hover:bg-muted/10 transition-colors">
              <VolumeX className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Contact */}
        <div className="text-muted text-[12px] leading-relaxed">
          For work, collabs & everything else, reach me at
          <a href="mailto:benedict@example.com" className="flex items-center gap-2 text-foreground hover:underline mt-2">
            <Mail className="w-3.5 h-3.5" />
            benedictfusin99@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
}