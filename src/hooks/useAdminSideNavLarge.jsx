import ActiveLink from "../components/activeLink/ActiveLink";

const useAdminSideNavLarge = () => {
  const adminHomeLarge = (
    <>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Admin Home</h2>
      </ActiveLink>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Manage Classes</h2>
      </ActiveLink>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Manage Users</h2>
      </ActiveLink>

      <div className="w-full h-[2px] bg-white"></div>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Home</h2>
      </ActiveLink>
    </>
  );
  return adminHomeLarge;
};

export default useAdminSideNavLarge;