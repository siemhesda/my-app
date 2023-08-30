import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";


type Props = { note: string }

export default function NoteCard({ note }: Props) {

    return <Card className="w-[350px] my-2">
        <CardHeader>
            <CardDescription>
                {note}
            </CardDescription>
        </CardHeader>
    </Card>
}