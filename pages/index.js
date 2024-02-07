import AreaList from "@/components/AreaList";
import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import IngredientList from "@/components/IngredientList";
import Layout from "@/components/Layout";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <Layout title="Home">
      <Header />

      <ListItem title="List Categories" link="categories">
        <CategoryList />
      </ListItem>

      <ListItem title="List Area" link="area">
        <AreaList />
      </ListItem>

      <ListItem title="List Ingredients" link="ingredients">
        <IngredientList />
      </ListItem>
    </Layout>
  );
}
