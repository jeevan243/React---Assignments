export const GroceryList = ({ items, Delete }) => {
  // console.log(items);
  return (
    <>
      <div>
        {items.map((e) => {
          return (
            <>
              <h3 key={e.id}>{e.item}</h3>
              <button
                onClick={() => {
                  
                  Delete(e);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};
