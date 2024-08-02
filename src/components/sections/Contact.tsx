import { TextOutline } from '@/components/ui/TextOutline';
import { Input } from '../ui/Input';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex w-full flex-row flex-wrap justify-center gap-16 pb-16"
    >
      <div>
        <TextOutline>Let&apos;s get in touch</TextOutline>
      </div>
      <div className="flex w-full flex-col items-center">
        <form className="flex w-full flex-col flex-wrap gap-10">
          <Input id="name" label="Name" />
          <Input id="lastname" label="Lastname" />
          <Input id="email" label="Email" type="email" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
