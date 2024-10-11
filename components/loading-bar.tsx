export default function LoadingBar() {
  return (
    <div className="w-full h-1 bg-gray-200 overflow-hidden">
      <div className="w-1/3 h-full bg-sky-500 animate-loading-bar"></div>
    </div>
  )
}
