import React from "react";
import CareerClient, { JobPosition } from "./CareerClient";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

async function getJobs(): Promise<JobPosition[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/careers/jobs/`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.jobs)) {
        return data.jobs;
      }
    }
  } catch (err) {
    console.error("Error fetching jobs on server:", err);
  }
  return [];
}

export default async function CareerPage() {
  const initialJobs = await getJobs();

  // Create JobPosting JSON-LD for Google Search & Google Careers SEO
  const jobPostingSchemas = initialJobs.map((job) => ({
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description || `${job.title} position at Autofya in ${job.category}.`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Autofya",
      "value": String(job.id),
    },
    "datePosted": job.date_posted || job.datePosted || new Date().toISOString(),
    "validThrough": job.application_deadline || job.applicationDeadline || undefined,
    "employmentType": job.type?.toUpperCase().replace("-", "_") || "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Autofya",
      "sameAs": "https://autofya.com",
      "logo": "https://autofya.com/favicon.png",
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD",
      },
    },
  }));

  return (
    <>
      {jobPostingSchemas.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchemas) }}
        />
      )}
      <CareerClient initialJobs={initialJobs} />
    </>
  );
}
