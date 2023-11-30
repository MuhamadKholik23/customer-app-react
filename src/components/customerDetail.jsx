const CustomerDetail = ({ customer }) => {
  return (
    <li>
      <p>{customer.nama}</p>
      <p>{customer.alamat}</p>
      <p>{customer.kota}</p>
      {/* Tambahkan tombol untuk edit/hapus */}
    </li>
  );
};

export default CustomerDetail;
