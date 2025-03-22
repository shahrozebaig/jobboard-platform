"use client"

import { useJobStore, type Job } from '@/lib/store';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Building2 } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

export function JobList() {
  const jobs = useJobStore((state) => state.jobs);

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Link href={`/jobs/${job.id}`} key={job.id}>
          <Card className="p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover"
              />
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold">{job.title}</h3>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {job.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {formatDistanceToNow(new Date(job.postedDate), { addSuffix: true })}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="text-sm">
                    {job.salary}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}