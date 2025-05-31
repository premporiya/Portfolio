import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { MessageCircleCode, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"; // ✅ import toast

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast(); // ✅ initialize toast

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post<{ answer: string }>(
        "http://localhost:5000/ask",
        { question: input }
      );
      const assistantMessage = {
        role: "assistant",
        text: response.data.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong." },
      ]);
    }
  };

  useEffect(() => {
    if (messages.length >= 4 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleChatIconClick = () => {
    // ✅ Only show toast, don't open the chatbot box
    toast({
      title: "Under Maintenance 🚧",
      description: "This application is currently under maintenance.",
    });

    // Do NOT toggle isOpen
    // setIsOpen(!isOpen); ❌ Removed this line
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      <div
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-3 cursor-pointer shadow-md z-50 transition-all hover:bg-blue-700 hover:scale-105"
        onClick={handleChatIconClick}
      >
        <MessageCircleCode />
      </div>

      {/* Chat Window - won't render unless isOpen = true */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-16 right-4 w-72 h-[45vh] bg-white shadow-xl rounded-md flex flex-col justify-between z-50 border border-gray-300"
        >
          {/* HEADER */}
          <div className="relative flex justify-between items-center px-3 py-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src="/Logo.png" alt="Bot Logo" className="w-5 h-5" />
              <h2 className="text-xs font-semibold">AI Assistant</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-0.5 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4 text-gray-700 hover:text-red-500" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto px-2 py-2 text-xs space-y-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-1 rounded ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* FOOTER */}
          <div className="border-t border-gray-200 px-2 py-2 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask..."
              className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
            />
            <Button
              size="sm"
              onClick={sendMessage}
              className="bg-blue-600 text-white rounded-full p-3 cursor-pointer shadow-md z-50"
            >
              Go
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
