import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  VisuallyHidden,
} from '@/components/ui/dialog';

interface InsufficientBalanceModalProps {
  showInsufficientModal: boolean;
  setShowInsufficientModal: (show: boolean) => void;
  insufficientType: string;
}

export default function InsufficientBalanceModal({
  showInsufficientModal,
  setShowInsufficientModal,
  insufficientType,
}: InsufficientBalanceModalProps) {
  return (
    <Dialog
      open={showInsufficientModal}
      onOpenChange={setShowInsufficientModal}
    >
      <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-md">
        {/**웹 접근성 정책으로 보이지 않는 텍스트 추가 */}
        <VisuallyHidden>
          <DialogTitle>잔액 부족 알림</DialogTitle>
        </VisuallyHidden>
        <div className="py-6 text-center space-y-4">
          <div className="space-y-2">
            <p className="text-lg font-semibold">
              You dont have enough {insufficientType}/KAIA to purchase $VIP.
            </p>
            <p className="text-gray-300">Please check your wallet.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
