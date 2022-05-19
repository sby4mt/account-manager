import { routes } from "../constants/routes";
import top from "../theme/top.module.css";

const Top: React.FC = () => {
  return (
    <div className={top.container}>
      <strong>hoge</strong>
      <p>hogeは様々なアカウントを安全に管理してくれます。</p>
      <div>
        <a href={routes.app}>サービスを使ってみる</a>
      </div>
    </div>
  );
};

export default Top;