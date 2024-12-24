import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      Admin header
      <div>{children}</div>
      Admin footer
    </div>
  );
};

export default AdminLayout;
