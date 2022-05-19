import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import { addOutline, addSharp, peopleOutline, peopleSharp, pricetagsOutline, pricetagsSharp, settingsOutline, settingsSharp } from "ionicons/icons";
import menu from "../theme/menu.module.css";
import { routes } from "../constants/routes";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "テンプレート",
    url: routes.template.index,
    iosIcon: pricetagsOutline,
    mdIcon: pricetagsSharp
  },
  {
    title: "登録",
    url: routes.register.index,
    iosIcon: addOutline,
    mdIcon: addSharp
  },
  {
    title: "アカウント一覧",
    url: routes.accountList.index,
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: "設定",
    url: routes.config.index,
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu className={menu.root} contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Account Manager</IonListHeader>
          <IonNote className={menu.note}>info@sbym.tech</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? menu.selected : ""} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
