import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items, className = "banner-breadcrumb" }) {
  return (
    <p className={className}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && " / "}
          {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
        </React.Fragment>
      ))}
    </p>
  );
}
