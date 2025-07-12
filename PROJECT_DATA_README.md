# Project Data Management

This application uses a modular approach to manage project data. Each project has its own TypeScript file in the `/src/data/` directory, making it easy to edit all project information in one place.

## How to Edit Project Data

### 1. Project Files Location
Each project has its own data file in `/src/data/`:
- `network-security-monitor.ts`
- `vulnerability-assessment-tool.ts`
- `secure-database-manager.ts`
- `penetration-testing-suite.ts`

### 2. Adding a New Project

1. Create a new file in `/src/data/` (e.g., `my-new-project.ts`)
2. Follow this template:

```typescript
import { YourIcon } from 'lucide-react';

export const myNewProjectData = {
  // Basic Project Information
  title: 'My New Project',
  slug: 'my-new-project', // URL-friendly name
  description: 'Short description for project cards',
  longDescription: 'Detailed description for the project detail page',
  
  // Project Metadata
  status: 'Completed' as const, // 'Completed' | 'In Progress' | 'Planned'
  timeline: '3 months',
  team: 'Solo project',
  icon: YourIcon, // Import from lucide-react
  
  // Tags and Technologies
  tags: ['Tag1', 'Tag2', 'Tag3'],
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  
  // Project Links
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com',
  
  // Features (displayed as bullet points)
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  
  // Challenges (displayed in challenges section)
  challenges: [
    'Challenge 1',
    'Challenge 2'
  ],
  
  // Project Outcomes (displayed in outcomes section)
  outcomes: [
    'Outcome 1',
    'Outcome 2'
  ],
  
  // Image Gallery (URLs for carousel)
  images: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg'
  ]
};
```

3. Add your project to `/src/data/index.ts`:

```typescript
import { myNewProjectData } from './my-new-project';

export const projectsData: Record<string, ProjectData> = {
  // ...existing projects...
  'my-new-project': myNewProjectData,
};

export {
  // ...existing exports...
  myNewProjectData,
};
```

### 3. Editing Existing Projects

To edit any project:
1. Open the corresponding file in `/src/data/`
2. Modify any field you want to change
3. Save the file - changes will be reflected immediately

### 4. Available Fields

#### Required Fields:
- `title`: Project name
- `slug`: URL-friendly identifier
- `description`: Short description
- `longDescription`: Detailed description
- `status`: 'Completed', 'In Progress', or 'Planned'
- `timeline`: Project duration
- `team`: Team information
- `icon`: Lucide React icon
- `tags`: Array of tag strings
- `technologies`: Array of technology strings
- `github`: GitHub repository URL
- `demo`: Demo URL (use '#' if not available)
- `features`: Array of feature strings
- `challenges`: Array of challenge strings
- `outcomes`: Array of outcome strings
- `images`: Array of image URLs

#### Optional Fields:
- `technicalDetails`: Object with architecture, database, deployment info
- `caseStudy`: Object with case study information

### 5. Images

For the carousel, you can use:
- **External URLs**: Direct links to images (Unsplash, your own hosting)
- **Local images**: Place in `/public/` and reference as `/image.jpg`
- **Placeholder images**: The system will generate placeholder images automatically if none are provided

### 6. Icons

Icons come from [Lucide React](https://lucide.dev/icons). Popular options:
- `Network`, `Shield`, `Database`, `Terminal`
- `Code`, `Server`, `Lock`, `Cpu`
- `Globe`, `Monitor`, `Smartphone`, `Cloud`

### 7. Status Colors

Status automatically gets styled:
- **Completed**: Primary color (orange/red gradient)
- **In Progress**: Accent color
- **Planned**: Muted color

## File Structure

```
src/
├── data/
│   ├── index.ts                    # Main export file
│   ├── network-security-monitor.ts
│   ├── vulnerability-assessment-tool.ts
│   ├── secure-database-manager.ts
│   └── penetration-testing-suite.ts
├── types/
│   └── project.ts                  # TypeScript interfaces
├── components/
│   └── ProjectCarousel.tsx         # Carousel component
└── pages/
    ├── Projects.tsx               # Projects listing page
    └── ProjectDetail.tsx          # Individual project page
```

This structure keeps all your content organized and easily editable while maintaining type safety and consistency across the application.
