import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Type {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const DialogNotiErros = (props: Type) => {
  const { open, setOpen, message } = props;

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-slate-950">
            Notifications Erros
          </DialogTitle>
        </DialogHeader>
        <div>
          <h2 className="text-slate-950">{message}</h2>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            className="text-slate-950 bg-gray-200 py-5 px-5"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogNotiErros;
