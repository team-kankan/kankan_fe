import Button from "./button";

type KaKaoButtonProps = {
  onClick: () => void;
  isLoading: boolean;
};

export default function KaKaoButton({ onClick, isLoading }: KaKaoButtonProps) {
  return (
    <Button
      type="button"
      className="bg-[#FEE500] text-black hover:bg-[#FEE500] hover:opacity-90"
      onClick={onClick}
      disabled={isLoading}
    >
      <img src="/kakao.png" alt="kakao" className="w-4 h-4" />
      카카오 로그인
    </Button>
  );
}
