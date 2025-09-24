import Link from "next/link";

export default function ChatPage() {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-bold mb-4">Chat</h1>
      <p className="text-muted-foreground mb-6">
        Welcome to the chat interface. This is where your chat functionality will be
        implemented.
      </p>
      
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Test Chat Slugs</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link 
            href="/chat/hello-world" 
            className="p-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <h3 className="font-medium">Hello World Chat</h3>
            <p className="text-sm text-muted-foreground">/chat/hello-world</p>
          </Link>
          
          <Link 
            href="/chat/test-conversation" 
            className="p-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <h3 className="font-medium">Test Conversation</h3>
            <p className="text-sm text-muted-foreground">/chat/test-conversation</p>
          </Link>
          
          <Link 
            href="/chat/123" 
            className="p-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <h3 className="font-medium">Numeric Chat</h3>
            <p className="text-sm text-muted-foreground">/chat/123</p>
          </Link>
          
          <Link 
            href="/chat/my-awesome-chat" 
            className="p-3 border rounded-lg hover:bg-muted transition-colors"
          >
            <h3 className="font-medium">Awesome Chat</h3>
            <p className="text-sm text-muted-foreground">/chat/my-awesome-chat</p>
          </Link>
        </div>
      </section>

     



    </div>
  );
}
