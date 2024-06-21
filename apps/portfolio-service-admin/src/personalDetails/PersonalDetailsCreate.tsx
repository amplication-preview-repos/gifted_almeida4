import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PersonalDetailsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bio" multiline source="bio" />
        <TextInput label="Email" source="email" />
        <TextInput label="FullName" source="fullName" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
