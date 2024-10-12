export default function LoadingBar() {
  return (
    <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 overflow-hidden">
      <div className="w-1/3 h-full bg-sky-400 dark:bg-sky-700 animate-loading-bar"></div>
    </div>
  )
}
