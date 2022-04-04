import Image from 'next/image';

export default function Social() {
  return (
    <div className="absolute top-[50%] right-[20px] flex flex-col">
      <a
        href="https://github.com/thiago0x01"
        className="mb-4"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/github-icon.svg"
          width={48}
          height={48}
          alt="github icon"
        />
      </a>

      <a
        href="https://linkedin.com.br/in/thiago0x01"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/linkedin-icon.svg"
          width={48}
          height={48}
          alt="github icon"
        />
      </a>
    </div>
  );
}
