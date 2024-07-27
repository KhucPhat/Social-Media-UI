import { ListFieldType } from "@/types/components/socialField";
import { FormControl, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

interface FieldsProps {
  field: ListFieldType;
  index: number;
  form: any;
  formKey: string;
}

const FiledsSocial: React.FC<FieldsProps> = (props) => {
  const { formKey, field, index, form } = props;

  const renderFields = (item: ListFieldType, index: number) => {
    switch (item.type) {
      case "inputChange":
        return (
          <Grid item xs={item.span}>
            <Controller
              name={item.key}
              control={form.control}
              render={({ field }) => (
                <FormControl
                  key={`${formKey}_${index}`}
                  sx={{ width: "100%" }}
                  variant="standard"
                >
                  <Typography
                    component="span"
                    sx={{ fontSize: "14px", padding: "4px 0px" }}
                  >
                    {item.title}
                    {item.required && (
                      <Typography
                        component="span"
                        sx={{ paddingLeft: "2px", color: "#ff0000f0" }}
                      >
                        *
                      </Typography>
                    )}
                  </Typography>
                  <Stack direction="row" alignItems="center">
                    <TextField
                      {...field}
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-root": {
                          backgroundColor: "#fff",
                          height: "44px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          display: "none",
                        },
                      }}
                      onChange={(event) => {
                        const value = event.target.value;
                        form.setValue(item.key, value);
                      }}
                    />
                  </Stack>
                </FormControl>
              )}
            />
          </Grid>
        );
    }
  };

  return <>{renderFields(field, index)}</>;
};

export default FiledsSocial;
