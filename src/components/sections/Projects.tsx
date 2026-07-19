import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { stats } from '../../data/stats';
import { ProjectCard } from '../ui/ProjectCard';
import { StatCounter } from '../ui/StatCounter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../../utils/icons';

export const Projects = () => {
  const arrowIcon = getIcon('arrow-right');
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section pt-12 md:pt-16">
      <div className="mx-auto max-sm:w-[95%] sm:w-[90%]">
        <p className="section-title">projects</p>
        <div className='flex justify-between items-center'>
          <p className="w-fit border-b-2 border-(--primary-color) pb-[3px] text-[1.2rem] font-medium">
            My Recent Work
          </p>
          <Link
            to="/projects"
            className="flex w-22 cursor-pointer items-center justify-between font-semibold leading-none text-(--color-text) transition-transform duration-300 hover:scale-110 hover:text-(--primary-color)"
          >
            View All
            {arrowIcon && <FontAwesomeIcon icon={arrowIcon} className='hover:text-(--primary-color)' />}
          </Link>
        </div>

        <div className="mt-12.5 flex flex-wrap lg:gap-10 justify-between max-[1242px]:justify-around">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div
          className="mt-20 flex items-center justify-around gap-4 bg-cover bg-top bg-no-repeat px-4 py-20 shadow-[0.75rem_0.75rem_1.25rem_var(--color-stats-shadow)] bg-fixed"
          style={{ backgroundImage: 'url(/assets/images/me.png)' }}
        >
          {stats.map((stat) => (
            <StatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
