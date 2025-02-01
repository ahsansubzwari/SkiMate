import React, { useState } from "react";
import Header from "./navigation/Header";
import SwipeCard from "./profile/SwipeCard";
import MatchAlert from "./profile/MatchAlert";

interface HomeProps {
  initialMatches?: Array<{
    id: string;
    name: string;
    age: number;
    photos: string[];
    bio: string;
    skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    preferredTerrain: ("Park" | "Backcountry" | "Groomed")[];
    homeResort: string;
    currentResort: string;
  }>;
}

const defaultMatches = [
  {
    id: "1",
    name: "Sarah Alpine",
    age: 28,
    photos: [
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800",
      "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800",
    ],
    bio: "Powder chaser ❄️ Looking for someone to share first tracks with!",
    skillLevel: "Advanced" as const,
    preferredTerrain: ["Backcountry", "Groomed"] as const,
    homeResort: "Whistler Blackcomb",
    currentResort: "Whistler Blackcomb",
  },
  {
    id: "2",
    name: "Jack Frost",
    age: 31,
    photos: [
      "https://images.unsplash.com/photo-1542127306-0b4688895b9e?w=800",
      "https://images.unsplash.com/photo-1542127306-0b4688895b9e?w=800",
    ],
    bio: "Park rat by day, powder hound by night 🏂",
    skillLevel: "Expert" as const,
    preferredTerrain: ["Park", "Backcountry"] as const,
    homeResort: "Whistler Blackcomb",
    currentResort: "Whistler Blackcomb",
  },
];

const Home = ({ initialMatches = defaultMatches }: HomeProps) => {
  const [matches, setMatches] = useState(initialMatches);
  const [showMatchAlert, setShowMatchAlert] = useState(false);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [lastMatchedUser, setLastMatchedUser] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const handleSwipeLeft = () => {
    if (currentMatchIndex < matches.length - 1) {
      setCurrentMatchIndex(currentMatchIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    // Simulate a match with 50% probability
    const isMatch = Math.random() > 0.5;

    if (isMatch) {
      const currentProfile = matches[currentMatchIndex];
      setLastMatchedUser({
        name: currentProfile.name,
        image: currentProfile.photos[0],
      });
      setShowMatchAlert(true);
    }

    if (currentMatchIndex < matches.length - 1) {
      setCurrentMatchIndex(currentMatchIndex + 1);
    }
  };

  const handleSuperLike = () => {
    // Super likes always result in a match
    const currentProfile = matches[currentMatchIndex];
    setLastMatchedUser({
      name: currentProfile.name,
      image: currentProfile.photos[0],
    });
    setShowMatchAlert(true);

    if (currentMatchIndex < matches.length - 1) {
      setCurrentMatchIndex(currentMatchIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <main className="pt-16 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        {matches.length > 0 && currentMatchIndex < matches.length ? (
          <SwipeCard
            profile={matches[currentMatchIndex]}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
            onSuperLike={handleSuperLike}
          />
        ) : (
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              No more profiles to show
            </h2>
            <p className="text-gray-500">
              Check back later for more potential matches!
            </p>
          </div>
        )}

        {showMatchAlert && lastMatchedUser && (
          <MatchAlert
            isOpen={showMatchAlert}
            onClose={() => setShowMatchAlert(false)}
            matchedUser={lastMatchedUser}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
