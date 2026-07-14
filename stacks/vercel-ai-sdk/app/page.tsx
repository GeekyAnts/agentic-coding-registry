"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Chat() {
  const { messages, sendMessage } = useChat();
  const [input, setInput] = useState("");

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem" }}>
      <h1>AI Chat</h1>
      <div>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{ whiteSpace: "pre-wrap", margin: "0.5rem 0" }}
          >
            <strong>{message.role === "user" ? "You: " : "AI: "}</strong>
            {message.parts.map((part, i) =>
              part.type === "text" ? (
                <span key={`${message.id}-${i}`}>{part.text}</span>
              ) : null,
            )}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) return;
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          placeholder="Say something…"
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </form>
    </main>
  );
}
