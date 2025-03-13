
import React from "react";

interface NewsletterProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubscribe: (e: React.FormEvent) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ email, setEmail, handleSubscribe }) => {
  return (
    <div className="mt-8">
      <p className="text-sm mb-3">
        Sharing my journey to making a looooooooooottt of money!
      </p>
      <form onSubmit={handleSubscribe} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full p-3 border border-gray-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-gray-900 text-white p-3 hover:bg-gray-800 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
