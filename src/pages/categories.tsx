import { Button } from "~/components/Button";
import { api } from "~/utils/api";

const Categories = () => {
  const getAllQuery = api.category.getAll.useQuery();
  const { data: categories } = getAllQuery;
  const { mutate: addCategory } = api.category.add.useMutation();
  const { mutate: deleteCategory } = api.category.delete.useMutation();
  if (!categories) return null;
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <Button
        onClick={() => {
          addCategory({ name: "Category" });
          void getAllQuery.refetch();
        }}
      >
        Add Category
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          const toDelete = categories.find(
            (category) => category.name === "Category"
          );
          if (!toDelete) return;
          deleteCategory({ id: toDelete.id });
          void getAllQuery.refetch();
        }}
      >
        Delete Category
      </Button>
    </div>
  );
};

export default Categories;
