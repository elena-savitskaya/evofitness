type OurClassesItemProps = {
  name: string;
  description?: string;
  image: string;
};

export const OurClassesItem = ({
  name,
  description,
  image,
}: OurClassesItemProps) => {
  return (
    <li className="relative mx-3 inline-block w-[310px] sm:w-[450px]">
      <div className="p-5 absolute z-30 flex h-full w-full flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{name}</p>
        <p>{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};
