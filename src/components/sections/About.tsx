import { personal } from '../../data/personal';
import { skills } from '../../data/skills';
import { useSkillBars } from '../../hooks/useSkillBars';
import { SkillBar } from '../ui/SkillBar';

export const About = () => {
  const { animate, ref } = useSkillBars();

  return (
    <section id="about" className="section pt-12 md:pt-16">
      <div className="mx-auto max-sm:w-[95%] sm:w-[90%]">
        <p className="section-title">about</p>
        <p className="font-medium">
          I&apos;m an Egyptian{' '}
          <span className="inline-block h-6 w-6 align-middle">
            <img
              src={personal.flagImage}
              alt="Egypt flag"
              className="block h-full w-full"
            />
          </span>{' '}
          {personal.aboutParagraph1.replace(/^I'm an Egyptian\s*/i, '')}
        </p>
        <p className="mt-4 w-[85%] font-medium leading-relaxed">
          {personal.aboutParagraph2}
        </p>

        <div
          ref={ref}
          className="mt-8 flex flex-wrap justify-between"
        >
          {skills.map((skill) => (
            <SkillBar key={skill.id} skill={skill} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};
