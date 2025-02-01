import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Camera, Upload } from "lucide-react";

interface ProfileCreationProps {
  onSubmit?: (data: any) => void;
  isOpen?: boolean;
}

const ProfileCreation = ({
  onSubmit = () => {},
  isOpen = true,
}: ProfileCreationProps) => {
  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const terrainTypes = ["Groomed", "Park", "Backcountry", "All Mountain"];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Create Your SkiMate Profile
        </h1>

        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({});
          }}
        >
          {/* Basic Info Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-800">
              Basic Information
            </h2>

            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  defaultValue="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your age"
                  defaultValue="25"
                />
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="mt-4">
              <Label>Profile Photos</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-200 transition-colors"
                  >
                    <div className="text-center">
                      <Camera className="w-8 h-8 mx-auto text-slate-400" />
                      <span className="text-sm text-slate-500">Add Photo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ski Details Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-800">Ski Details</h2>

            <div className="grid gap-4">
              <div>
                <Label htmlFor="skill-level">Skill Level</Label>
                <Select defaultValue="Intermediate">
                  <SelectTrigger>
                    <SelectValue placeholder="Select your skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    {skillLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="preferred-terrain">Preferred Terrain</Label>
                <Select defaultValue="All Mountain">
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred terrain" />
                  </SelectTrigger>
                  <SelectContent>
                    {terrainTypes.map((terrain) => (
                      <SelectItem key={terrain} value={terrain}>
                        {terrain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="home-resort">Home Resort</Label>
                <Input
                  id="home-resort"
                  placeholder="Enter your home resort"
                  defaultValue="Whistler Blackcomb"
                />
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-800">About You</h2>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell others about yourself..."
                className="h-32"
                defaultValue="Looking for someone to share powder days with! 🎿"
              />
            </div>
          </div>

          {/* Pass Verification */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-800">
              Resort Pass Verification
            </h2>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <p className="text-sm text-slate-600">
                Upload a photo of your resort pass
              </p>
              <Button variant="outline" className="mt-4">
                Select File
              </Button>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Create Profile
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ProfileCreation;
