import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import ChapterQuiz from './pages/ChapterQuiz'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chapter/:chapterId/lesson/:lessonId" element={<Lesson />} />
        <Route path="/chapter/:chapterId/quiz" element={<ChapterQuiz />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
