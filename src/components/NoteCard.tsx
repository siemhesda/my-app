import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

type Props = {
    note: string;
    onRemove: () => void; // Define the type for onRemove prop
};

export default function NoteCard({ note, onRemove }: Props) {
    return (
        <Card className="w-[350px] my-2">
            <CardHeader>
                <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <CardDescription>{note}</CardDescription>
                    <Button
                        className="mr-3"
                        variant='outline'
                        onClick={onRemove}
                        style={{ backgroundColor: "red", color: "white" }}
                    >
                        X
                    </Button>
                </CardContent>
            </CardHeader>
        </Card>
    );
}



