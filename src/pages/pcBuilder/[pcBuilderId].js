
const CategroyComponents = () => {
    return (
        <div>
            <h1>PC Builder Components</h1>
        </div>
    );
};

export default CategroyComponents;


// export const getStaticPaths = async () => {
//     const res = await fetch(`${process.env.BASE_URL}/categories`);
//     const categories = await res.json();
//     console.log("static-path",categories)
//     const paths = categories.data?.map((category) => ({
//       params: { pcBuilderId: category._id }, //here id after params should be the name of dynamic pageId which we have create for dynamin render. here id should be named newsId
//     }));
  
//     return { paths, fallback: false }
//   }
//   export const getStaticProps = async (context) => {
//       const { params } = context;
//       const res = await fetch(`https://pc-builder-server-lilac.vercel.app/categories/${params.categoryId}`);
//       const data = await res.json();
//       return {
//         props: {
//           category: data,
//         },
//       };
//     };