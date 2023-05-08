import React, { useEffect } from "react";
import "./_sidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/product";
const Sidebar = () => {
  const { product } = useSelector((obj) => obj);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProductCategories());
  }, []);

  return (
    <div>
      <div className="sidebar_category">
        <div className="section-title">
          <h4>Categories</h4>
        </div>
        {product.categories.map((item, index) => {
          return (
            <div className="category_accordian" key={index}>
              <div className="accordian">
                <div className="card">
                  <div className="card-heading">
                    <a>{item.Category}</a>
                  </div>
                  <div className="card-body">
                    <ul>
                      {item.SubCategory.map((subitem, index) => {
                        return (
                          <li key={index}>
                            <a href="#">{subitem.Name} </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
