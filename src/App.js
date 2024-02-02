import GenericRoutes from "./Routes";
import * as Components from "./Components";

function App() {
  return (
    <div className="App font-orkneyRegular flex gap-2">
      <Components.SideBar />
      <GenericRoutes />
    </div>
  );
}

export default App;
