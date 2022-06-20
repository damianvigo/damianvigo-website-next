import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
// Components
import Link from 'next/link';
import Layout from '../components/layouts/Layout';
// Styles
import formStyledModule from '../styles/Form.module.css';

const initialState = {
  img: '',
  title: '',
  description: '',
  technologies: '',
  github: '',
  online: '',
};

const New = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(form);
  };

  const postData = async (form) => {
    try {
      // console.log(form);

      let options = {
        body: form,
        headers: { 'content-type': 'application/json' },
      };

      const res = await helpHttp().post('/api/proyect', options);

      console.log(res);

      setForm(initialState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Agregar Proyecto</h1>
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
        <input
          type="text"
          placeholder="description"
          name="description"
          autoComplete="off"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="technologies"
          name="technologies"
          autoComplete="off"
          value={form.technologies}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="github"
          name="github"
          autoComplete="off"
          value={form.github}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="online"
          name="online"
          autoComplete="off"
          value={form.online}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
        <Link href="/">
          <a>Al home</a>
        </Link>
      </form>
    </Layout>
  );
};

export default New;
