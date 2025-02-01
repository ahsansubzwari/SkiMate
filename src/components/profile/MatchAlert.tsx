import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface MatchAlertProps {
  isOpen?: boolean;
  onClose?: () => void;
  matchedUser?: {
    name: string;
    image: string;
  };
  onStartChat?: () => void;
}

const MatchAlert = ({
  isOpen = true,
  onClose = () => {},
  matchedUser = {
    name: "Sarah",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ski123",
  },
  onStartChat = () => {},
}: MatchAlertProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-b from-blue-50 to-white max-w-md mx-auto rounded-xl shadow-xl overflow-hidden">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold text-blue-900 mb-4">
            It's a Match!
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex justify-center"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                src={matchedUser.image}
                alt={matchedUser.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 mb-2">
              You and <span className="font-semibold">{matchedUser.name}</span>{" "}
              have matched!
            </p>
            <p className="text-sm text-gray-500">
              Time to plan your next ski run together?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-3"
          >
            <Button
              onClick={onStartChat}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              Keep Swiping
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MatchAlert;
