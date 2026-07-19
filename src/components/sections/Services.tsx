import { services } from '../../data/services';
import { ServiceCard } from '../ui/ServiceCard';

export const Services = () => {
  return (
    <section id="services" className="section -mb-24 pt-12 md:pt-16">
      <div className="mx-auto max-sm:w-[95%] sm:w-[90%]">
        <p className="section-title">services</p>
        <div>
          <p className="text-[1.2rem] opacity-70">What I do !</p>
          <p className="my-4 text-[1.3rem] font-medium capitalize tracking-[0.5rem]">
            i build value through design
          </p>
          <div className="mt-20 flex flex-wrap lg:gap-10 justify-between max-sm:justify-center">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
