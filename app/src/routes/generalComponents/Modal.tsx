import React from "react";

import AriaModal from "react-aria-modal";
import i18n from "src/producers/languages/i18n";
import "./modal.css";
import { SVGs } from "src/assets";
import { PrimaryButton } from "./PrimaryButton";

export const Modal: view = ({
  allModals = update.modal,
  children,
  title,
  image,
  width,
  okButtonText,
  okButtonDissabled,
  onOkClick,
  onCancelClick,
}) => {
  function handleOKClick() {
    if (onOkClick) onOkClick();
    allModals.remove();
  }
  function handleCancelClick() {
    if (onCancelClick) onCancelClick();
    allModals.remove();
  }

  return (
    <AriaModal titleId="modal" underlayClickExits={true} verticallyCenter={true} onExit={handleCancelClick}>
      <div className="modal p-8" style={{ width }}>
        <header className="flex justify-between mb-4">
          <div>
            {image && image()}
            <h2 className="modal-title mt-2">{title}</h2>
          </div>

          <SVGs.ModalCancel className="cursor-pointer" onClick={handleCancelClick} />
        </header>
        <div className="modal-body mb-4">{children}</div>
        <footer className="border-t border-gray-300 pt-4 flex justify-end items-center">
          <button
            className="mr-8 pr-1 border-b font-14 uppercase font-medium border-pink-600"
            onClick={handleCancelClick}>
            {i18n.t("cancel")}
          </button>

          {okButtonText && (
            <PrimaryButton onClick={handleOKClick} disabled={okButtonDissabled}>
              {okButtonText}
            </PrimaryButton>
          )}
        </footer>
      </div>
    </AriaModal>
  );
};
