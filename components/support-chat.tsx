"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { m, AnimatePresence, useReducedMotion } from "motion/react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface Message {
  id: string;
  content: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    content: "Hi there! Welcome to Atmos Performance. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
  {
    id: "2",
    content:
      "I can answer questions about our cryotherapy equipment, training programs, or help you schedule a consultation.",
    sender: "bot",
    timestamp: new Date(),
  },
];

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Handle keyboard escape to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        chatButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate bot response (placeholder for future implementation)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content:
            "Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our website or schedule a consultation.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const buttonAnimation = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      };

  const chatWindowAnimation = shouldReduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
      };

  return (
    <LazyMotionProvider>
      {/* Skip link for screen readers */}
      <a
        href="#support-chat-button"
        className="sr-only focus:not-sr-only focus:fixed focus:bottom-24 focus:right-6 focus:z-[60] focus:rounded-md focus:bg-[var(--atmos-blue)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to chat
      </a>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <AnimatePresence mode="wait">
          {isOpen && (
            <m.div
              key="chat-window"
              role="dialog"
              aria-label="Support chat"
              aria-modal="true"
              className="flex h-[min(500px,calc(100vh-120px))] w-[min(380px,calc(100vw-48px))] flex-col overflow-hidden rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] shadow-2xl sm:h-[500px] sm:w-[380px]"
              {...chatWindowAnimation}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[var(--atmos-border)] bg-[var(--atmos-blue)] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="size-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      Atmos Support
                    </h2>
                    <p className="text-xs text-white/80">
                      We typically reply in minutes
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex size-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label="Close chat"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-4"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                <div className="flex flex-col gap-3">
                  {messages.map((message) => (
                    <m.div
                      key={message.id}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          message.sender === "user"
                            ? "bg-[var(--atmos-blue)] text-white"
                            : "bg-[var(--atmos-light-gray)] text-[var(--atmos-ink)]"
                        }`}
                      >
                        {message.content}
                      </div>
                    </m.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-[var(--atmos-border)] bg-[var(--atmos-canvas)] p-4">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                    className="flex-1 rounded-full border border-[var(--atmos-border)] bg-[var(--atmos-light-gray)] px-4 py-2.5 text-sm text-[var(--atmos-ink)] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--atmos-blue)]/20"
                    aria-label="Type your message"
                  />
                  <m.button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="flex size-10 items-center justify-center rounded-full bg-[var(--atmos-blue)] text-white transition-opacity disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2"
                    aria-label="Send message"
                    {...(inputValue.trim() ? buttonAnimation : {})}
                  >
                    <Send className="size-4" />
                  </m.button>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* FAB Toggle Button */}
        <m.button
          ref={chatButtonRef}
          id="support-chat-button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex size-14 items-center justify-center rounded-full bg-[var(--atmos-blue)] text-white shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2"
          aria-label={isOpen ? "Close support chat" : "Open support chat"}
          aria-expanded={isOpen}
          aria-controls="support-chat-window"
          {...buttonAnimation}
          transition={{ duration: 0.15, ease: EASE_OUT }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <m.span
                key="close"
                initial={shouldReduceMotion ? false : { rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={shouldReduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="size-6" />
              </m.span>
            ) : (
              <m.span
                key="open"
                initial={shouldReduceMotion ? false : { rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={shouldReduceMotion ? undefined : { rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="size-6" />
              </m.span>
            )}
          </AnimatePresence>
        </m.button>
      </div>
    </LazyMotionProvider>
  );
}
