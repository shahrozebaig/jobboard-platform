"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { JobList } from '@/components/job-list';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function JobsPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Job Board</h1>
        <Button onClick={() => router.push('/post-job')}>
          <Plus className="mr-2 h-4 w-4" />
          Post a Job
        </Button>
      </div>
      <JobList />
    </div>
  );
} 