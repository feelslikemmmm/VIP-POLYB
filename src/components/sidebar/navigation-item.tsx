import Image from 'next/image';
import Link from 'next/link';

interface NavigationItemProps {
  href: string;
  iconUrl: string;
  label: string;
  isActive: boolean;
  isExternal?: boolean;
}

export default function NavigationItem({
  href,
  iconUrl,
  label,
  isActive,
  isExternal = false,
}: NavigationItemProps) {
  const className = `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
    isActive && !isExternal
      ? 'bg-blue-600 text-white'
      : 'text-gray-300 hover:text-white hover:bg-gray-700'
  }`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <Image
          src={iconUrl}
          width={20}
          height={20}
          className="w-5 h-5"
          alt={label}
        />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <Image
        src={iconUrl}
        width={20}
        height={20}
        className="w-5 h-5"
        alt={label}
      />
      <span>{label}</span>
    </Link>
  );
}
