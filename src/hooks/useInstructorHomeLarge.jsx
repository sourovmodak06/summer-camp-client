import ActiveLink from "../components/activeLink/ActiveLink";


const useInstructorHomeLarge = () => {
    const instructorHomeLarge = (
        <>
          <ActiveLink to={"/"}>
            <h2 className="text-xl">Instructor Home</h2>
          </ActiveLink>
          <ActiveLink to={"/"}>
            <h2 className="text-xl">Add a Class</h2>
          </ActiveLink>
          <ActiveLink to={"/"}>
            <h2 className="text-xl">My Classes</h2>
          </ActiveLink>
    
          <div className="w-full h-[2px] bg-white"></div>
          <ActiveLink to={"/"}>
            <h2 className="text-xl">Home</h2>
          </ActiveLink>
          <ActiveLink to={"/instructors"}>
            <h2 className="text-xl">Instructor</h2>
          </ActiveLink>
        </>
      );
      return instructorHomeLarge;
};

export default useInstructorHomeLarge;