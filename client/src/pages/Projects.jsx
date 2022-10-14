import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Clients, DeleteClient } from "../api/client";

const Projects = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    Clients().then((response) => {
      setClients(response.data);
    });
  }, []);

  const deleteClient = (id) => {
    DeleteClient(id).then((response) => {
      if (response.status === 201) {
        toast.success("Client deleted successfully");
      } else {
        toast.error("Client deleted failed");
      }
    });
  };

  const { ExportCSVButton } = CSVExport;
  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "#",
      text: " ID",
      sort: true,
    },
    {
      dataField: "name",
      text: " Name",
      sort: true,
    },
    {
      dataField: "phone",
      text: " Phone",
      sort: true,
    },
    {
      dataField: "email",
      text: " Email",
      sort: true,
    },
    {
      dataField: "bussinessName",
      text: "Bussiness Name",
      sort: true,
    },
    {
      dataField: "_id",
      text: "View",
      formatter: (cellContent, row) => (
        <Link to={"/viewClient/" + row._id} className="view">
          <i className="material-icons">&#xE417;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Edit",
      formatter: (cellContent, row) => (
        <Link to={"/editClient/" + row._id} className="edit">
          <i className="material-icons">&#xE254;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Delete",
      formatter: (cellContent, row) => (
        <Link to="#" className="delete" onClick={(e) => deleteClient(row._id)}>
          <i className="material-icons">&#xE872;</i>
        </Link>
      ),
    },
  ];

  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar />

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Clients</h1>
                <Link
                  to="/createClient"
                  className="d-none d-sm-inline-block btn btn-ht btn-br btn-bg btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus-circle fa-sm text-white-50"></i>
                  &nbsp; Create client
                </Link>
              </div>
              <div>
                <ToastContainer />
              </div>
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>
                          Client <b>Details</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <ToolkitProvider
                    keyField="id"
                    data={clients}
                    columns={columns}
                    search
                    exportCSV
                  >
                    {(props) => (
                      <div>
                        <div className="d-flex align-items-center justify-content-between search-export-col">
                          <SearchBar
                            {...props.searchProps}
                            className="form-control mb-0"
                          />
                          <ExportCSVButton
                            {...props.csvProps}
                            className="btn btn-ht btn-br btn-bg btn-primary"
                          >
                            Export CSV!!
                          </ExportCSVButton>
                        </div>

                        <hr />
                        <BootstrapTable
                          {...props.baseProps}
                          pagination={paginationFactory()}
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <Footer />
        </div>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <ScrollTop />

      {/* <!-- Logout Modal--> */}
      <LogoutModel />
    </>
  );
};

export default Projects;
