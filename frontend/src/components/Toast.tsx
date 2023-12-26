import { useEffect } from "react";

type ToastProp = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onclose: () => void;
};

const Toast = ({ message, type, onclose }: ToastProp) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onclose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onclose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-4 z-50 right-4 p-3 rounded-md bg-green-600 text-white max-w-md"
      : "fixed top-4 z-50 right-4 p-2 rounded-md bg-red-600 text-white max-w-md";

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
