import ActiveLink from "../components/activeLink/ActiveLink";

const useUserSideNavLarge = () => {
  const userHomeLarge = (
    <>
      <ActiveLink to={"/dashboard/studentHome"}>
        <h2 className="text-xl">User Home</h2>
      </ActiveLink>
      <ActiveLink to={"/dashboard/studentClasses"}>
        <h2 className="text-xl">Selected Classes</h2>
      </ActiveLink>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Enrolled</h2>
      </ActiveLink>
      <ActiveLink to={"/dashboard/payments"}>
        <h2 className="text-xl">Payments</h2>
      </ActiveLink>

      <div className="w-full h-[2px] bg-white"></div>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Home</h2>
      </ActiveLink>
      <ActiveLink to={"/classes"}>
        <h2 className="text-xl">Classes</h2>
      </ActiveLink>
    </>
  );
  return userHomeLarge;
};

export default useUserSideNavLarge;
