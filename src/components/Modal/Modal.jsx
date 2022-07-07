import React from "react";
import { useForm } from "react-hook-form";
import "./modal.css";
import Close from "../../images/CloseT.svg";
import Thanks from "../../images/thanks.svg";

const Modal = ({ active, setActive }) => {
  const {
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const [modalAdd, setModalAdd] = React.useState(false);

  return (
    <div
      className={active ? "modal active " : "modal"}
      onClick={() => setActive(false)}
    >
      {modalAdd ? (
        <div className="modal_thanks" onClick={(e) => e.stopPropagation()}>
          <img width={60} src={Thanks} alt="" />
          <div className="title_thanks">Спасибо!</div>
          <div className="modal_thanks_info">
            Ваша заявка была принята ожидайте, скоро Вам перезвонят
          </div>
          <button
            className="modal_thanks_btn"
            onClick={() => {
              setActive(false);
              setModalAdd(false);
            }}
          >
            Продолжить покупки
          </button>
        </div>
      ) : (
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <img
            className="modal_close"
            src={Close}
            alt=""
            onClick={() => setActive(false)}
          />
          <div className="modal_title">Если у Вас остались вопросы</div>
          <div className="modal_subtitle">
            Оставьте заявку и мы обязательно Вам перезвоним
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              className="submission_form"
              placeholder="Как к Вам обращаться?"
            />
            <input
              {...register("phone")}
              type="tel"
              className="submission_form"
              placeholder="Номер телефона"
            />
            <button
              className="form_button"
              disabled={!isValid}
              onClick={() => {
                setModalAdd(true);
              }}
            >
              Отправить
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Modal;
