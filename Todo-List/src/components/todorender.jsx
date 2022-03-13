export const TodoOne = ({ todoData, Delete }) => {
  return (
    <>
      <div>
        {todoData.map((e) => {
          return (
            <>
              <h3 key={e.id}>{e.todo}</h3>

              <button
                onClick={() => {
                  Delete(e);
                }}
              >
                delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};
