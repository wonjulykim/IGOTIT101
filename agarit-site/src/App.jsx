import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import ChapterQuiz from './pages/ChapterQuiz'
import ChapterPrint from './pages/ChapterPrint'
import AdminLogin from './pages/AdminLogin'
import AdminEdit from './pages/AdminEdit'
import StudentLogin from './pages/StudentLogin'
import MyAnalytics from './pages/MyAnalytics'

export default function App() {
  return (
    <Routes>
      <Route path="/chapter/:chapterId/print" element={<ChapterPrint />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chapter/:chapterId/lesson/:lessonId" element={<Lesson />} />
        <Route path="/chapter/:chapterId/quiz" element={<ChapterQuiz />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/edit/:chapterId/:lessonId" element={<AdminEdit />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/me" element={<MyAnalytics />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
