import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import NeuralNetworkCanvas from "@/components/NeuralNetworkCanvas";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Benedict Fusin — Engineer & Developer",
  description: "Electronics engineering and systems architecture portfolio.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased selection:bg-foreground selection:text-background transition-colors duration-300">
        <ThemeProvider>
          <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            
            <div className="flex-1 md:ml-64 relative">
              {/* The matrix stays confined to the scrolling content area */}
              <NeuralNetworkCanvas />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}