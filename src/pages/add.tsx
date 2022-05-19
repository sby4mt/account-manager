
import { IonButton, IonContent, IonInput, IonItem, IonLabel } from "@ionic/react";
import add from "../theme/add.module.css";
const Add: React.FC = () => {
  return(
    <div className={add.root}>
      <IonItem>
        <IonLabel position="stacked">
          アカウント
        </IonLabel>
        <IonInput>

        </IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">
          メールアドレス
        </IonLabel>
        <IonInput>

        </IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">
          パスワード
        </IonLabel>
        <IonInput>

        </IonInput>
      </IonItem>
      <IonButton>保存</IonButton>
    </div>
  );
}
export default Add;