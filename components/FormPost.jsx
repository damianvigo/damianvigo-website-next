import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import formStyledModule from '../styles/Form.module.css';

const initialForm = {
  img: '',
  title: '',
  markdown: '',
  slug: '',
  category: '',
};

const FormPost = ({ formEdit, formNewMovie = true }) => {
  /* console.log(postEdit); */
  const router = useRouter();

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!formNewMovie) {
      setForm(formEdit);
    }
  }, [formEdit, formNewMovie]);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.markdown ||
      !form.slug ||
      !form.category ||
      !form.img
    ) {
      alert('Datos incompletos');
      return;
    }

    if (formNewMovie) {
      postData(form);
    } else {
      console.log(form);
      putData(form);
    }

    router.push('/blog');
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  const putData = async (form) => {
    try {
      // console.log(form);

      let options = {
        body: form,
        headers: { 'content-type': 'application/json' },
      };

      const res = await helpHttp().put(`/api/posts/${form.slug}`, options);

      // console.log(res);
      router.push('/blog');
    } catch (error) {
      // console.log(error);
    }
  };

  const postData = async (form) => {
    try {
      // console.log(form);

      let options = {
        body: form,
        headers: { 'content-type': 'application/json' },
      };

      const res = await helpHttp().post('/api/posts', options);

      //  console.log(res);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={formStyledModule.contactForm}>
      <input
        type="text"
        placeholder="img"
        name="img"
        autoComplete="off"
        value={form.img}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="title"
        name="title"
        autoComplete="off"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        type="text"
        placeholder="markdown"
        name="markdown"
        autoComplete="off"
        value={form.markdown}
        onChange={handleChange}
        cols="30"
        rows="15"
      />
      <input
        type="text"
        placeholder="slug"
        name="slug"
        autoComplete="off"
        value={form.slug}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="category"
        name="category"
        autoComplete="off"
        value={form.category}
        onChange={handleChange}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default FormPost;
