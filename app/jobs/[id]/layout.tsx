import { mockJobs, type Job } from '@/lib/store';

export function generateStaticParams() {
  return mockJobs.map((job: Job) => ({
    id: job.id,
  }));
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
} 