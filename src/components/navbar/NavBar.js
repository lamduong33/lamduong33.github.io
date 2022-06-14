import React from "react";
import { Link } from "react-router-dom";

export default function TopBar(props) {
  return (
    <div>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/Blog"> Blog</Link>
      </li>
      <li>
        <Link to="/Videos"> Videos</Link>
      </li>
      <li>
        <Link to="/Resume"> Resume</Link>
      </li>
    </div>
  );
}
