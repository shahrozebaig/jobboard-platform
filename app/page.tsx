import { JobList } from '@/components/job-list';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { BriefcaseIcon, Search } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Find Your Next Career Opportunity
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Browse through hundreds of job listings from top companies
            </p>
            <div className="flex gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs, companies, or keywords..."
                  className="pl-10"
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Latest Job Openings</h2>
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </div>
            <JobList />
          </div>
        </div>
      </main>
    </div>
  );
}