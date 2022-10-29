import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames";

function Test({ listItem, style,key }) {
  const {from,to,balance,ticker} = listItem;
  return (
      <>
          <tr key={key} className="intro-x" style={style}>
            <td className="w-40"></td>
            <td>
              <a href="" className="font-medium whitespace-nowrap">
                {JSON.stringify(from)}
              </a>
              <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {JSON.stringify(to)}
              </div>
            </td>
            <td className="text-center">
              {JSON.stringify(balance)}
            </td>
            <td className="w-40">
              <div
                className={classnames({
                  "flex items-center justify-center": true,
                })}
              >
                <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                {JSON.stringify(ticker)}
              </div>
            </td>
            <td className="w-56 table-report__action">
              <div className="flex items-center justify-center">
                <a className="flex items-center mr-3" href="#">
                  <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                  Edit
                </a>
                <a
                  className="flex items-center text-danger"
                  href="#"
                  onClick={() => {
                    setDeleteConfirmationModal(true);
                  }}
                >
                  <Lucide icon="Trash2" className="w-4 h-4 mr-1"
                 /> Delete
                </a>
              </div>
            </td>
          </tr>

      </>
  );
}

export default React.memo(Test);
