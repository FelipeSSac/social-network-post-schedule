import { useContext } from 'react';
import { PostContext } from '../contexts/Post';

export default function usePost() {
  const post = useContext(PostContext);

  return post;
}
