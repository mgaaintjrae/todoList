import React from "react";
import { NavLink } from 'react-router-dom'
import {
  FaListAlt,
  FaCheckSquare,
  FaPlusSquare,
  FaTrash,
} from "react-icons/fa";

export default function NavBar({onDeleteCompleted}) {
  return (
    <div>
      <footer
        className="panel-block is-justify-content-space-between has-background-light p-3 "
        id="mainFooter"
      >
        <div className="">
          <NavLink to="/" className="button is-link is-outlined is-small m-1" exact={true}>
            <FaListAlt />
          </NavLink>
          <NavLink to="/completed" className="button is-success is-outlined is-small m-1">
            <FaCheckSquare />
          </NavLink>
          <NavLink to="/add-task" className="button is-primary is-outlined is-small m-1" exact={true}>
            <FaPlusSquare />
          </NavLink>
        </div>
        <button className="button is-danger is-small is-outlined" onClick={onDeleteCompleted}>
          <FaTrash />
        </button>
      </footer>
    </div>
  );
}
