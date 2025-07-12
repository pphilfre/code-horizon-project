import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { CleanButton } from '@/components/ui/clean-button';
import { getProjectBySlug } from '@/data';

interface ProjectCarouselProps {
  projectSlug: string;
  className?: string;
}

export const ProjectCarousel = ({ projectSlug, className = '' }: ProjectCarouselProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjectImages = () => {
      // Get project data from external file
      const project = getProjectBySlug(projectSlug);
      
      // Use images from project data, or fallback to placeholder images
      const images = project?.images || [
        `https://via.placeholder.com/800x400/0f0f0f/ff6b35?text=${encodeURIComponent(projectSlug.replace(/-/g, ' ').toUpperCase())}+Screenshot+1`,
        `https://via.placeholder.com/800x400/1a1a1a/ff8c42?text=${encodeURIComponent(projectSlug.replace(/-/g, ' ').toUpperCase())}+Screenshot+2`,
        `https://via.placeholder.com/800x400/2a2a2a/ffb74d?text=${encodeURIComponent(projectSlug.replace(/-/g, ' ').toUpperCase())}+Screenshot+3`
      ];

      setImages(images);
      setLoading(false);
    };

    getProjectImages();
  }, [projectSlug]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [isZoomed, nextImage, prevImage]);

  if (loading) {
    return (
      <div className={`bg-gray-900/50 rounded-xl border border-gray-800 p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="bg-gray-800 rounded-lg aspect-video mb-4"></div>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 bg-gray-800 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 ${className}`}>
      <h3 className="text-lg font-bold mb-4 text-white">Project Gallery</h3>
      
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-lg bg-black">
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${projectSlug} screenshot ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.src = `https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Image+Not+Found`;
              }}
            />
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <CleanButton
                variant="outline"
                size="sm"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </CleanButton>
              
              <CleanButton
                variant="outline"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </CleanButton>
            </>
          )}
          
          {/* Zoom Button */}
          <CleanButton
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
            onClick={() => setIsZoomed(true)}
          >
            <ZoomIn className="w-4 h-4" />
          </CleanButton>
          
          {/* Image Counter */}
          <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1 text-xs text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
      
      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? 'border-orange-500 ring-2 ring-orange-500/30'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://via.placeholder.com/64x40/333/fff?text=${index + 1}`;
                }}
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`${projectSlug} screenshot ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Image+Not+Found`;
                }}
              />
              
              {/* Close Button */}
              <CleanButton
                variant="outline"
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
                onClick={() => setIsZoomed(false)}
              >
                ✕
              </CleanButton>
              
              {/* Navigation in fullscreen */}
              {images.length > 1 && (
                <>
                  <CleanButton
                    variant="outline"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </CleanButton>
                  
                  <CleanButton
                    variant="outline"
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm border-white/20 hover:bg-black/70 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </CleanButton>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
