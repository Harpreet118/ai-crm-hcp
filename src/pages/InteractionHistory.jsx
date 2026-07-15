import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

function InteractionHistory() {

  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    hcp_id: "",
    product: "",
    sentiment: "",
    summary: "",
    interaction_date: "",
    brochure_shared: false,
  });


  useEffect(() => {
    fetchInteractions();
  }, []);



  const fetchInteractions = async () => {

    try {

      const { data } = await api.get("/interaction");

      setInteractions(data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  };



  // SEARCH
  const filteredInteractions = interactions.filter((item)=>{

    const value = 
    `${item.hcp_id}
    ${item.product}
    ${item.sentiment}
    ${item.summary}
    ${item.interaction_date}`
    .toLowerCase();


    return value.includes(search.toLowerCase());

  });



  // EDIT BUTTON
  const handleEdit = (item)=>{

    console.log("Edit Item:",item);


    setEditing(item.id);


    setForm({

      hcp_id:item.hcp_id,

      product:item.product || "",

      sentiment:item.sentiment || "",

      summary:item.summary || "",

      interaction_date:item.interaction_date || "",

      brochure_shared:
      item.brochure_shared === "True"

    });

  };




  // UPDATE API
  const handleUpdate = async()=>{


    try{


      await api.put(
        `/interaction/${editing}`,
        form
      );


      alert("Interaction Updated Successfully ✅");


      setEditing(null);


      fetchInteractions();



    }catch(error){

      console.log(
        error.response?.data
      );

      alert("Update Failed");

    }


  };



  return (

    <Layout>


      <h1 className="text-3xl font-bold mb-6">
        Interaction History
      </h1>



      {/* SEARCH */}

      <input

        type="text"

        placeholder="Search HCP, Product, Sentiment..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        className="
        mb-6
        w-full md:w-96
        border
        rounded-lg
        px-4
        py-3
        outline-none
        "

      />




      {/* EDIT FORM */}

      {
        editing &&

        <div className="bg-white shadow rounded-xl p-6 mb-6">


          <h2 className="text-xl font-bold mb-4">
            Edit Interaction
          </h2>



          <input

            value={form.product}

            onChange={(e)=>
              setForm({
                ...form,
                product:e.target.value
              })
            }

            className="border p-3 rounded w-full mb-3"

            placeholder="Product"

          />




          <input

            value={form.sentiment}

            onChange={(e)=>
              setForm({
                ...form,
                sentiment:e.target.value
              })
            }

            className="border p-3 rounded w-full mb-3"

            placeholder="Sentiment"

          />




          <input

            value={form.interaction_date}

            onChange={(e)=>
              setForm({
                ...form,
                interaction_date:e.target.value
              })
            }

            className="border p-3 rounded w-full mb-3"

            placeholder="Date"

          />




          <textarea

            value={form.summary}

            onChange={(e)=>
              setForm({
                ...form,
                summary:e.target.value
              })
            }

            className="border p-3 rounded w-full mb-3"

            placeholder="Summary"

          />




          <button

            onClick={handleUpdate}

            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            "

          >

            Update Interaction

          </button>


        </div>

      }




      <div className="bg-white rounded-xl shadow overflow-hidden">


        <table className="w-full">


          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4">ID</th>

              <th className="p-4">HCP ID</th>

              <th className="p-4">Product</th>

              <th className="p-4">Sentiment</th>

              <th className="p-4">Date</th>

              <th className="p-4">Summary</th>

              <th className="p-4">Action</th>


            </tr>


          </thead>



          <tbody>


          {
            loading ? (

              <tr>

                <td
                colSpan="7"
                className="text-center p-6"
                >
                  Loading...
                </td>

              </tr>


            )


            :

            filteredInteractions.length === 0 ?


            (

              <tr>

                <td
                colSpan="7"
                className="text-center p-6"
                >
                  No Interaction Found
                </td>

              </tr>


            )


            :


            filteredInteractions.map((item)=>(


              <tr
              key={item.id}
              className="border-b"
              >



                <td className="p-4">
                  {item.id}
                </td>


                <td className="p-4">
                  {item.hcp_id}
                </td>


                <td className="p-4">
                  {item.product}
                </td>


                <td className="p-4">
                  {item.sentiment}
                </td>


                <td className="p-4">
                  {item.interaction_date}
                </td>


                <td className="p-4">
                  {item.summary}
                </td>



                <td className="p-4">


                  <button

                    onClick={()=>handleEdit(item)}

                    className="
                    bg-yellow-500
                    text-white
                    px-4
                    py-2
                    rounded
                    "

                  >

                    Edit

                  </button>


                </td>



              </tr>


            ))


          }


          </tbody>


        </table>


      </div>


    </Layout>

  );

}


export default InteractionHistory;