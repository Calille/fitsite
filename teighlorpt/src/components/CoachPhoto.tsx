import Image from 'next/image';

export default function CoachPhoto() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-sm bg-coal-card lg:max-w-none">
      <Image
        src="/teighlor.webp"
        alt="Teighlor Pengelley, Health and Fitness Coach"
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 20rem, 28rem"
        priority
      />
    </div>
  );
}
