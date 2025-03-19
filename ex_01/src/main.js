import { createApp } from "vue"; // createApp 추가
import "./assets/main.css";
import App from "./App.vue";
import * as BootstrapVueNext from "bootstrap-vue-next"; // default export 없음

import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 CSS
import "bootstrap-vue-next/dist/bootstrap-vue-next.css"; // Bootstrap Vue CSS

const app = createApp(App); // createApp 실행
app.use(BootstrapVueNext); // BootstrapVueNext 적용
app.mount("#app"); // app 마운트
