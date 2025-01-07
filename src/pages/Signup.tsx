import { register } from "@/apis/login";
import { ButtonForm } from "@/components/shared/Button";
import { SocialFieldChange } from "@/components/shared/SocialField";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { SignupValidation } from "@/lib/validation/auth/auth";
import { ResApi } from "@/types/constants/constans";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loadingAction, setLoadingAction] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const listFieldsSigupForm = [
    {
      id: "fullname",
      title: "Full Name",
      key: "fullname",
      span: 12,
      type: "inputChange",
      typeInput: "text",
      required: true,
    },
    {
      id: "username",
      title: "username",
      key: "username",
      span: 12,
      type: "inputChange",
      typeInput: "text",
      required: true,
    },
    {
      id: "email",
      title: "Email",
      key: "email",
      span: 12,
      type: "inputChange",
      typeInput: "text",
      required: true,
    },
    {
      id: "password",
      title: "Password",
      key: "password",
      span: 12,
      type: "inputChange",
      typeInput: "password",
      required: true,
    },
  ];

  const handleSignup = async (data: z.infer<typeof SignupValidation>) => {
    const response: ResApi = await register(data);
    if (response.status === 200) {
      setLoadingAction(false);
      toast({
        title: "Đăng ký thành công.Vui lòng xác thực tài khoản bằng email.",
      });
      navigate("/sign-in");
    } else {
      setLoadingAction(false);
      toast({
        variant: "destructive",
        title: "",
      });
    }
  };

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
          onSubmit={form.handleSubmit((data) => {
            setLoadingAction(true);
            handleSignup(data);
          })}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <SocialFieldChange listFields={listFieldsSigupForm} form={form} />
          <ButtonForm
            loading={loadingAction}
            disabled={false}
            text="Register"
            type="submit"
          />
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don&apos;t have an account?
            <Link
              to="/sign-in"
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

export default SignupForm;
