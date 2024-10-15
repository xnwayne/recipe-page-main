import React from "react";

function List({ title, ordered, items }) {
  return (
    <div className="mt-4 list border-bottom pb-4">
      <h3 className="title lists-title">{title}</h3>
      <ul className={`${ordered ? "ordered" : "numbered"} d-flex flex-column gap-2 mt-3`}>
        {items.map((item, index) => {
          if (title === "Instructions") {
            const [beforeColon, afterColon] = item.split(": ");
            return (
              <li key={index}>
                <strong className="before-colon">{beforeColon}:</strong> {afterColon}
              </li>
            );
          } else {
            return <li key={index}>{item}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default List;
