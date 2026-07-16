import { useState } from 'react';
import { mailto } from '../../data/links';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formspreeId) {
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;
      window.location.href = `${mailto}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 w-full max-w-lg space-y-4 px-4"
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full text-sm rounded-lg border border-[var(--color-surface)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--primary-color)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full text-sm rounded-lg border border-[var(--color-surface)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--primary-color)]"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full text-sm resize-none rounded-lg border border-[var(--color-surface)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--primary-color)]"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full capitalize text-[1.1rem] font-semibold rounded-[2rem] border-2 border-[var(--primary-color)] bg-[var(--primary-color)] py-1 font-semibold text-white transition-all duration-300 hover:bg-transparent hover:text-[var(--primary-color)] disabled:opacity-50 cursor-pointer"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-center text-sm text-green-400">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-400">
          Something went wrong. Please try again or use another contact way.
        </p>
      )}
    </form>
  );
};
