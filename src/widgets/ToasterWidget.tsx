import { Toaster } from "sonner";

export default function ToasterWidget() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        classNames: {
          success: "!bg-green-50 !text-green-800 [&_svg]:!text-green-600 [&>*>svg]:!text-green-600",
          error: "!bg-red-50 !text-red-800 [&_svg]:!text-red-600 [&>*>svg]:!text-red-600",
          warning:
            "!bg-orange-50 !text-orange-800 [&_svg]:!text-orange-500 [&>*>svg]:!text-orange-500",
          info: "!bg-yellow-50 !text-yellow-800 [&_svg]:!text-yellow-500 [&>*>svg]:!text-yellow-500",
        },
      }}
    />
  );
}
