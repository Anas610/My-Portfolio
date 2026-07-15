import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Service } from '../../types';
import { getIcon } from '../../utils/icons';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const icon = getIcon(service.icon);

  return (
    <div
      className="service-card mb-24 mx-4 w-[20rem] px-8 pb-4 text-center shadow-[0px_0.3125rem_2.5rem_0.9375rem_var(--color-card-shadow)] transition-all duration-[800ms]"
      style={{ borderBottom: `3px solid ${service.accentColor}` }}
    >
      <div className="relative mx-auto -translate-y-10 h-28 w-28 overflow-hidden text-white">
        <img src={service.hexagonImage} alt="" className="h-full w-full" />
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1.7rem]"
          />
        )}
      </div>
      <h3 className="-translate-y-4 mb-[0.9375rem] mt-[0.3125rem] font-semibold">
        {service.title}
      </h3>
      <p className="-translate-y-4 text-[0.8rem] leading-normal opacity-30">
        {service.description}
      </p>
    </div>
  );
};
