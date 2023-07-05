import { BubbleChat } from "flowise-embed-react";
import React, { useEffect, useState } from "react";

interface urlString {
  webUrl: string;
}

function ChatBubble({ webUrl }: urlString) {
  return (
    <BubbleChat
      chatflowid="71597665-efea-4045-bac6-13bf8372103d"
      apiHost="https://flowise.maziar.app"
      chatflowConfig={{
        topK: 4,
        url: webUrl,
      }}
    />
  );
}

export default ChatBubble;
