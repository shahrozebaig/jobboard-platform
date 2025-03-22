"use client"

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useJobStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import type { Job } from '@/lib/store';

export default function JobDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const getJob = useJobStore(state => state.getJob);
  const [job, setJob] = useState<Job | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jobData = getJob(params.id);
    setJob(jobData);
    setIsLoading(false);
  }, [params.id, getJob]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <Button onClick={() => router.push('/jobs')}>Back to Jobs</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="md:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">{job.title}</h1>
          </div>

          <Card className="p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <img
                    src={job.companyLogo}
                    alt={`${job.company} logo`}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-lg font-semibold">{job.company}</span>
                </div>
                <div className="text-muted-foreground">
                  <p>{job.location}</p>
                  <p>{job.type}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button onClick={() => router.push(`/jobs/${params.id}/apply`)}>
                  Apply Now
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Salary</h2>
                <p>{job.salary}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="whitespace-pre-line">{job.description}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Requirements</h2>
                <ul className="list-disc list-inside space-y-1">
                  {job.requirements.map((requirement: string, index: number) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Posted</h2>
                <p>{job.postedDate}</p>
              </div>
            </div>
          </Card>

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={() => router.back()}>
              Back to Jobs
            </Button>
            <Button onClick={() => router.push(`/jobs/${params.id}/apply`)}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}