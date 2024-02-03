import { getUserInfo } from "@/apis/socialUser";
import { LeftSidebar, Topbar } from "@/components/shared";
import Bottombar from "@/components/shared/Bottombar";
import { getUserInfoSuccess } from "@/store/action/userAction";
import { ResApi } from "@/types/constans";
import React from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  const dispatch = useDispatch();

  const getInfoUser = async () => {
    const response: ResApi = await getUserInfo();
    if (response.status === 200) {
      dispatch(getUserInfoSuccess(response.data.data));
    }
  };

  React.useEffect(() => {
    console.log("re-render");
    getInfoUser();
  }, []);

  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};
