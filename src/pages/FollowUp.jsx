import { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";

function FollowUp() {

  const [interaction, setInteraction] = useState("");
  const [followup, setFollowup] = useState("");
  const [loading, setLoading] = useState(false);


  const generateFollowUp = async () => {

    if(!interaction.trim()){
      alert("Please enter interaction details");
      return;
    }


    try {

      setLoading(true);


      const { data } = await api.post("/chat",{
        message: `
Generate a professional follow up email for this interaction:

${interaction}
        `
      });


      console.log(data);


      if(data.response?.followup_email){

        setFollowup(
          data.response.followup_email
        );

      }
      else{

        setFollowup(
          JSON.stringify(data.response,null,2)
        );

      }


    }
    catch(error){

      console.log(error);

      alert("Failed to generate follow up");

    }
    finally{

      setLoading(false);

    }

  };



  return (

    <Layout>


      <h1 className="text-3xl font-bold mb-6">
        AI Follow Up Generator
      </h1>



      <div className="bg-white shadow rounded-xl p-6">


        <label className="font-semibold">
          Interaction Details
        </label>


        <textarea

          value={interaction}

          onChange={(e)=>
            setInteraction(e.target.value)
          }

          rows="6"

          placeholder="
Example:
Met Dr Smith at City Hospital.
Discussed Product X.
Doctor showed positive response.
          "

          className="
          w-full
          border
          rounded-lg
          p-4
          mt-2
          "
        />



        <button

          onClick={generateFollowUp}

          disabled={loading}

          className="
          mt-4
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-lg
          "

        >

        {
          loading
          ?
          "Generating..."
          :
          "Generate Follow Up"
        }


        </button>



      </div>




      {
        followup && (

        <div className="
        mt-6
        bg-white
        shadow
        rounded-xl
        p-6
        ">


          <h2 className="text-xl font-bold mb-3">
            Generated Follow Up Email
          </h2>


          <textarea

            value={followup}

            readOnly

            rows="10"

            className="
            w-full
            border
            rounded-lg
            p-4
            "
          />


        </div>

        )
      }



    </Layout>

  );

}


export default FollowUp;