import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useForm } from '../hooks/useForm';
import { useRouter } from 'next/router';

// Styles
import formStyledModule from '../styles/Form.module.css';

// Icons
import SvgLoader from '../assets/icon/elements/SvgLoader';

// Helpers Form
import initialForm from '../helpers/initialForm';
import { validationsForm } from '../helpers/validationsForm';
import MessageErrorForm from './MessageErrorForm';

const Form = () => {
  const btnForm = useRef();
  const router = useRouter();

  const [isFocus, setIsFocus] = useState(true);

  /*   useEffect(() => {
    const { pathname } = router;
    console.log(pathname);

    if (pathname === '/contacto') {
      setIsFocus(true);
    }
  }, [isFocus, router]); */

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        ref={btnForm}
        className={formStyledModule.contactForm}
      >
        <input
          autoFocus={isFocus}
          type="text"
          name="name"
          title="El nombre sólo acepta letras y espacios en blanco"
          placeholder="Tu nombre"
          required
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          autoComplete="off"
        />
        {errors.name && <MessageErrorForm errorName={errors.name} />}
        <input
          type="email"
          name="email"
          title="Email incorrecto"
          placeholder="Tu email"
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          autoComplete="off"
        />
        {errors.name && <MessageErrorForm errorEmail={errors.email} />}
        <input
          type="text"
          name="subject"
          title="El Asunto es requerido"
          placeholder="Asunto"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          autoComplete="off"
        />
        {errors.name && <MessageErrorForm errorSubject={errors.subject} />}
        <textarea
          name="comments"
          cols="50"
          rows="10"
          placeholder="Tu comentario"
          title="Tu comentario no debe exceder los 255 caracteres"
          data-pattern="^.{1,255}$"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          autoComplete="off"
        ></textarea>
        {errors.name && <MessageErrorForm errorComment={errors.comments} />}
        <input type="submit" value="Envíar" />
        {loading && <SvgLoader />}
        {response && (
          <div className={formStyledModule.contactFormError}>
            <p>
              Sus datos han sido enviados.
              <br />
              ¡Me pondré en contacto contigo pronto! 🙂
            </p>
          </div>
        )}
      </form>
    </>
  );
};

export default Form;
