import React from "react";
import { useState } from "react";

export default function NewTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState({
    msg: "",
    done: false,
  });

  let handleChange = (e) => {
    setNewTodo({ ...newTodo, msg: e.target.value });
  };

  let add = () => {
    addTodo(newTodo);
    setNewTodo({ msg: "", done: false });
  };

  return (
    <div>
      <div className="container">
        <div className="row m-5">
          <div className="col-8 offset-2">
            <div className="input-group">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="new msg"
                value={newTodo.msg}
              />
              <div className="input-group append">
                <div onClick={add} className="btn btn-primary">
                  Add
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
