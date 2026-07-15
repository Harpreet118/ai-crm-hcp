import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

function HCPList() {
const deleteHCP = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this HCP?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/hcp/${id}`);

    alert("HCP Deleted Successfully ✅");

    fetchHCPs();

  } catch (error) {
    console.error(error);
    alert("Delete Failed");
  }
};

  const [hcps, setHcps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHCPs();
  }, []);

  const fetchHCPs = async () => {
    try {
      const { data } = await api.get("/hcp");
      setHcps(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Healthcare Professionals
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">
<thead className="bg-blue-600 text-white">
  <tr>
    <th className="p-4 text-left">ID</th>
    <th className="p-4 text-left">Name</th>
    <th className="p-4 text-left">Speciality</th>
    <th className="p-4 text-left">Location</th>
    <th className="p-4 text-center">Action</th>
  </tr>
</thead>

          <tbody>

            {loading ? (

              <tr>
                <td colSpan="4" className="text-center p-6">
                  Loading...
                </td>
              </tr>

            ) : hcps.length === 0 ? (

              <tr>
                <td colSpan="5" className="text-center p-6">
  No HCP Found
</td>
              </tr>

            ) : (

              hcps.map((hcp) => (
                

               <tr
  key={hcp.id}
  className="border-b hover:bg-slate-50"
>
  <td className="p-4">{hcp.id}</td>
  <td className="p-4">{hcp.name}</td>
  <td className="p-4">{hcp.speciality}</td>
  <td className="p-4">{hcp.location}</td>

  <td className="p-4 text-center">

    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
    >
      Edit
    </button>

    <button
      onClick={() => deleteHCP(hcp.id)}
      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
    >
      Delete
    </button>

  </td>
</tr>
                

              ))

            )}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

export default HCPList;