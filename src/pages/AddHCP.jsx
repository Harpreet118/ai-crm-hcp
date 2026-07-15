import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import api from "../services/api";

function AddHCP() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    speciality: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/hcp", form);

      alert("HCP Added Successfully ✅");

      navigate("/hcps");

    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">

        <h1 className="text-3xl font-bold mb-6">
          Add Healthcare Professional
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="name"
            placeholder="Doctor Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="speciality"
            placeholder="Speciality"
            value={form.speciality}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Saving..." : "Add HCP"}
          </button>

        </form>

      </div>

    </Layout>
  );
}

export default AddHCP;