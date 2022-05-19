import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";
import { Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { Title, title } from "../constants/titles";
import Add from "./add";
import page from "../theme/page.module.css";

const Page: React.FC = () => {

  const { name } = useParams<{ name: Title; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title[name]}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className={page.root} fullscreen>
        <Route path={routes.register.index} exact={true}>
          <Add />
        </Route>
      </IonContent>
    </IonPage>
  );
};

export default Page;
