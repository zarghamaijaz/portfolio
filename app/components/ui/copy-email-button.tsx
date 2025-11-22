"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import Button from "./button";
import { toast } from "react-toastify";
import { MY_EMAIL } from "@/constants";

const copyToClipboard = () => {
  const text = MY_EMAIL;
  const textarea = document.createElement("textarea");
  textarea.value = text;

  // Prevent scrolling to bottom
  textarea.style.position = "fixed";
  textarea.style.left = "-999999px";

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  try {
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    toast.success(`Copied "${text}" to clipboard`);
  } catch (err) {
    document.body.removeChild(textarea);
    toast.error(`Unable to copy "${text}" to clipboard`);
  }
};

const CopyEmailButton = () => {
  return (
    <Button className="flex items-center group" onClick={copyToClipboard}>
      <Copy
        size="16"
        className="w-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200"
      />
      <span>Email</span>
    </Button>
  );
};

export default CopyEmailButton;
