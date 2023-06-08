

const SectionTitle = ({heading}) => {
    return (
        <div className="flex flex-col items-center py-5">
        <span className="text-3xl md:text-7xl font-extrabold tracking-[0.5rem] uppercase textEffect bg-[#03203C] p-5">
          {/* Popular Classes */}
          {heading}
        </span>
      </div>
    );
};

export default SectionTitle;