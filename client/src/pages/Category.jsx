import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { Categories} from "../api/category";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    Categories().then((response) => {
      setCategory(response.data);
    });
  }, []);

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
                <h1 className="h3 mb-0 text-gray-800">Admin</h1>
                <a
                  href="/createproduct"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus-circle fa-sm text-white-50"></i>
                  &nbsp; Create Category
                </a>
              </div>
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2>
                          Category <b>Details</b>
                        </h2>
                      </div>
                      <div className="col-sm-4">
                        <div className="search-box">
                          <i className="material-icons">&#xE8B6;</i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search&hellip;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>
                          Name <i className="fa fa-sort"></i>
                        </th>
                        <th>Description</th>
                        <th>
                           Color <i className="fa fa-sort"></i>
                        </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category?.map((catItem, key) => {
                        return (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>{catItem.name}</td>
                            <td>{catItem.description}</td>
                            <td>{catItem.color}</td>
                            <td>
                              <a
                                href="#"
                                className="view"
                                title="View"
                                data-toggle="tooltip"
                              >
                                <i className="material-icons">&#xE417;</i>
                              </a>
                              <a
                                href="#"
                                className="edit"
                                title="Edit"
                                data-toggle="tooltip"
                              >
                                <i className="material-icons">&#xE254;</i>
                              </a>
                              <a
                                href="#"
                                className="delete"
                                title="Delete"
                                data-toggle="tooltip"
                              >
                                <i className="material-icons">&#xE872;</i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Showing <b>5</b> out of <b>25</b> entries
                    </div>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a href="#">
                          <i className="fa fa-angle-double-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <i className="fa fa-angle-double-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer --> */}
            <Footer />
        </div>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <ScrollTop/>

      {/* <!-- Logout Modal--> */}
      <LogoutModel />

    </>
  )
}

export default Category