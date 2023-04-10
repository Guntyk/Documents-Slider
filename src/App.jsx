import DocumentsFolder from "./DocumentsFolder/DocumentsFolder";
import DocumentsSlider from "./DocumentsSlider/DocumentsSlider";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <DocumentsFolder />
        </Route>
        <Route exact path="/documents/:documentsType">
          <DocumentsSlider />
        </Route>
      </Switch>
    </>
  );
}
