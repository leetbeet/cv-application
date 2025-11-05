import { useState } from 'react';

export default function DropDown({ FormComponent, formClass, formName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <div className={formClass}>
        <h2 onClick={toggleDropDown}>{formName}</h2>
        {isOpen && FormComponent}
      </div>
    </>
  );
}
