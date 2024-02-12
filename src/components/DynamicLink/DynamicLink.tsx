import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  link: string;
  className?: string;
  children: ReactNode;
}

const DynamicLink = ({ link, className, children }: Props) => {
  if (link.slice(0, 4) == 'http') {
    // External Link
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  } else {
    // Internal Link
    return (
      <Link to={link} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={className}>
        {children}
      </Link>
    );
  }
};

export default DynamicLink;
