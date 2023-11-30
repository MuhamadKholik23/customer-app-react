import { useState } from "react";
import ListCustomer from "../components/listCustomer";
import AddCustomer from "../components/addCustomer";

const ViewCustomer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const openModal = () => {
    setSelectedCustomer(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedCustomer(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-gray-100 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Customer Management</h1>

        <AddCustomer showModal={showModal} closeModal={closeModal} />
        <ListCustomer />

        <div className="flex justify-end mb-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
            onClick={openModal}
          >
            Add Customer
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewCustomer;
