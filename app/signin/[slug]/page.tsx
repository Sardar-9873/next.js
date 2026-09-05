interface ISlugProps {
    params: Promise<{slug:String}>
};

async function SlugPage({params}: ISlugProps) {
    const {slug} = await params;

  return (
    <div>
        <h1>Slug Page</h1>
        <p>Your slug is {slug}</p>
    </div>
  );
  
}

export default SlugPage;