export const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = 'El nombre es requerido';
  } else if (!regexName.test(form.name.trim())) {
    errors.name = 'El nombre solo acepta letras y espacios en blanco';
  }

  if (!form.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = 'El email es incorrecto';
  }

  if (!form.subject.trim()) {
    errors.subject = 'El asunto a tratar es requerido';
  }

  if (!form.comments.trim()) {
    errors.comments = 'El comentario es requerido';
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = 'El comentario no debe exceder los 255 caracteres';
  }

  return errors;
};
