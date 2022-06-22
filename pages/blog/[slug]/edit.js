import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { helpHttp } from '../../../helpers/helpHttp';
// Components
import FormPost from '../../../components/FormPost';
import Layout from '../../../components/layouts/Layout';
import Button from '../../../utils/Button';

const Edit = () => {
  const [formEdit, setFormEdit] = useState({
    img: '',
    title: '',
    markdown: '',
    slug: '',
    category: '',
  });

  const router = useRouter();
  // console.log(router);
  const { slug } = router.query;

  useEffect(() => {
    fetch(`/api/post/${slug}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((res) => {
        console.log(res);
        const {
          data: { category, img, markdown, slug, title },
        } = res;
        const edit = { category, img, markdown, slug, title };
        /*    console.log(edit); */
        setFormEdit(edit);
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || 'Ocurrio un error';
      });
  }, [slug]);

  const deleteData = async (e) => {
    e.preventDefault();
    console.log('delete');

    let isDelete = window.confirm('¿Eliminas el post dami?');

    if (isDelete) {
      try {
        const res = await helpHttp().del(`/api/post/${slug}`);

        console.log(res);
        /*    router.push('/blog'); */
      } catch (error) {
        console.log(error);
      }
      router.push('/blog');
    } else {
      return;
    }
  };

  return (
    <Layout>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
        className="container-900px section full-lg-screen"
      >
        <div>
          <h1>Editar Post</h1>
          <FormPost formNewMovie={false} formEdit={formEdit} />
          <h2>Eliminar</h2>
          <Button
            crud
            borrar="Eliminar"
            submit="submit"
            eliminar={deleteData}
          />
        </div>
      </section>
    </Layout>
  );
};

export default Edit;
