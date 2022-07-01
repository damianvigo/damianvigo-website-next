// Components
import FormPost from '../components/FormPost';
import Layout from '../components/layouts/Layout';

const NewPost = () => {
  return (
    <Layout>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="container-900px section full-lg-screen"
      >
        <div>
          <h1>Agregar Post</h1>
          <FormPost />
        </div>
      </section>
    </Layout>
  );
};

export default NewPost;
