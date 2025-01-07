import { DialogNotiErrors } from "@/components/shared/Dialog";
import { RootState } from "@/store/reducer/reducer";
import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const meInfo = useSelector((state: any) => state.userReducer.infor);
  const errorRes = useSelector(
    (state: RootState) => state.errorsReducer.errorsResponseData
  );
  const [openDialogError, setOpenDialogError] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (errorRes.isError) {
      setOpenDialogError(true);
    }
  }, [errorRes]);

  return (
    <>
      {meInfo ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="public/assets/images/side-img.svg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
          {openDialogError && (
            <DialogNotiErrors
              open={openDialogError}
              setOpen={setOpenDialogError}
              message={errorRes.errorMessage}
            />
          )}
        </>
      )}
    </>
  );
};

export default AuthLayout;
