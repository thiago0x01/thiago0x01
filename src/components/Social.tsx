import Image from 'next/image';

export default function Social() {
  return (
    <div className="flex justify-center items-center">
      <a
        href="https://github.com/thiago0x01"
        className="flex mr-4"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/github-icon.svg"
          width={24}
          height={24}
          alt="github icon"
        />
      </a>

      <a
        href="https://linkedin.com.br/in/thiago0x01"
        className="flex"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/linkedin-icon.svg"
          width={24}
          height={24}
          alt="github icon"
        />
      </a>
    </div>
  );
}
