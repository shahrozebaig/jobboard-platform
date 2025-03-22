"use client"

import { useJobStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Building2, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';

export function JobDetails({ id }: { id: string }) {
  const router = useRouter();
  const jobs = useJobStore((state) => state.jobs);
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8">
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-cover"
              />
              <div className="w-full">
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {job.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Posted {formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{job.type}</Badge>
                  <Badge variant="outline">{job.salary}</Badge>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Job Description</h2>
              <p className="mb-6">{job.description}</p>

              <h2 className="text-lg sm:text-xl font-semibold mb-4">Requirements</h2>
              <ul className="list-disc pl-6 mb-8">
                {job.requirements.map((req, index) => (
                  <li key={index} className="mb-2">{req}</li>
                ))}
              </ul>

              <Button size="lg" className="w-full sm:w-auto">
                Apply Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}