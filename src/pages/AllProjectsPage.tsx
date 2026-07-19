import { categoryLabels, projects } from '../data/projects';
import type { Project, ProjectCategory } from '../types';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ProjectCard } from '../components/ui/ProjectCard';

const categories: ProjectCategory[] = ['frontend', 'react-native', 'backend'];

const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((project) => project.category === category);

export const AllProjectsPage = () => {
  return (
    <>
      <Navbar enableScrollSpy={false} />
      <main>
        <section className="section pt-20 md:pt-24">
          <div className="mx-auto max-sm:w-[95%] sm:w-[90%]">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`my-32 text-(--color-text) ${index === 0 ? 'mt-12' : ''}`}
              >
                <h2 className="w-fit border-b-2 border-(--primary-color) pb-[0.3rem] capitalize">
                  {categoryLabels[category]}
                </h2>
                <div className="mt-12.5 flex flex-wrap justify-between max-[1242px]:justify-around">
                  {getProjectsByCategory(category).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
