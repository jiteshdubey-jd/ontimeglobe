import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { emailSchema } from "@/formSchema/newsLetterSchema";
import { Button } from "../ui/button";

const TrackingForm = () => {
  const form = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      trackingId: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form className="flex flex-row gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="trackingId"
          
          render={({ field }) => (
            <FormItem className="w-full">
              {console.log(field)}
              <FormControl>
                <Input placeholder="TRACKING ID" {...field}  className="bg-transparent text-white w-full"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#EC4621] hover:bg-[#FF6A35] w-full"
        >
          TRACK
        </Button>
      </form>
    </Form>
  );
};

export default TrackingForm;
