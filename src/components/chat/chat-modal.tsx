"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Trash2, Bot } from "lucide-react";
import { useChatStore } from "@/lib/store/chat-store";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export function ChatModal() {
    const { isOpen, setIsOpen, setHasInteracted } = useChatStore();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const [messages, setMessages] = React.useState<Message[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [localInput, setLocalInput] = React.useState("");

    const handleLocalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalInput(e.target.value);
    };

    const handleLocalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!localInput.trim() || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), role: "user", content: localInput };
        setMessages((prev) => [...prev, userMessage]);
        setLocalInput("");
        setIsLoading(true);
        setHasInteracted(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            if (!response.ok) throw new Error("Failed to fetch");

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            const assistantMessage: Message = { id: (Date.now() + 1).toString(), role: "assistant", content: "" };

            setMessages((prev) => [...prev, assistantMessage]);

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    assistantMessage.content += chunk;

                    setMessages((prev) => {
                        const newMessages = [...prev];
                        newMessages[newMessages.length - 1] = { ...assistantMessage };
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { id: Date.now().toString(), role: "assistant", content: "Sorry, something went wrong. Please try again." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    React.useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleClear = () => {
        setMessages([]);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px]"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed bottom-4 right-4 z-50 flex h-[600px] w-full max-w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:right-6"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30">
                                    <Sparkles className="h-4 w-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">Sebs AI</h3>
                                    <p className="text-[10px] text-white/50">Powered by GPT-4o-mini</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={handleClear}
                                    className="rounded-md p-2 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
                                    title="Clear chat"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md p-2 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.length === 0 ? (
                                <div className="flex h-full flex-col items-center justify-center gap-6 text-center text-white/40">
                                    <div className="relative">
                                        <div className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-xl opacity-50" />
                                        <Sparkles className="relative h-10 w-10 text-indigo-400/80" />
                                    </div>
                                    <div className="max-w-[280px] space-y-3">
                                        <p className="text-sm font-medium text-white/80">Hola! 👋 Soy la IA de Sebs.</p>
                                        <p className="text-xs">Pregúntame sobre sus proyectos, experiencia o cómo contactarlo.</p>
                                        <div className="flex flex-wrap justify-center gap-2 pt-2">
                                            {[
                                                "¿Quién es Sebastián?",
                                                "Cuéntame de sus proyectos",
                                                "¿Qué tecnologías usa?",
                                                "¿Cómo lo contacto?",
                                            ].map((suggestion) => (
                                                <button
                                                    key={suggestion}
                                                    onClick={() => {
                                                        setLocalInput(suggestion);
                                                        inputRef.current?.focus();
                                                    }}
                                                    className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                                                >
                                                    {suggestion}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn("flex w-full gap-2", msg.role === "user" ? "justify-end" : "justify-start")}
                                        >
                                            {msg.role === "assistant" && (
                                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 mt-1 ring-1 ring-indigo-500/30">
                                                    <Bot className="h-3 w-3" />
                                                </div>
                                            )}
                                            <div
                                                className={cn(
                                                    "max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm",
                                                    msg.role === "user"
                                                        ? "bg-indigo-600 text-white rounded-tr-none"
                                                        : "bg-white/10 text-white/90 rounded-tl-none border border-white/5"
                                                )}
                                            >
                                                <div className="prose prose-invert prose-sm max-w-none [&>p]:mb-0 [&>ul]:my-1 [&>li]:my-0">
                                                    <ReactMarkdown
                                                        components={{
                                                            a: ({ ...props }) => (
                                                                <a {...props} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:underline" />
                                                            ),
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {isLoading && messages[messages.length - 1]?.role === "user" && (
                                        <div className="flex w-full gap-2 justify-start">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 mt-1 ring-1 ring-indigo-500/30">
                                                <Bot className="h-3 w-3" />
                                            </div>
                                            <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 border border-white/5">
                                                <div className="flex gap-1">
                                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.3s]" />
                                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:-0.15s]" />
                                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-white/10 p-4 bg-black/40 backdrop-blur-md">
                            <form onSubmit={handleLocalSubmit} className="relative flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    value={localInput}
                                    onChange={handleLocalInputChange}
                                    placeholder="Escribe un mensaje..."
                                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-indigo-500/50 focus:bg-white/10 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-white/30"
                                />
                                <button
                                    type="submit"
                                    disabled={!localInput.trim() || isLoading}
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:scale-100 disabled:shadow-none"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
