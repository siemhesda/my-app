import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const formSchema = z.object({
  note: z.string().min(2, {
    message: "Nnote must be at least 10 characters.",
  }),
});

type Props = { onCreate: (values: any) => void; onClose: () => void };

export default function InputCard({ onCreate, onClose }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { note: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onCreate({ ...values, id: Math.random() * 1000 });
    form.reset();
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create a new note</CardTitle>
        <CardDescription>
          Input details below to create a new note
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="New note ..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex">
              <Button type="submit" className="mr-1">
                Create
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
