import { Grid } from "@mui/material";
import React from "react";
import FiledsSocial from "./FiledsSocial";
import { ListFieldType } from "@/types/components/socialField";

interface SocialFieldProps {
  listFields: ListFieldType[];
  form: any;
}

const SocialFieldChange: React.FC<SocialFieldProps> = (props) => {
  const { listFields, form } = props;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
      }}
    >
      {listFields?.map((field: ListFieldType, index: number) => (
        <FiledsSocial
          formKey={field.key}
          form={form}
          field={field}
          index={index}
        />
      ))}
    </Grid>
  );
};

export default SocialFieldChange;
