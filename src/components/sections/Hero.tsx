import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personal } from '../../data/personal';
import { resumePath } from '../../data/links';
import { getYearsOfExperience } from '../../utils/experience';
import { getIcon } from '../../utils/icons';
import { Button } from '../ui/Button';

export const Hero = () => {
  const years = getYearsOfExperience();
  const handshakeIcon = getIcon('handshake');

  const handleHireMe = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: yCoordinate , behavior: 'smooth' });
    }
  };

  return (
    <header id="home" className="section pt-20 md:pt-24 lg:pt-28">
        <div className="flex flex-wrap justify-between">
          <div className="mx-auto w-full max-w-[33rem] pt-8 sm:w-[22rem] md:w-96 md:pt-12 lg:w-[27.2rem] lg:pt-20 xl:w-[38rem] xl:pt-28">
            <p className="text-[1.41rem] font-semibold capitalize leading-normal">
              {personal.greeting}
            </p>
            <h1 className="my-2 text-[3rem] font-black capitalize tracking-[0.2rem] text-[var(--primary-color)]">
              {personal.name}
            </h1>
            <p className="text-[1.41rem] font-semibold capitalize leading-normal">
              {personal.title}
            </p>
            <p className="mt-2 text-[0.9rem] leading-normal">
              +{years} Years of Experience in Creating Websites and Applications,{' '}
              <br />
              {personal.mission}
            </p>
            <div className="mt-4 flex flex-nowrap sm:mt-8 md:mt-8 lg:mt-12">
              <Button onClick={handleHireMe} variant="primary" className="me-6">
                hire me{' '}
                {handshakeIcon && (
                  <FontAwesomeIcon icon={handshakeIcon} className="ms-3" />
                )}
              </Button>
              <Button href={resumePath} download variant="outline">
                download CV
              </Button>
            </div>
          </div>

          <div
            className="hero-blob mx-auto mt-8 overflow-hidden bg-cover bg-no-repeat max-sm:mt-8 max-sm:w-[90%] sm:mt-0 sm:h-auto sm:w-[21rem] md:w-[22.6rem] lg:w-[25.5rem]"
            style={{
              backgroundImage: `url(${personal.blobImage})`,
              backgroundPosition: 'center -55px',
            }}
          >
            <div className="mx-auto h-full w-[95%]">
              <img
                src={personal.profileImage}
                alt="Anas Hossam"
                className="block w-full"
              />
            </div>
          </div>
        </div>
    </header>
  );
};
