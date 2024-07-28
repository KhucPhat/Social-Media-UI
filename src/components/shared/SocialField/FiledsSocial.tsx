import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ListFieldType } from "@/types/components/socialField";

export const getFieldSocial = (
  item: ListFieldType,
  index: number,
  form: any,
  formKey: string
) => {
  switch (item.type) {
    case "inputChange":
      return (
        <FormField
          key={formKey}
          control={form.control}
          name={item.key}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">{item.title}</FormLabel>
              <FormControl>
                <Input
                  type={item.typeInput}
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
  }
};
