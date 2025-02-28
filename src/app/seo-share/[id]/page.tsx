import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> { 
  const id = (await params).id;
  // 유효한 id는 "1", "2", "3", "4"입니다. 유효하지 않은 경우 "1"을 기본으로 사용합니다.
  const validIds = ['1', '2', '3', '4'];
  const image = validIds.includes(id) ? `/${id}.jpg` : `/1.jpg`;

  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

  return {
    metadataBase: new URL(baseUrl),
    title: `Social Share Example ${id} - My NextJS App`,
    description:
      'This page demonstrates dynamic meta tag assignment with fixed images for social sharing.',
    openGraph: {
      title: `Social Share Example ${id} - My NextJS App`,
      description:
        'Learn how to dynamically assign meta tags with fixed images for rich social media previews.',
      url: `${baseUrl}/seo-share/${id}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Social Share Image ${id}`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Social Share Example ${id} - My NextJS App`,
      description:
        'Experience enhanced social media sharing with fixed images using OpenGraph and Twitter Card meta tags.',
      images: [image],
    },
  };
}

export default async function SocialSharePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const image = `/${id}.jpg`;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-6">
            {/* 타이틀 */}
            <div className="text-center mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                SEO Share Example {id}
              </h1>
              <p className="text-gray-600 max-w-lg mx-auto text-sm">
                이 페이지는 동적 메타 태그 할당 예제를 보여줍니다.
              </p>
            </div>

            {/* 이미지 - 더 크게 키움 */}
            <div className="w-full mx-auto">
              <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden shadow-sm border border-gray-200 max-h-[500px] relative">
                <Image
                  src={image}
                  alt={`Fixed Social Share Image ${id}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link
                href={`/seo-share/${Math.floor(Math.random() * 4) + 1}`}
                className="bg-gray-800 text-white hover:bg-gray-700 transition-colors px-6 py-3 rounded-lg text-sm font-medium"
              >
                다른 예제 보기
              </Link>
              <Link
                href={`/preview/${id}`}
                className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors px-6 py-3 rounded-lg text-sm font-medium"
              >
                메타데이터 미리보기 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
