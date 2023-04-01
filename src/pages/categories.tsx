import { useRef } from "react";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input/Input";
import { api } from "~/utils/api";

const Categories = () => {
  const getAllQuery = api.category.getAll.useQuery(undefined);
  const { data: categories, isLoading } = getAllQuery;
  const { mutate: addCategory } = api.category.add.useMutation({
    onSuccess: () => void getAllQuery.refetch(),
    onError: (error) => alert(error.message),
  });
  const { mutate: deleteCategory } = api.category.delete.useMutation({
    onSuccess: () => void getAllQuery.refetch(),
  });
  const inputRef = useRef<HTMLInputElement>(null);
  if (isLoading) return <div>Loading...</div>;
  if (!categories) return null;
  const handleAddCategory = () => {
    const name = inputRef.current?.value;
    if (!name) return;
    addCategory({ name });
    inputRef.current?.value && (inputRef.current.value = "");
  };

  return (
    <div className="grid h-full grid-cols-2 items-center justify-items-center">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <div className="m-auto flex flex-col items-center justify-center gap-2">
        <Input
          onEnter={handleAddCategory}
          ref={inputRef}
          placeholder={"Enter new category"}
        />
        <div className="flex gap-5">
          <Button onClick={handleAddCategory}>Add Category</Button>
          {categories.length > 0 && (
            <Button
              variant="danger"
              onClick={() => {
                const toDelete = categories.find(() => true);
                if (!toDelete) return;
                deleteCategory({ id: toDelete.id });
              }}
            >
              Delete Category
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
