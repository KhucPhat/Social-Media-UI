import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface TypeButton {
  loading: boolean;
  disabled: boolean;
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  style?: React.CSSProperties;
}

const ButtonForm = (props: TypeButton) => {
  const { loading, disabled, type, text, style } = props;
  return (
    <Button
      style={{
        ...style,
      }}
      disabled={disabled}
      className="shad-button_primary"
      type={type}
    >
      {loading ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default ButtonForm;
