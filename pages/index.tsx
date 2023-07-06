import ChatBubble from "@/components/ChatBubble";
import { Card, Center, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Chat() {
  const form = useForm({
    initialValues: {
      url: "",
    },
  });

  const url = form.getInputProps("url").value;

  return (
    <>
      <Center w="100dvw" h="100dvh">
        <Card w={600}>
          <Stack>
            <form>
              <TextInput
                w="100%"
                placeholder="Enter website address"
                label="Chat to any web page!"
                {...form.getInputProps("url")}
              />
            </form>
          </Stack>
        </Card>
      </Center>
      {url && <ChatBubble webUrl={url} />}
    </>
  );
}
