# Personal Site - dgomezg.dev

This is the source code for my personal website, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Project Structure

*   `src/content/`: Contains the markdown files for the site content.
    *   `experience/`: Professional experience entries.
    *   `talks/`: Conference talks and presentations.
    *   `blog/`: Blog posts (English and Spanish).
*   `src/pages/`: Astro components that define the site's pages.
*   `src/layouts/`: Shared layouts (Header, Footer, etc.).

## Development

To start the local development server:

```bash
npm run dev
```

The site is available at `http://localhost:4321`.

## Adding Content

### Experience
Add a new markdown file to `src/content/experience/` with the following frontmatter:

```markdown
---
title: "Role Title"
company: "Company Name"
startDate: "YYYY-MM"
endDate: "YYYY-MM" # Optional if current is true
current: false
location: "City, Country"
description: "Brief summary"
---
Detailed description of your responsibilities and achievements...
```

### Talks
Add a new markdown file to `src/content/talks/` with the following frontmatter:

```markdown
---
title: "Talk Title"
event: "Event Name"
date: "YYYY-MM-DD"
language: "en" # or "es"
summary: "Brief summary of the talk"
slides: "https://link-to-slides.com" # Optional
video: "https://link-to-video.com" # Optional
---
Detailed description or abstract...
```

### Blog
Add a new markdown file to `src/content/blog/` with the following frontmatter:

```markdown
---
title: "Post Title"
date: 2024-03-01
language: "en" # or "es"
summary: "Brief summary for the listing page"
tags: ["tag1", "tag2"]
---
Post content...
```

## Deployment

The site is configured to automatically deploy to GitHub Pages via GitHub Actions when pushing to the `main` branch.
