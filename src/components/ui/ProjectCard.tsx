import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Project } from '../../types';
import { isValidUrl } from '../../utils/links';
import { getIcon } from '../../utils/icons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const eyeIcon = getIcon('eye');
  const codeIcon = getIcon('code');
  const isLive = isValidUrl(project.liveUrl) && eyeIcon;
  const isSource = isValidUrl(project.sourceUrl) && codeIcon;

  return (
    <div
      className="project-card relative mb-16 mx-4 h-80 min-w-80 max-w-[80%] flex-1 overflow-hidden rounded-lg shadow-[0.3125rem_0.75rem_1.25rem_var(--color-project-shadow)] transition-all duration-800 hover:scale-110 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: '100% 100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundSize = '110% 110%';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundSize = '100% 100%';
      }}
    >
      <div className="project-overlay flex w-full items-center justify-between bg-[rgba(44,44,44,0.8)] px-4 py-[1.4rem] font-semibold text-white">
        <h4 className="text-[1.05rem] font-semibold">
          {project.name}{' '}
          <span className="text-[0.7rem] text-(--primary-color)">
            {project.technology}
          </span>
        </h4>
        <div className={`flex w-[18%] items-center ${(isLive && isSource) ? "justify-between" : "justify-end"}`}>
          {isLive && (
            <a
              href={project.liveUrl}
              title="overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform duration-300 hover:scale-125 hover:text-(--primary-color)"
            >
              <FontAwesomeIcon icon={eyeIcon} />
            </a>
          )}
          {isSource && (
            <a
              href={project.sourceUrl}
              title="source code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform duration-300 hover:scale-125 hover:text-(--primary-color)"
            >
              <FontAwesomeIcon icon={codeIcon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
