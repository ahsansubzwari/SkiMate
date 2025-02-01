import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, X, Star, Heart, Zap, ChevronRight } from "lucide-react";

interface SkiProfile {
  id: string;
  name: string;
  age: number;
  photos: string[];
  bio: string;
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  preferredTerrain: ("Park" | "Backcountry" | "Groomed")[];
  homeResort: string;
  currentResort: string;
  distance?: number;
}

interface SwipeCardProps {
  profile?: SkiProfile;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSuperLike?: () => void;
}

const defaultProfile: SkiProfile = {
  id: "1",
  name: "Sarah Alpine",
  age: 28,
  photos: [
    "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800",
    "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800",
  ],
  bio: "Powder chaser ❄️ Looking for someone to share first tracks with!",
  skillLevel: "Advanced",
  preferredTerrain: ["Backcountry", "Groomed"],
  homeResort: "Whistler Blackcomb",
  currentResort: "Whistler Blackcomb",
  distance: 12,
};

const SwipeCard = ({
  profile = defaultProfile,
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
  onSuperLike = () => {},
}: SwipeCardProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right" | null>(
    null,
  );

  const handleSwipe = (direction: "left" | "right") => {
    setDirection(direction);
    setTimeout(() => {
      if (direction === "left") onSwipeLeft();
      else onSwipeRight();
      setDirection(null);
    }, 200);
  };

  const handleNextPhoto = () => {
    if (currentPhotoIndex < profile.photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <AnimatePresence>
        <motion.div
          key={profile.id}
          initial={{ scale: 1 }}
          animate={{
            scale: 1,
            x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
            rotate: direction === "left" ? -20 : direction === "right" ? 20 : 0,
          }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md relative"
        >
          <Card className="overflow-hidden bg-black">
            <div className="relative h-[640px]">
              {/* Main photo */}
              <img
                src={profile.photos[currentPhotoIndex]}
                alt={`${profile.name}'s photo`}
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

              {/* Photo navigation dots */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-1">
                {profile.photos.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1 h-1 rounded-full ${index === currentPhotoIndex ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>

              {/* Profile info */}
              <div className="absolute bottom-20 left-0 right-0 px-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-white">
                    {profile.name}
                  </h2>
                  <span className="text-2xl text-white">{profile.age}</span>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-white border-none ml-2"
                  >
                    ✓
                  </Badge>
                </div>

                <div className="flex items-center gap-2 mt-2 text-white/80">
                  <span>{profile.distance} miles away</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-3 px-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gray-900/50 border-gray-600 hover:bg-gray-800/50"
                  onClick={() => handleSwipe("left")}
                >
                  <RotateCcw className="h-6 w-6 text-white" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gray-900/50 border-gray-600 hover:bg-gray-800/50"
                  onClick={() => handleSwipe("left")}
                >
                  <X className="h-6 w-6 text-rose-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gray-900/50 border-gray-600 hover:bg-gray-800/50"
                  onClick={onSuperLike}
                >
                  <Star className="h-6 w-6 text-blue-400" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gray-900/50 border-gray-600 hover:bg-gray-800/50"
                  onClick={() => handleSwipe("right")}
                >
                  <Heart className="h-6 w-6 text-green-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-gray-900/50 border-gray-600 hover:bg-gray-800/50"
                  onClick={onSuperLike}
                >
                  <Zap className="h-6 w-6 text-purple-400" />
                </Button>
              </div>

              {/* Next photo button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-transparent hover:bg-black/10"
                onClick={handleNextPhoto}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SwipeCard;
