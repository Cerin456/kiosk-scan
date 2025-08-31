import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Upload, 
  FileCheck, 
  History, 
  Settings, 
  Maximize,
  Minimize
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  kioskMode?: boolean;
}

const Layout = ({ children, kioskMode = false }: LayoutProps) => {
  const location = useLocation();
  const [isKioskMode, setIsKioskMode] = useState(kioskMode);

  useEffect(() => {
    setIsKioskMode(kioskMode);
  }, [kioskMode]);

  useEffect(() => {
    if (isKioskMode) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, [isKioskMode]);

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Evaluate", href: "/evaluate", icon: Upload },
    { name: "Results", href: "/results", icon: FileCheck },
    { name: "History", href: "/history", icon: History },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  if (isKioskMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsKioskMode(false)}
            className="bg-card/80 backdrop-blur-sm"
          >
            <Minimize className="w-4 h-4 mr-2" />
            Exit Kiosk
          </Button>
        </div>
        <main className="pt-16 pb-8 px-8">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <nav className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                EduScan.ai
              </h1>
              <div className="hidden md:flex space-x-1">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link key={item.name} to={item.href}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        size="sm"
                        className={cn(
                          "flex items-center space-x-2",
                          isActive && "bg-primary text-primary-foreground"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsKioskMode(true)}
              className="flex items-center space-x-2"
            >
              <Maximize className="w-4 h-4" />
              <span>Kiosk Mode</span>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;