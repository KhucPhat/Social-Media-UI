import { register } from "@/apis/login";
import { ButtonForm, SocialFieldChange } from "@/components/shared";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { SignupValidation } from "@/lib/validation/auth/auth";
import { RootState } from "@/store/reducer/reducer";
import { ResApi } from "@/types/constants/constans";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const SignupForm = () => {
  const { toast } = useToast();
  const loginReducer = useSelector((state: RootState) => state.loginReducer);
  const navigate = useNavigate();

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
      id: "name",
      title: "Name",
      key: "name",
      span: 12,
      type: "inputChange",
      required: true,
    },
    {
      id: "username",
      title: "User Name",
      key: "username",
      span: 12,
      type: "inputChange",
      required: true,
    },
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

  const handleSignup = async (data: z.infer<typeof SignupValidation>) => {
    const response: ResApi = await register(data);
    if (response.status === 200) {
      toast({
        title: "Đăng ký thành công.Vui lòng xác thực tài khoản bằng email.",
      });
      navigate("/sign-in");
    } else {
      toast({
        variant: "destructive",
        title: loginReducer.messageFail ?? "",
      });
    }
  };

  console.log(form.control._formValues);

  return (
    <>
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="logo" />

          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
            Create a new account
          </h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            To use snapgram, Please enter your details
          </p>

          <form
            onSubmit={form.handleSubmit(handleSignup)}
            className="flex flex-col gap-5 w-full mt-4"
          >
            <SocialFieldChange listFields={listFieldsSigupForm} form={form} />
            <ButtonForm
              loading={loginReducer.loading}
              disabled={loginReducer.loading ? true : false}
              text="Login"
              type="submit"
            />

            <p className="text-small-regular text-light-2 text-center mt-2">
              Already have an account?
              <Link
                to="/sign-in"
                className="text-primary-500 text-small-semibold ml-1"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </>
  );
};

export default SignupForm;
