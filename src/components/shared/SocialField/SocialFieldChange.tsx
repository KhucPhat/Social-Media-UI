import { ListFieldType } from "@/types/components/socialField";
import React from "react";
import getFieldSocial from "./FiledsSocial";

interface SocialFieldProps {
  listFields: ListFieldType[];
  form: any;
}

const SocialFieldChange: React.FC<SocialFieldProps> = (props) => {
  const { listFields, form } = props;
  return (
    <>
      {listFields?.map((field: ListFieldType, index: number) =>
        getFieldSocial(field, index, form, field.key)
      )}
    </>
  );
};

export default SocialFieldChange;
