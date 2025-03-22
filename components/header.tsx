"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, Search, X, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">
              JobBoard
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                className="pl-8 w-full sm:w-[200px] md:w-[300px] lg:w-[400px]"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/jobs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Jobs
            </Link>
            {isLoggedIn && (
              <Link
                href="/post-job"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Post a Job
              </Link>
            )}
            {isLoggedIn ? (
              <Button variant="ghost" onClick={handleLogout} className="text-sm">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Login
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
            <ModeToggle />
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <div className="px-3 py-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-8 w-full"
                />
              </div>
            </div>
            <Link
              href="/jobs"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            {isLoggedIn && (
              <Link
                href="/post-job"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Post a Job
              </Link>
            )}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 