import { headerLinks } from '@/lib/header-links';
import Link from 'next/link';

const HeaderLinks = () => {
  return (
    <div className='hidden md:block'>
      <div className='flex items-baseline ml-10 space-x-4'>
        {headerLinks.map((link) => (
          <Link
            key={link.id}
            href={link.name}
            className='px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:bg-gray-200'
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderLinks;