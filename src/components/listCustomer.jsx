import { useState, useEffect } from "react";
import { getAllCustomers } from "../services/api";
import { FaTrash, FaEdit } from "react-icons/fa";
import { deleteCustomer, getCustomerById } from "../services/api";
import AddCustomer from "../components/addCustomer";

const ListCustomer = () => {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    getAllCustomers().then((data) => {
      setCustomers(data);
    });
  }, []);

  const handleEdit = async (customerId) => {
    const customer = await getCustomerById(customerId);
    console.log(customer);
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const handleDelete = async (customerId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pelanggan ini?")) {
      await deleteCustomer(customerId);
      window.location.reload();
    }
  };

  const closeModal = () => {
    setSelectedCustomer(null);
    setShowModal(false);
  };

  return (
    <div>
      <AddCustomer
        showModal={showModal}
        closeModal={closeModal}
        customer={selectedCustomer}
      />
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="border border-gray-300 px-2 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Nama</th>
            <th className="border border-gray-300 px-4 py-2">Alamat</th>
            <th className="border border-gray-300 px-4 py-2">Kota</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr
              key={customer.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">
                {customer.nama}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {customer.alamat}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {customer.kota}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => handleEdit(customer.id)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(customer.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCustomer;
