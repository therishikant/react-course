function Modal(props) {
  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
      <button className="btn" onClick={props.onDelete}>Delete</button>
    </div>
  );
}

export default Modal;
