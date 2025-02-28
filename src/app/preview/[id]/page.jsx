import Link from 'next/link';
import SocialPreview from '../../components/SocialPreview';

export default async function PreviewPage(props) {
  const id = props.params.id;
  const image = `/${id}.jpg`;
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col space-y-6">
            {/* 헤더 */}
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                메타데이터 미리보기
              </h1>
              <p className="text-gray-600 max-w-lg mx-auto text-sm">
                Social Share Example {id}의 소셜 미디어 미리보기 모습입니다
              </p>
            </div>
            
            {/* 미리보기 */}
            <div className="w-full">
              <SocialPreview id={id} image={image} />
            </div>
            
            {/* 돌아가기 버튼 */}
            <div className="flex justify-center mt-8">
              <Link href={`/seo-share/${id}`} className="bg-gray-800 text-white hover:bg-gray-700 transition-colors px-5 py-2.5 rounded-lg text-sm font-medium">
                메인 페이지로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 