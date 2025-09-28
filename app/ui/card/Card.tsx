import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CardProps {
    title?: string;
    description?: string;
    url?: string;
    imageUrl?: string;
    link?: string;
    children?: ReactNode;
}

export default function Card({ title, description, url, imageUrl, link, children }: CardProps) {
    // Helper function to determine if a link is external
    const isExternalLink = (url: string) => {
        return url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');
    };

    const CardContent = () => (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 p-4">
            <div className="flex items-center gap-4">
                {/* Circular Image/Avatar Section */}
                {imageUrl && (
                    <div className="flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
                            <Image
                                src={imageUrl}
                                alt={title || 'Card image'}
                                fill
                                className="object-cover"
                                sizes="96px"
                            />
                        </div>
                    </div>
                )}
                
                {/* Content Section */}
                <div className="flex-1 min-w-0">
                    {/* Title */}
                    {title && (
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                            {title}
                        </h3>
                    )}
                    
                    {/* Description */}
                    {description && (
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-relaxed">
                            {description}
                        </p>
                    )}
                    
                    {/* URL Display */}
                    {url && (
                        <div className="flex items-center text-xs text-gray-400">
                            <span className="truncate">By {url}</span>
                        </div>
                    )}
                    
                    {/* Children Content */}
                    {children && (
                        <div className="mt-3">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    // If link is provided, wrap the card appropriately
    if (link) {
        // External link - use regular anchor tag
        if (isExternalLink(link)) {
            return (
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform duration-200"
                >
                    <CardContent />
                </a>
            );
        }
        
        // Internal link - use Next.js Link
        return (
            <Link href={link} className="block hover:scale-105 transition-transform duration-200">
                <CardContent />
            </Link>
        );
    }

    // Otherwise, return the card without link wrapper
    return <CardContent />;
}