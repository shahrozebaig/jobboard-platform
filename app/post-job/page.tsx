"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useJobStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

export default function PostJob() {
  const router = useRouter();
  const addJob = useJobStore((state) => state.addJob);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    requirements: '',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Job title is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.type) {
      newErrors.type = 'Job type is required';
    }
    
    if (!formData.salary.trim()) {
      newErrors.salary = 'Salary range is required';
    }
    
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Requirements are required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Job description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Convert requirements string to array
    const requirementsArray = formData.requirements
      .split('\n')
      .filter(req => req.trim() !== '');

    // Create new job object
    const newJob = {
      id: Date.now().toString(), // Simple ID generation
      ...formData,
      requirements: requirementsArray,
      postedDate: new Date().toISOString(),
    };

    try {
      // Add job to store
      addJob(newJob);

      // Show success message
      toast.success('Your job has been posted successfully!');

      // Redirect to jobs page
      router.push('/jobs');
    } catch (error) {
      toast.error('Failed to post job. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="md:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">Post a New Job</h1>
          </div>
          
          <Card className="p-4 md:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Senior Frontend Developer"
                  className={`w-full ${errors.title ? 'border-red-500' : ''}`}
                />
                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g., TechCorp"
                  className={`w-full ${errors.company ? 'border-red-500' : ''}`}
                />
                {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g., Remote or New York, NY"
                  className={`w-full ${errors.location ? 'border-red-500' : ''}`}
                />
                {errors.location && <p className="text-sm text-red-500">{errors.location}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Job Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => {
                    setFormData(prev => ({ ...prev, type: value }));
                    if (errors.type) {
                      setErrors(prev => ({ ...prev, type: '' }));
                    }
                  }}
                >
                  <SelectTrigger className={`w-full ${errors.type ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Freelance">Freelance</SelectItem>
                    <SelectItem value="Temporary">Temporary</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && <p className="text-sm text-red-500">{errors.type}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary">Salary Range</Label>
                <Input
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g., $80,000 - $120,000"
                  className={`w-full ${errors.salary ? 'border-red-500' : ''}`}
                />
                {errors.salary && <p className="text-sm text-red-500">{errors.salary}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements (one per line)</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="5+ years of experience&#10;React proficiency&#10;TypeScript knowledge&#10;Team leadership&#10;Problem-solving skills"
                  className={`min-h-[100px] w-full ${errors.requirements ? 'border-red-500' : ''}`}
                />
                {errors.requirements && <p className="text-sm text-red-500">{errors.requirements}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the role, responsibilities, and ideal candidate..."
                  className={`min-h-[150px] w-full ${errors.description ? 'border-red-500' : ''}`}
                />
                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <Button type="submit" className="flex-1">
                  Post Job
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
} 