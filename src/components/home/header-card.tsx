import { Card, CardContent } from '@/components/ui/card';

export default function HeaderCard() {
  return (
    <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm mb-6 md:mb-8">
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Poly Betting
            </h1>
            <p className="text-gray-400 text-sm md:text-base">
              정치 예측 및 배팅 플랫폼
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
