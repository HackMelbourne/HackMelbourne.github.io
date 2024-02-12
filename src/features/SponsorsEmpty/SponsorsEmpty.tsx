import DynamicLink from '../../components/DynamicLink/DynamicLink';
import HMButton from '../../components/Button/HMButton';

interface SponsorsEmptyProps {
  tier: string;
  button: string;
  link: string;
}

const SponsorsEmpty = ({ tier, button, link }: SponsorsEmptyProps) => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-sm text-center gap-6">
      <p>
        It looks like we don’t have any {tier} supporters right now :( Be the first {tier} supporter today!
      </p>

      <HMButton text={button} color="primary" link={link}></HMButton>
    </div>
  );
};

export default SponsorsEmpty;
