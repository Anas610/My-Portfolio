import { socialLinks } from '../../data/links';
import { ContactForm } from '../ui/ContactForm';
import { SocialLinks } from '../ui/SocialLinks';

export const Contact = () => {
  return (
    <section id="contact" className="section py-12 md:py-16">
        <p className="section-title">contact</p>

      <div className="text-[1.5rem] font-medium leading-loose">
        <p className="mx-auto w-fit max-sm:-translate-x-8 md:-translate-x-52">
          I will be so Glad to Serve You,
        </p>
        <p className="mx-auto w-fit text-[var(--primary-color)] max-sm:-translate-x-14 md:-translate-x-44">
          Stay in touch with me
        </p>

        <ContactForm />
        <SocialLinks links={socialLinks} className="mt-12" />
      </div>
    </section>
  );
};
