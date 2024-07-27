import { ButtonForm, SocialFieldChange } from "@/components/shared";
import { Form } from "@/components/ui/form";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { SigninValidation } from "@/lib/validation/auth/auth";
import { loginReq, resetLogin } from "@/store/action/login";
import { RootState } from "@/store/reducer/reducer";
import { InUser } from "@/types/constants/constans";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { z } from "zod";

const SigninForm = () => {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state: RootState) => state.loginReducer);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (data: InUser) => {
    dispatch(loginReq(data));
  };

  React.useEffect(() => {
    if (loginReducer.isError) {
      toast({
        variant: "destructive",
        title: loginReducer.messageFail ?? "",
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => {
              dispatch(resetLogin());
            }}
          >
            Try again
          </ToastAction>
        ),
      });
    }
  }, [loginReducer.isError]);

  const listFieldsSingin = [
    {
      id: "email",
      title: "Email",
      key: "email",
      span: 12,
      type: "inputChange",
      required: true,
    },
    {
      id: "password",
      title: "Password",
      key: "password",
      span: 12,
      type: "inputChange",
      required: true,
    },
  ];

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg" alt="logo" />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Log in to your account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Welcome back! Please enter your details.
        </p>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <SocialFieldChange listFields={listFieldsSingin} form={form} />
          <ButtonForm
            loading={loginReducer.loading}
            disabled={loginReducer.loading ? true : false}
            text="Login"
            type="submit"
          />
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
