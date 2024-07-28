import { getUserInfo } from "@/apis/socialUser";
import { LeftSidebar, Topbar } from "@/components/shared";
import Bottombar from "@/components/shared/Button/Bottombar";
import { AuthProvider } from "@/context/AuthContext";
import { getUserInfoSuccess } from "@/store/action/userAction";
import { TypeResponse } from "@/types/apis/dataResponse";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const RootLayout = () => {
  const dispatch = useDispatch();

  const getInfoUser = async () => {
    const response: TypeResponse = await getUserInfo();
    if (response.status === 200) {
      const dataUser = response.data.data;

      return dataUser;
    }
  };

  const { data: dataUser } = useQuery({
    queryKey: ["get-data"],
    queryFn: getInfoUser,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (dataUser) {
      dispatch(getUserInfoSuccess(dataUser));
    }
  }, [dataUser]);

  return (
    <AuthProvider>
      <div className="w-full md:flex">
        <Topbar />
        <LeftSidebar />

        <section className="flex flex-1 h-full">
          <Outlet />
        </section>

        <Bottombar />
      </div>
    </AuthProvider>
  );
};
