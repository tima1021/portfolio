export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  deployment_url?: string;
  language: string;
  stargazers_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export const GITHUB_USERNAME = 'tima1021';

export const FEATURED_PROJECTS = [
  'to-do-app',
  'movie-site', 
  'leap-2025-j/eam-3qr-menu'
];

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    // Fetch personal repos
    const personalResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!personalResponse.ok) {
      throw new Error('Failed to fetch GitHub projects');
    }
    
    const personalRepos = await personalResponse.json();
    
    // Fetch organization repos
    let orgRepos: any[] = [];
    try {
      const orgResponse = await fetch(`https://api.github.com/repos/leap-2025-j/eam-3qr-menu`);
      if (orgResponse.ok) {
        const orgRepo = await orgResponse.json();
        orgRepos = [orgRepo];
      }
    } catch (error) {
      console.error('Error fetching org repos:', error);
    }
    
    // Combine all repos
    const allRepos = [...personalRepos, ...orgRepos];
    
    // Filter for featured projects
    const featuredRepos = allRepos.filter((repo: any) => 
      FEATURED_PROJECTS.includes(repo.name) || 
      FEATURED_PROJECTS.includes(`${repo.owner?.login}/${repo.name}`)
    );
    
    return featuredRepos.map((repo: any) => {
      // Add deployment URLs based on project name
      let deployment_url = undefined;
      if (repo.name === 'to-do-app') {
        deployment_url = 'https://to-do-app-teal-xi.vercel.app';
      } else if (repo.name === 'eam-3qr-menu') {
        deployment_url = undefined; // Add your QR menu deployment URL here
      } else if (repo.name === 'movie-site') {
        deployment_url = undefined; // Add your movie site deployment URL here
      }
      
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description available',
        html_url: repo.html_url,
        deployment_url,
        language: repo.language || 'Unknown',
        stargazers_count: repo.stargazers_count,
        topics: repo.topics || [],
        created_at: repo.created_at,
        updated_at: repo.updated_at
      };
    });
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return fallbackProjects;
  }
}

// Fallback projects in case API fails
export const fallbackProjects: Project[] = [
  {
    id: 1,
    name: 'to-do-app',
    description: 'A modern to-do application with task management features',
    html_url: `https://github.com/${GITHUB_USERNAME}/to-do-app`,
    deployment_url: 'https://to-do-app-teal-xi.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    topics: ['react', 'javascript', 'todo'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'movie-site',
    description: 'A movie discovery and information website',
    html_url: `https://github.com/${GITHUB_USERNAME}/movie-site`,
    deployment_url: 'https://tima1021.github.io/movie-site', // Replace with your actual deployment URL
    language: 'JavaScript',
    stargazers_count: 0,
    topics: ['movies', 'javascript', 'web'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: 'eam-3qr-menu',
    description: 'QR menu application for restaurants',
    html_url: 'https://github.com/leap-2025-j/eam-3qr-menu',
    deployment_url: undefined, // Add your QR menu deployment URL here
    language: 'JavaScript',
    stargazers_count: 0,
    topics: ['qr-menu', 'restaurant', 'mobile'],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];