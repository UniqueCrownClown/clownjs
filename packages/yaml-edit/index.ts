import { App } from "vue";
import YamlEdit from "./src/index.vue";

YamlEdit.install = (app: App): void => {
  app.component(YamlEdit.name, YamlEdit);
};

export default YamlEdit;
