import { useState, useEffect } from "react";
import { createCustomer, updateCustomer } from "../services/api";

const AddCustomer = ({ showModal, closeModal, customer }) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (customer) {
      setNama(customer.nama || "");
      setAlamat(customer.alamat || "");
      setKota(customer.kota || "");
    }
  }, [customer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nama, alamat, kota };
    let hasError = false;

    if (nama.trim() === "") {
      setError("Nama tidak boleh kosong");
      hasError = true;
    } else if (alamat.trim() === "") {
      setError("Alamat tidak boleh kosong");
      hasError = true;
    } else if (kota.trim() === "") {
      setError("Kota tidak boleh kosong");
      hasError = true;
    } else {
      setError("");
    }

    try {
      if (!hasError) {
        if (customer && customer.id) {
          await updateCustomer(customer.id, data);
        } else {
          await createCustomer(data);
        }

        window.location.reload();
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 ${showModal ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <span className="float-right cursor-pointer" onClick={closeModal}>
            &times;
          </span>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            <label className="block">
              <span className="text-gray-700">Nama:</span>
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Alamat:</span>
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Kota:</span>
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                value={kota}
                onChange={(e) => setKota(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
