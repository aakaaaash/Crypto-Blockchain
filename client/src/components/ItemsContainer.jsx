import Item from "./Item";
import { App, Exchange, Resources, Company } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={App} title="App" />
      <Item Links={Exchange} title="Exchange" />
      <Item Links={Resources} title="Resources" />
      <Item Links={Company} title="Company" />
    </div>
  );
};

export default ItemsContainer;
