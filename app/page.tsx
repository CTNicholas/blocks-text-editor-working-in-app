"use client";

import { LiveList } from "@liveblocks/client";
import { nanoid } from "nanoid";
import Editor from "../src/Editor";
import { RoomProvider } from "../src/liveblocks.config";
import { BlockType, CustomElement } from "../src/types";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const initialValue: CustomElement[] = [
  {
    id: nanoid(),
    type: BlockType.Title,
    children: [
      {
        text: "Collaborative Block Text Editor",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.Paragraph,
    children: [
      {
        text: "An open-source collaborative block-based text editor built with Slate, Liveblocks, and Next.js. People can write and embed all kinds of content types together in real-time.",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.H2,
    children: [
      {
        text: "More than just text…",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.Paragraph,
    children: [
      {
        text: "You can add tasks, embed videos, and more. And because it's open-source, you can easily extend this to support pretty much anything you want.",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.Paragraph,
    children: [
      {
        text: "",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.ToDo,
    children: [
      {
        text: "Open block text editor",
      },
    ],
    checked: true,
  },
  {
    id: nanoid(),
    type: BlockType.ToDo,
    children: [
      {
        text: "Invite people to this document",
      },
    ],
    checked: false,
  },
  {
    id: nanoid(),
    type: BlockType.ToDo,
    children: [
      {
        text: "Try dark mode",
      },
    ],
    checked: false,
  },
  {
    id: nanoid(),
    type: BlockType.ToDo,
    checked: false,
    children: [
      {
        text: "Add new blocks",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.ToDo,
    children: [
      {
        text: "Reorder blocks",
      },
    ],
    checked: false,
  },
  {
    id: nanoid(),
    type: BlockType.ToDo,
    children: [
      {
        text: "Watch video below",
      },
    ],
    checked: false,
  },
  {
    id: nanoid(),
    type: BlockType.Paragraph,
    children: [
      {
        text: "",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.Video,
    url: "https://youtube.com/embed/T5eoM9d2WU8",
    children: [
      {
        text: "",
      },
    ],
  },
  {
    id: nanoid(),
    type: BlockType.Image,
    url: "https://raw.githubusercontent.com/liveblocks/liveblocks/main/.github/assets/header-wordmark-light.svg",
    alt: "Liveblocks",
    children: [
      {
        text: "",
      },
    ],
  },
];

export default function Page() {
  const roomId = "nextjs-block-text-editor-advanced";

  return (
    <TooltipProvider>
      <RoomProvider
        id={roomId}
        initialStorage={{
          blocks: new LiveList(initialValue),
        }}
        initialPresence={{
          selectedBlockId: null,
        }}
      >
        <Editor />
      </RoomProvider>
    </TooltipProvider>
  );
}
