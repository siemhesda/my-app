import React from "react";
import { Card, CardDescription, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Note } from "@/App";

type Props = {
  note: Note;
  onRemove: (id: number) => void; // Define the type for onRemove prop
};

export default function NoteCard({ note, onRemove }: Props) {
  return (
    <Card className="w-[350px] my-2">
      <CardHeader>
        <CardFooter className="justify-between">
          <CardDescription>{note.note}</CardDescription>
          <Button
            className="ml-1"
            variant="destructive"
            onClick={() => onRemove(note.id)}
          >
            X
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
