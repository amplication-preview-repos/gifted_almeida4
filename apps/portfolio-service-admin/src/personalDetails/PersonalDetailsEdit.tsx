import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonalDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bio" multiline source="bio" />
        <TextInput label="Email" source="email" />
        <TextInput label="FullName" source="fullName" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
