import { redirect } from 'next/navigation';

export default function Home() {
  // 첫 번째 SEO 공유 예시 페이지로 리다이렉트
  redirect('/seo-share/1');
}
