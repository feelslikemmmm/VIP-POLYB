import { Globe, MessageCircle, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center gap-4 pt-3">
      <a
        href="https://t.me/victory_game_chat"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a
        href="https://x.com/vip_game_crypto"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="https://vip.2tm.fun/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        <Globe className="w-5 h-5" />
      </a>
    </div>
  );
}
