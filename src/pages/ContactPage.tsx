import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = (): ReactNode => {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event): void => {
        navigate('/');
        event.preventDefault();
      }}
    >
      <button>Submit</button>
    </form>
  );
}

export default ContactPage;
