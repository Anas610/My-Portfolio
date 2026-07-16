import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Stat } from '../../types';
import { useCountUp } from '../../hooks/useCountUp';
import { getIcon } from '../../utils/icons';

interface StatCounterProps {
  stat: Stat;
}

export const StatCounter = ({ stat }: StatCounterProps) => {
  const { count, ref } = useCountUp(stat.value);
  const icon = getIcon(stat.icon);

  return (
    <div ref={ref} className="text-center text-[1.5rem] leading-[1.8] text-white">
      {icon && <FontAwesomeIcon icon={icon} className="opacity-80" color='var(--primary-color)' />}
      <p className="opacity-80 text-[var(--primary-color)] max-sm:text-lg">{stat.label}</p>
      <p className="mt-5 text-[1.8rem] font-bold text-[var(--primary-color)]">{count}</p>
    </div>
  );
};
