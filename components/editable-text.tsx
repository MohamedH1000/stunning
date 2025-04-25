"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function EditableText({
  value,
  onChange,
  className,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Place cursor at the end of the text
      inputRef.current.selectionStart = inputRef.current.value.length;
    }
  }, [isEditing]);

  useEffect(() => {
    setEditedValue(value);
  }, [value]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(editedValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
      onChange(editedValue);
    }
  };

  return isEditing ? (
    <textarea
      ref={inputRef}
      value={editedValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`${className} w-full bg-transparent border border-slate-300 dark:border-slate-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none`}
      rows={Math.max(1, editedValue.split("\n").length)}
    />
  ) : (
    <div
      onClick={handleClick}
      className={`${className} cursor-pointer hover:ring-2 hover:ring-slate-300 dark:hover:ring-slate-700 hover:ring-opacity-50 rounded p-1 transition-all`}
    >
      {value}
    </div>
  );
}
