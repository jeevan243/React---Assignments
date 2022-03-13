export const Appenddata = ({ getdatabaseData, Delete }) => {
  return (
    <>
      <h3>User's Data</h3>
      <hr />
      <div className="users-data">
        <table>
          <thead>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {getdatabaseData.map((e) => {
              return (
                <>
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.department}</td>
                    <td>{e.gender}</td>
                    <td>
                      <button
                        onClick={() => {
                          Delete(e);
                         
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
