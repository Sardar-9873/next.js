export default function Loading() {
  return (
    <div className="flex justify-center items-center space-x-2 min-h-screen bg-gray-50">
      <div className="h-4 w-4 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]" />
      <div className="h-4 w-4 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]" />
      <div className="h-4 w-4 rounded-full bg-blue-600 animate-bounce" />
    </div>
  );
}
