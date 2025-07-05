import { Card, CardContent } from '@/components/ui/card';

interface HeaderCardProps {
  title: string;
}

export default function HeaderCard({ title }: HeaderCardProps) {
  return (
    <Card className="bg-gray-800/80 border-gray-700 backdrop-blur-sm mb-6 md:mb-8">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
