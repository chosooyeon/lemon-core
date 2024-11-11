import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@components/Layout/Layout';

// 예시 페이지 컴포넌트들
const Dashboard = () => <div>Dashboard Content</div>;
const Projects = () => <div>Projects Content</div>;
const Tasks = () => <div>Tasks Content</div>;
const Settings = () => <div>Settings Content</div>;

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};