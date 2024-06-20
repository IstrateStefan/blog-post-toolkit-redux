import { Routes, Route, Navigate } from 'react-router-dom';
import PostsList from './features/post/PostsList';
import AddPostForm from './features/post/AddPostForm';
import SinglePostPage from './features/post/SinglePostPage';
import EditPostForm from './features/post/EditPostForm';
import UsersList from './features/users/UsersList';
import UserPage from './features/users/UserPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} />

            <Route path="post">
                <Route index element={<AddPostForm />} />
                <Route path=":postId" element={<SinglePostPage />} />
                <Route path="edit/:postId" element={< EditPostForm />} />
            </Route>

            <Route path="user">
                <Route index element={<UsersList />} />
                <Route path=":userId" element={<UserPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
    </Routes>
  )
}

export default App
