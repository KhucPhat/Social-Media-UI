import { login } from "@/apis/login";
import { ButtonForm, SocialFieldChange } from "@/components/shared";
import { Form } from "@/components/ui/form";
import { SigninValidation } from "@/lib/validation/auth/auth";
import { TypeResponse } from "@/types/apis/dataResponse";
import { InUser } from "@/types/constants/constans";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const SigninForm = () => {
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (data: InUser) => {
    const response: TypeResponse = await login(data);

    if (response.status === 200) {
      const dataUser = response.data.data;
      localStorage.setItem("token", dataUser.accessToken);
      window.location.href = "/";
    }
  };

  const listFieldsSingin = [
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
            loading={false}
            disabled={false}
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
