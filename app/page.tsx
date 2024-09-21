export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        我是谁
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Sunny，00年生人。毕业于广州某不知名二本。目前在广州从事前端开发工作，期望转型全栈开发，喜欢研究新技术。
      </p>
      <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        我的技能
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        前端：Vue、React、Next.js、TypeScript、JavaScript、HTML、CSS
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        后端：Node.js、Nest.js、数据库（学习中）
      </p>
      <ul className="mt-6 leading-8 flex gap-4">
        <li className="link">
          <a href="https://github.com/sdrpsps" target="_blank">
            GitHub
          </a>
        </li>
        <li className="link">
          <a href="mailto:sunny@bytespark.app">Email</a>
        </li>
      </ul>
    </>
  );
}
