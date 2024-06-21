import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectsList } from "./projects/ProjectsList";
import { ProjectsCreate } from "./projects/ProjectsCreate";
import { ProjectsEdit } from "./projects/ProjectsEdit";
import { ProjectsShow } from "./projects/ProjectsShow";
import { ContactsList } from "./contacts/ContactsList";
import { ContactsCreate } from "./contacts/ContactsCreate";
import { ContactsEdit } from "./contacts/ContactsEdit";
import { ContactsShow } from "./contacts/ContactsShow";
import { SkillsList } from "./skills/SkillsList";
import { SkillsCreate } from "./skills/SkillsCreate";
import { SkillsEdit } from "./skills/SkillsEdit";
import { SkillsShow } from "./skills/SkillsShow";
import { PersonalDetailsList } from "./personalDetails/PersonalDetailsList";
import { PersonalDetailsCreate } from "./personalDetails/PersonalDetailsCreate";
import { PersonalDetailsEdit } from "./personalDetails/PersonalDetailsEdit";
import { PersonalDetailsShow } from "./personalDetails/PersonalDetailsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PortfolioService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Projects"
          list={ProjectsList}
          edit={ProjectsEdit}
          create={ProjectsCreate}
          show={ProjectsShow}
        />
        <Resource
          name="Contacts"
          list={ContactsList}
          edit={ContactsEdit}
          create={ContactsCreate}
          show={ContactsShow}
        />
        <Resource
          name="Skills"
          list={SkillsList}
          edit={SkillsEdit}
          create={SkillsCreate}
          show={SkillsShow}
        />
        <Resource
          name="PersonalDetails"
          list={PersonalDetailsList}
          edit={PersonalDetailsEdit}
          create={PersonalDetailsCreate}
          show={PersonalDetailsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
