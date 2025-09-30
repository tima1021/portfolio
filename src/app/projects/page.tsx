'use client';

import { useState, useEffect } from 'react';
import { fetchGitHubProjects, fallbackProjects, Project } from '@/data/projects';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const githubProjects = await fetchGitHubProjects();
        console.log('Fetched GitHub projects:', githubProjects);
        setProjects(githubProjects.length > 0 ? githubProjects : fallbackProjects);
      } catch (error) {
        console.error('Failed to load projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Black Background */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Projects Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Page Title */}
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-8 font-space-grotesk">
              WORKS
            </h1>
            
            {/* Projects List */}
            <div className="max-w-4xl mx-auto">
              {loading ? (
                <div className="text-center text-white/60">
                  <div className="animate-pulse">Loading projects...</div>
                </div>
              ) : (
                <div className="space-y-8">
                  {projects.map((project, index) => (
                    <div 
                      key={project.id}
                      className="flex items-center justify-between py-4 border-b border-white/20 hover:bg-white/5 transition-colors duration-300 cursor-pointer group"
                      onClick={() => {
                        const url = project.deployment_url || project.html_url;
                        console.log('Opening URL:', url);
                        window.open(url, '_blank');
                      }}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl font-light text-white mr-8">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-2xl font-light text-white group-hover:text-white/80 transition-colors duration-300">
                            {project.name}
                          </span>
                          {project.description && (
                            <span className="text-sm text-white/60 mt-1 max-w-md">
                              {project.description}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-lg font-light text-white/60">
                          {project.language}
                        </span>
                        {project.stargazers_count > 0 && (
                          <span className="text-sm text-white/40">
                            ⭐ {project.stargazers_count}
                          </span>
                        )}
                        {project.deployment_url && (
                          <span className="text-xs text-white/40 mt-1">
                            Live Demo
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}