import Card from '../ui/card/Card';

export default function TestPage() {
    const dummyCards = [
        {
            title: "Behance",
            description: "The World's Best Creators Are On Behance · A comprehensive platform to help hirers and creators connect and collaborate.",
            url: "behance.com",
            imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
            link: "https://behance.com"
        },
        {
            title: "Creative Portfolio Showcase",
            description: "Discover amazing creative works from talented designers and artists around the world. Get inspired by innovative projects and cutting-edge designs.",
            url: "portfolio.design",
            imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center",
            link: "/projects"
        },
        {
            title: "Design Resources Hub",
            description: "Access thousands of free design resources, templates, and tools to enhance your creative projects. Perfect for designers of all skill levels.",
            url: "designhub.io",
            imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center",
            link: "/resources"
        },
        {
            title: "UI/UX Design Trends 2024",
            description: "Stay ahead of the curve with the latest UI/UX design trends. Learn about modern design principles and best practices.",
            url: "uxtrends.com",
            imageUrl: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop&crop=center",
            link: "/trends"
        },
        {
            title: "Freelance Design Community",
            description: "Connect with fellow freelance designers, share experiences, and find new opportunities in our vibrant community.",
            url: "freelancedesign.net",
            imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
            link: "/community"
        },
        {
            title: "Digital Art Gallery",
            description: "Explore stunning digital artworks from emerging and established artists. Discover new techniques and artistic styles.",
            url: "digitalart.gallery",
            imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&crop=center",
            link: "/gallery"
        }
    ];

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
             

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dummyCards.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={card.description}
                            url={card.url}
                            imageUrl={card.imageUrl}
                            link={card.link}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
