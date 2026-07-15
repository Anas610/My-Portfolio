import type { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  animate: boolean;
}

export const SkillBar = ({ skill, animate }: SkillBarProps) => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <p className="text-[1.2rem] font-bold text-[var(--primary-color)]">
          {skill.name}
        </p>
        <p className="text-[1rem] font-medium text-[var(--primary-color)]">
          {skill.percentage}%
        </p>
      </div>
      <div className="relative mt-2 h-[0.3125rem] max-sm:w-50 w-80 max-w-full rounded-[0.3125rem] bg-[var(--color-surface)]">
        <span
          className="skill-bar-fill absolute left-0 top-0 h-full rounded-[0.3125rem] bg-[var(--primary-color)]"
          style={{ width: animate ? `${skill.percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};
