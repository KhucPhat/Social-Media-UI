import { getUserInfo } from "@/apis/socialUser";
import { LeftSidebar, Loader, Topbar } from "@/components/shared";
import Bottombar from "@/components/shared/Bottombar";
import { getUserInfoSuccess } from "@/store/action/userAction";
import { ResApi } from "@/types/constans";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getInfoUser = async () => {
    setIsLoading(true);
    const response: ResApi = await getUserInfo();
    if (response.status === 200) {
      dispatch(getUserInfoSuccess(response.data.data));
      setIsLoading(response.data.loading);
    } else {
      navigate("/sign-in");
      setIsLoading(response.data.loading);
    }
  };

  React.useEffect(() => {
    getInfoUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full md:flex">
          <Topbar />
          <LeftSidebar />

          <section className="flex flex-1 h-full">
            <Outlet />
          </section>

          <Bottombar />
        </div>
      )}
    </>
  );
};
