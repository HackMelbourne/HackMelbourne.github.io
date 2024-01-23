interface SponsorTitleProps {
  title: string;
}

const SponsorTitle = ({ title } : SponsorTitleProps) => {
  return (
    <h2 className="text-4xl text-center font-extrabold mt-28 mb-9">
      {title}
    </h2>
  )
}

export default SponsorTitle;