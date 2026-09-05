interface ISlugProps {
    params: Promise<{ slug: String }>
};

async function MultipleSlugPage({ params }: ISlugProps) {
    const { slug } = await params;

    return(
        <div>
            <h1>Multiple Slugs Page</h1>
            <p>Your Slug is: {slug}</p>
        </div>
    );
}

export default MultipleSlugPage;