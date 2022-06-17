import { App } from "vue";
import YamlEdit from "./yaml-edit.vue";

YamlEdit.install = (app: App): void => {
  app.component(YamlEdit.name, YamlEdit);
};

export default YamlEdit;
