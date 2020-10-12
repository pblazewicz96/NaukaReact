import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest słońce",
    author: "Pan Paździoch",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi lorem, congue a risus id, sodales maximus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et consequat ligula, ut finibus ipsum. Curabitur lobortis tortor ultrices, vulputate augue non, consequat eros. Aenean gravida viverra urna, nec vehicula augue pharetra vel. Aliquam tempor feugiat augue id iaculis. Nunc maximus sodales leo vitae suscipit. Cras dapibus consectetur quam sit amet suscipit.",
  },
  {
    id: 2,
    title: "Czym jest ksiezyc",
    author: "Pan Paździoch",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi lorem, congue a risus id, sodales maximus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et consequat ligula, ut finibus ipsum. Curabitur lobortis tortor ultrices, vulputate augue non, consequat eros. Aenean gravida viverra urna, nec vehicula augue pharetra vel. Aliquam tempor feugiat augue id iaculis. Nunc maximus sodales leo vitae suscipit. Cras dapibus consectetur quam sit amet suscipit.",
  },
  {
    id: 3,
    title: "Czym jest RPA",
    author: "Pan Paździoch",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi lorem, congue a risus id, sodales maximus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et consequat ligula, ut finibus ipsum. Curabitur lobortis tortor ultrices, vulputate augue non, consequat eros. Aenean gravida viverra urna, nec vehicula augue pharetra vel. Aliquam tempor feugiat augue id iaculis. Nunc maximus sodales leo vitae suscipit. Cras dapibus consectetur quam sit amet suscipit.",
  },
  {
    id: 4,
    title: "Czym jest niebo",
    author: "Pan Paździoch",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi lorem, congue a risus id, sodales maximus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et consequat ligula, ut finibus ipsum. Curabitur lobortis tortor ultrices, vulputate augue non, consequat eros. Aenean gravida viverra urna, nec vehicula augue pharetra vel. Aliquam tempor feugiat augue id iaculis. Nunc maximus sodales leo vitae suscipit. Cras dapibus consectetur quam sit amet suscipit.",
  },
  {
    id: 5,
    title: "Czym jest cukier",
    author: "Pan Paździoch",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi lorem, congue a risus id, sodales maximus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur et consequat ligula, ut finibus ipsum. Curabitur lobortis tortor ultrices, vulputate augue non, consequat eros. Aenean gravida viverra urna, nec vehicula augue pharetra vel. Aliquam tempor feugiat augue id iaculis. Nunc maximus sodales leo vitae suscipit. Cras dapibus consectetur quam sit amet suscipit.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
