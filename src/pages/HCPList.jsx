import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

function HCPList() {


  const [hcps, setHcps] = useState([]);

  const [loading, setLoading] = useState(true);


  const [editing, setEditing] = useState(null);


  const [form, setForm] = useState({
    name:"",
    speciality:"",
    location:""
  });



  useEffect(() => {
    fetchHCPs();
  }, []);




  const fetchHCPs = async () => {

    try {

      const { data } = await api.get("/hcp");

      setHcps(data);


    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };





  // DELETE HCP

  const deleteHCP = async (id) => {


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this HCP?"
    );


    if(!confirmDelete) return;



    try {


      await api.delete(`/hcp/${id}`);


      alert("HCP Deleted Successfully ✅");


      fetchHCPs();



    } catch(error){

      console.log(error);

      alert("Delete Failed");

    }


  };







  // EDIT CLICK

  const handleEdit = (hcp)=>{


    console.log("EDIT HCP:",hcp);


    setEditing(hcp.id);



    setForm({

      name:hcp.name,

      speciality:hcp.speciality,

      location:hcp.location

    });


  };







  // UPDATE HCP

  const handleUpdate = async()=>{


    try{


      const {data}=await api.put(

        `/hcp/${editing}`,

        form

      );



      console.log(data);



      alert("HCP Updated Successfully ✅");



      setEditing(null);



      fetchHCPs();



    }
    catch(error){


      console.log(
        error.response?.data
      );


      alert("Update Failed");


    }


  };





  return (

    <Layout>


      <h1 className="text-3xl font-bold mb-6">

        Healthcare Professionals

      </h1>





      {/* EDIT FORM */}

      {
        editing && (

        <div className="bg-white shadow rounded-xl p-6 mb-6">


          <h2 className="text-xl font-bold mb-4">

            Edit HCP

          </h2>




          <input

            value={form.name}

            onChange={(e)=>
              setForm({
                ...form,
                name:e.target.value
              })
            }

            placeholder="Name"

            className="border p-3 rounded w-full mb-3"

          />




          <input

            value={form.speciality}

            onChange={(e)=>
              setForm({
                ...form,
                speciality:e.target.value
              })
            }

            placeholder="Speciality"

            className="border p-3 rounded w-full mb-3"

          />




          <input

            value={form.location}

            onChange={(e)=>
              setForm({
                ...form,
                location:e.target.value
              })
            }

            placeholder="Location"

            className="border p-3 rounded w-full mb-3"

          />




          <button

            onClick={handleUpdate}

            className="bg-blue-600 text-white px-6 py-3 rounded"

          >

            Update HCP

          </button>



        </div>

        )
      }







      <div className="bg-white rounded-xl shadow overflow-hidden">


        <table className="w-full">



        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4 text-left">
              ID
            </th>

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Speciality
            </th>

            <th className="p-4 text-left">
              Location
            </th>

            <th className="p-4 text-center">
              Action
            </th>


          </tr>


        </thead>






        <tbody>


        {
          loading ? (


          <tr>

            <td
            colSpan="5"
            className="text-center p-6"
            >

              Loading...

            </td>

          </tr>


          )


          :

          hcps.length===0 ? (


          <tr>

            <td
            colSpan="5"
            className="text-center p-6"
            >

              No HCP Found

            </td>

          </tr>


          )


          :


          hcps.map((hcp)=>(


          <tr

            key={hcp.id}

            className="border-b hover:bg-slate-50"

          >


            <td className="p-4">
              {hcp.id}
            </td>


            <td className="p-4">
              {hcp.name}
            </td>


            <td className="p-4">
              {hcp.speciality}
            </td>


            <td className="p-4">
              {hcp.location}
            </td>




            <td className="p-4 text-center">


              <button

                onClick={()=>handleEdit(hcp)}

                className="
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                px-3
                py-1
                rounded
                mr-2
                "

              >

                Edit

              </button>





              <button

                onClick={()=>deleteHCP(hcp.id)}

                className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-3
                py-1
                rounded
                "

              >

                Delete

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


export default HCPList;